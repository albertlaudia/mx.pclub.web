import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold tracking-tight mt-12 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold tracking-tight mt-8 mb-3" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold mt-6 mb-2" {...props} />,
  p: (props) => <p className="leading-relaxed text-ink/90 mb-5" {...props} />,
  a: (props) => (
    <a
      className="text-coral underline-offset-4 hover:underline font-medium"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props) => <ul className="my-5 space-y-2 list-disc pl-6 text-ink/90" {...props} />,
  ol: (props) => <ol className="my-5 space-y-2 list-decimal pl-6 text-ink/90" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-coral bg-coral/5 px-6 py-3 my-6 rounded-r-2xl not-italic text-ink/90"
      {...props}
    />
  ),
  code: (props) => (
    <code className="px-1.5 py-0.5 rounded bg-line/40 text-[0.9em] font-mono text-ink" {...props} />
  ),
  pre: (props) => (
    <pre className="my-6 p-5 rounded-2xl bg-ink text-canvas overflow-x-auto text-sm" {...props} />
  ),
  hr: (props) => <hr className="my-10 border-line" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  em: (props) => <em className="italic text-ink" {...props} />,
}
