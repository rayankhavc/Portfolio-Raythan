import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1d1d1f',
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 600, letterSpacing: '-0.03em', color: '#f5f1ea' }}>
          Raythan
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#939398',
            marginTop: 20,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Agence digitale — Loire-Atlantique
        </div>
      </div>
    ),
    { ...size }
  )
}
