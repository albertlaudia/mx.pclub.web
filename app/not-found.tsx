import { Button } from '@/components/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-narrow py-24 md:py-32 text-center">
      <p className="text-display-md font-bold gradient-text mb-4">404</p>
      <h1 className="text-display-md font-bold tracking-tight mb-4">Page not found</h1>
      <p className="text-mute text-lg mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist — or moved. Try one of these instead.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button as="link" href="/" size="md">
          Go home
        </Button>
        <Button as="link" href="/apps" variant="secondary" size="md">
          See all apps
        </Button>
      </div>
    </div>
  )
}
