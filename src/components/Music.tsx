import { Button, Card, Group, Image, Text } from '@mantine/core'

// Import your high-quality album cover
import albumCover from '/another_night_gone.jpeg' // Make sure the path is correct

const soundCloudUrl =
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1681188486&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'

const MusicPlayer = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 0' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={albumCover}
            height={180}
            alt="Album cover"
            style={{ objectFit: 'cover' }}
          />
        </Card.Section>

        <Group justify="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text fw={500}>Another Night Gone</Text>
          <Button variant="light" color="blue" size="xs">
            Play
          </Button>
        </Group>

        <iframe
          title="soundcloud"
          width="100%"
          height="300"
          allow="autoplay"
          src={soundCloudUrl}
          style={{ borderRadius: '10px' }}
        />
      </Card>
    </div>
  )
}

export default MusicPlayer
