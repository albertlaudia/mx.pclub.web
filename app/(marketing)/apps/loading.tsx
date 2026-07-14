export default function AppsLoading() {
  return (
    <div className="container-wide py-20 md:py-28">
      <div className="max-w-2xl mb-16 space-y-4">
        <div className="h-12 w-80 bg-zinc-200 dark:bg-zinc-800 rounded-2xl animate-pulse" />
        <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-72 bg-zinc-100 dark:bg-zinc-900 rounded-3xl animate-pulse" />
        ))}
      </div>
    </div>
  )
}
