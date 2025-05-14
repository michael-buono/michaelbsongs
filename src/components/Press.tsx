import { Button, Card, Grid, Image, Text, useMantineTheme } from '@mantine/core'

const pressArticles = [
  {
    title:
      "PREMIERE: NY-Based Indie Pop Artist Michael Buono Releases Video For New Single 'Hero'",
    date: 'Dec 27, 2019',
    source: 'Vents Magazine',
    link: 'https://ventsmagazine.com/2019/12/27/premiere-ny-based-indie-pop-artist-michael-buono-releases-new-new-single-hero/',
  },
  {
    title: "Redefining Pop: Songs You Won't Hear on the Radio But Should",
    date: 'January 17, 2020',
    source: 'Ear to the Ground Music',
    link: 'https://www.eartothegroundmusic.co/2020/01/17/redefining-pop-music-that-you-wont-hear-on-the-radio-but-should/',
  },
  {
    title: 'Michael Buono - Hero [Review]',
    date: 'November 22, 2019',
    source: 'LA on Lock',
    link: 'https://www.laonlock.com/reviews/11/22/2019/michael-buono-hero-review',
  },
]

export default function Press() {
  const theme = useMantineTheme()

  return (
    <Grid gutter="md">
      {/* Left Side - Large Image */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image
          src="/chair.avif"
          alt="Michael Buono"
          radius="md"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </Grid.Col>

      {/* Right Side - Press Articles */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        {pressArticles.map((article, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'transparent',
              marginBottom: '20px',
              border: 'none',
              color: 'white',
            }}
          >
            <Text
              fw={500}
              style={{ marginBottom: '5px', color: theme.colors.gray[3] }}
            >
              {article.title}
            </Text>
            <Text size="sm" style={{ color: theme.colors.gray[4] }}>
              {article.date}
            </Text>
            <Text
              size="sm"
              style={{ color: theme.colors.gray[4], marginBottom: '10px' }}
            >
              {article.source}
            </Text>
            <Button
              component="a"
              href={article.link}
              target="_blank"
              variant="outline"
              color="gray"
              size="xs"
              style={{
                color: theme.colors.gray[3],
                borderColor: theme.colors.gray[3],
                '&:hover': {
                  backgroundColor: theme.colors.gray[7],
                  borderColor: theme.colors.gray[3],
                },
              }}
            >
              Read More
            </Button>
          </Card>
        ))}
      </Grid.Col>
    </Grid>
  )
}
