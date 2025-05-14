import { Container } from '@mantine/core'
import { ReactNode } from 'react'

interface FullScreenSectionProps {
  children: ReactNode
  id?: string // Optional for hash navigation
  heightOffset?: number // Allows custom header offsets if needed
}

export default function FullScreenSection({
  children,
  id,
  heightOffset = 110,
}: FullScreenSectionProps) {
  return (
    <Container
      id={id}
      size="xl"
      style={{
        width: '100%',
        height: `calc(100vh - ${heightOffset}px)`, // Subtracts header height
        overflow: 'hidden', // Prevents extra scrolling
        display: 'flex', // Ensures content is centered properly
        alignItems: 'center', // Centers vertically
        justifyContent: 'center', // Centers horizontally (optional)
      }}
    >
      {children}
    </Container>
  )
}
