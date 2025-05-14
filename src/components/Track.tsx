import { Button, Group, Text, Transition, useMantineTheme } from '@mantine/core'
import { useState } from 'react'

interface TrackProps {
  number: number
  title: string
  soundCloudUrl: string
}

export default function Track({ number, title, soundCloudUrl }: TrackProps) {
  const [playing, setPlaying] = useState(false)
  const theme = useMantineTheme()

  return (
    <Group
      justify="space-between"
      align="center"
      style={{
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
        color: theme.white,
      }}
    >
      {/* Track Number & Name */}
      <Text fw={500} size="lg" style={{ color: theme.colors.gray[3], flex: 1 }}>
        {number}. {title}
      </Text>

      {/* Play/Pause Button */}
      <Button
        variant={playing ? 'filled' : 'outline'}
        color="gray"
        size="sm"
        onClick={() => setPlaying(!playing)}
        style={{
          minWidth: theme.spacing.xl,
          color: theme.colors.gray[3],
          borderColor: theme.colors.gray[3],
          '&:hover': {
            backgroundColor: theme.colors.gray[7],
            borderColor: theme.colors.gray[3],
          },
        }}
      >
        {playing ? 'Stop' : 'Play'}
      </Button>

      {/* Always render iframe but control visibility with Mantine Transition */}
      <Transition mounted={playing} transition="fade" duration={400}>
        {(styles) => (
          <iframe
            title="track"
            src={`${soundCloudUrl}&auto_play=true`}
            width="0"
            height="0"
            allow="autoplay"
            style={{
              ...styles,
              position: 'absolute',
              opacity: 0,
              pointerEvents: 'none',
            }}
          />
        )}
      </Transition>
    </Group>
  )
}
