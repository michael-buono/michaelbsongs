import { Group, Image, Stack } from '@mantine/core'
import AlbumDrawer from './AlbumDrawer'
import Track from './Track'

const tracks = [
  {
    number: 1,
    title: 'Another Night Gone',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436986',
  },
  {
    number: 2,
    title: "Don't Lie to Me",
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436959',
  },
  {
    number: 3,
    title: 'Acquired Taste',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436935',
  },
  {
    number: 4,
    title: 'Nicotine',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436899',
  },
  {
    number: 5,
    title: 'Lightweight',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436875',
  },
  {
    number: 6,
    title: 'Know You Like Your Friends Do',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436860',
  },
  {
    number: 7,
    title: 'Alcohol In Hell',
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436839',
  },
  {
    number: 8,
    title: "Forever's Not Enough",
    soundCloudUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605436803',
  },
]

export default function Tracklist() {
  return (
    <>
      {/* Album Cover */}
      <Group justify="space-between" style={{ width: '100%' }}>
        {/* Album Title */}
        <Image
          src="/another_night_gone.jpeg"
          alt="Album Cover"
          radius="md"
          style={{
            width: '100%', // Makes it full-width of the parent container
            maxWidth: '200px', // Prevents it from getting too large
            height: 'auto', // Keeps aspect ratio
            // margin: "0 auto", // Centers the image
            marginBottom: '20px',
          }}
        />

        <AlbumDrawer />
      </Group>

      {/* Tracklist */}
      <Stack gap="xs">
        {tracks.map((track) => (
          <Track
            key={track.number}
            number={track.number}
            title={track.title}
            soundCloudUrl={track.soundCloudUrl}
          />
        ))}
      </Stack>
    </>
  )
}
