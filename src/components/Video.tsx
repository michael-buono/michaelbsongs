import {
  AspectRatio,
  Center,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconPlayerPlay } from '@tabler/icons-react'
import { useState } from 'react'
export default function Video() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <AspectRatio
      ratio={16 / 9}
      style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
    >
      {/* Show the thumbnail if video hasn't started */}
      {!videoPlaying ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: "100%",
            height: '1080px',
            cursor: 'pointer',
          }}
          onClick={() => setVideoPlaying(true)}
          onKeyDown={(e) => e.key === 'Enter' && setVideoPlaying(true)}
          role="button"
          tabIndex={0}
          aria-label="Play video"
        >
          {/* Thumbnail Image */}
          <Image
            src="https://img.youtube.com/vi/aR5Fdsv5MrU/maxresdefault.jpg" // YouTube auto-generated thumbnail
            alt="Hero Music Video"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Overlay with Title */}
          <Overlay opacity={0.5} color="black" zIndex={1} />
          <Center
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          >
            <Stack align="center">
              <Title size="xl" fw={700} style={{ fontStyle: 'italic' }}>
                Watch the Hero Music Video
              </Title>

              {/* Play Video Text with Play Icon */}
              <Group gap="xs">
                <IconPlayerPlay size={20} />
                <Text size="sm">Play Video</Text>
              </Group>
            </Stack>
          </Center>
        </div>
      ) : (
        // If clicked, load the iframe
        <iframe
          src="https://www.youtube.com/embed/aR5Fdsv5MrU?autoplay=1&vq=hd1080"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            border: 'none',
          }}
        />
      )}
    </AspectRatio>
  )
}
