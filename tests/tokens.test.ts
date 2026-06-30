import { describe, expect, it } from "vitest"
import { signUnsubscribeToken, verifyUnsubscribeToken } from "@/lib/tokens"

describe("tokens — unsubscribe HMAC", () => {
  it("round-trips a valid email", () => {
    const email = "test@example.com"
    const token = signUnsubscribeToken(email)
    const verified = verifyUnsubscribeToken(token)
    expect(verified).not.toBeNull()
    expect(verified?.email).toBe(email)
  })

  it("normalizes email casing + whitespace", () => {
    const token = signUnsubscribeToken("  Test@Example.com  ")
    const verified = verifyUnsubscribeToken(token)
    expect(verified?.email).toBe("test@example.com")
  })

  it("rejects tampered payload", () => {
    const token = signUnsubscribeToken("a@b.com")
    const [payload, sig] = token.split(".")
    // Flip a byte in the payload
    const tampered = `${payload.slice(0, -2)}XX.${sig}`
    expect(verifyUnsubscribeToken(tampered)).toBeNull()
  })

  it("rejects wrong signature", () => {
    const token = signUnsubscribeToken("a@b.com")
    const [payload] = token.split(".")
    const fake = `${payload}.AAAAAAAAAA`
    expect(verifyUnsubscribeToken(fake)).toBeNull()
  })

  it("rejects garbage input", () => {
    expect(verifyUnsubscribeToken("garbage")).toBeNull()
    expect(verifyUnsubscribeToken("a.b.c")).toBeNull()
    expect(verifyUnsubscribeToken("")).toBeNull()
    expect(verifyUnsubscribeToken("....")).toBeNull()
  })
})