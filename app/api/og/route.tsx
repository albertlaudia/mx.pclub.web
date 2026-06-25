import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * Dynamic OG image generation.
 * Used by blog posts and app landing pages via:
 *   <meta property="og:image" content="/api/og?title=...&subtitle=..." />
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'positiveness.club'
  const subtitle = searchParams.get('subtitle') || ''
  const accent = searchParams.get('accent') || '#FF6B5B'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #FAFAF7 0%, #FFFFFF 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
            }}
          >
            positiveness
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#1A1A1A',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 24,
              display: 'flex',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 32,
                color: '#6B6B6B',
                lineHeight: 1.3,
                display: 'flex',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 80,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}30, transparent 70%)`,
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}