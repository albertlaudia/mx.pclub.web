/**
 * JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> with the given object.
 */

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}