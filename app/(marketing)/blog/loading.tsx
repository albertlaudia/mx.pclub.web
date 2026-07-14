export default function BlogLoading() {
  return (
    <div className="container-wide py-16 md:py-24">
      <div className="max-w-2xl mb-12 space-y-4">
        <div className="h-12 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-2xl animate-pulse" />
        <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
      </div>
      <div className="flex flex-wrap gap-2 mb-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-8 w-24 bg-zinc-100 dark:bg-zinc-900 rounded-full animate-pulse"
          />
        ))}
      </div>
      <div className="h-64 bg-zinc-100 dark:bg-zinc-900 rounded-3xl mb-12 animate-pulse" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-48 bg-zinc-100 dark:bg-zinc-900 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  )
}
