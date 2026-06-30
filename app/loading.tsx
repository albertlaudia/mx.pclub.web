/**
 * Root-level loading state.
 *
 * Shown during route transitions and initial data fetches for pages
 * without a more specific loading.tsx. Pure CSS animation, no JS.
 */
export default function Loading() {
  return (
    <div className="container-wide py-20">
      <div className="space-y-6 max-w-3xl">
        {/* Skeleton hero */}
        <div className="space-y-3">
          <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
          <div className="h-14 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-2xl animate-pulse" />
          <div className="h-6 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        </div>
        {/* Skeleton grid */}
        <div className="grid gap-4 md:grid-cols-2 mt-12">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}