# Content Guide — positiveness.club blog

> Editorial guide for the "Field notes" blog. Last updated 2026-06-29.

## Voice

The pclub voice has three rules:

1. **Calm, not clever.** We write the way we talk at 11pm with a friend, not the way we write a press release.
2. **Specifics, not platitudes.** "Set a 5-minute timer and write 200 words" beats "consistency is the key to success."
3. **One idea per post.** If the post is trying to make 3 points, it's trying to make 0 points.

## Length

- **Target: 500-800 words** (4-7 min read)
- **Hard max: 1,500 words** (longer than this and we should split)
- **Hard min: 300 words** (shorter than this and it's a tweet, not a post)

## Structure

Every post has this shape:

```
1. Hook (1-2 sentences)
   → The thing that makes someone read past the headline
2. The problem (1 paragraph)
   → Why this matters NOW
3. The idea (1-3 paragraphs)
   → The main argument, with specifics
4. The proof (1-2 paragraphs)
   → Stories, examples, studies
5. The action (1 paragraph)
   → What the reader does with this
```

If a post doesn't have steps 1, 2, 3, 4, 5, it's not a post — it's a journal entry.

## Topics

The blog has 5 topics. Pick the one that fits before writing.

| Topic | Slug | What it covers |
|---|---|---|
| Books & learning | `books` | Book recommendations, how to read more, what we learned |
| Wellness & calm | `wellness` | Anxiety, sleep, breathing, mental health |
| Habits & routine | `habits` | Morning rituals, habit design, behavior change |
| Music & craft | `music` | Guitar, instruments, makers |
| Field notes | `meta` | How we build, why we build, the philosophy of small software |

Every post must map to exactly one topic. If it doesn't, it's two posts.

## Headlines

- Use the **number + promise** format when possible: "5 books that change how you think about money"
- Avoid clickbait patterns: "You won't believe…", "X reasons why…", questions as headlines
- Include the **specific result**, not the topic: not "On morning routines" → "Why morning routines fail (and what actually works instead)"

## SEO / keywords

- 1 primary keyword per post (what someone would Google)
- 2-4 secondary keywords
- 3-5 tags (specific, not generic — "morning routine" yes, "self-improvement" no)
- Meta description: 140-160 chars, must include the primary keyword
- First 100 words should contain the primary keyword naturally

## The opening 100 words

The first 100 words are the most important. They have to:

1. Hook with a specific, surprising claim
2. Establish authority without sounding like a LinkedIn post
3. Promise the reader will get something concrete

**Don't open with:** "In today's fast-paced world…", "Have you ever wondered…", "Let me tell you a story"

**Do open with:** A specific claim, a counter-intuitive statement, or a moment from real life.

## Links

- Link out to 2-3 external sources per post (studies, books, other posts)
- Use full titles in link text, not "click here"
- Internal links to other pclub posts or apps when relevant

## CTAs

- Every post gets ONE app CTA (the related app, or pclub home)
- No more than one email capture
- The CTA appears at the END, not in the middle
- "Try the app" beats "Click here to learn more"

## Editing checklist

Before publishing, ask:

- [ ] Is the opening line a hook, not a throat-clearing?
- [ ] Is the main point stated in the first 200 words?
- [ ] Is every paragraph necessary?
- [ ] Did I cut every "very", "really", "just", "actually"?
- [ ] Did I remove every "I think", "I believe" (just state it)?
- [ ] Is the title specific (not generic)?
- [ ] Does the post end with a clear next action?

## How to publish

1. Add a new `.mdx` file to `content/blog/<slug>.mdx`
2. Update `scripts/seed-pocketbase.ts` to include the new post entry
3. Run `npx tsx scripts/seed-pocketbase.ts` to push to PB
4. Commit + push to `main` (the deploy workflow will rebuild the static pages)

Posts appear on the site within 60 seconds of the next deploy cron (every 6h), or immediately if you manually trigger via the GitHub Action.

## Don'ts

- Don't write "10 reasons why X" lists. They're easy to write and easy to ignore.
- Don't write "How I built a SaaS to $X MRR" posts. We've seen them all.
- Don't write about hustle, grind culture, or "5am club." That's not who we are.
- Don't link to other people's apps/products as endorsements.
- Don't use stock photos. Use real product screenshots or hand-drawn SVGs.
