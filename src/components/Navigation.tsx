import { Anchor, Group, useMantineTheme } from '@mantine/core'
import { useState } from 'react'

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('')
  const theme = useMantineTheme()

  const handleClick = (section: string) => {
    setActiveLink(section)
  }

  return (
    <Group gap="lg">
      {[
        'watch',
        'listen',
        'about',
        'press',
        'gallery',
        'subscribe',
        'contact',
      ].map((section) => (
        <Anchor
          key={section}
          href={`#${section}`}
          size="sm"
          style={{
            textDecoration: 'none',
            color: theme.colors.gray[3],
            fontWeight: activeLink === section ? 'bold' : 'normal',
            transition: 'font-weight 0.2s ease',
          }}
          onClick={() => handleClick(section)}
          onMouseEnter={(e) => (e.currentTarget.style.fontWeight = 'bold')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fontWeight =
              activeLink === section ? 'bold' : 'normal')
          }
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Anchor>
      ))}
    </Group>
  )
}
