import { Grid, Image, Stack, Text, rem, useMantineTheme } from '@mantine/core'

export default function About() {
  const theme = useMantineTheme()

  return (
    <Grid gutter="md">
      {/* Left Side - Image */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image src="/another_night_gone.jpeg" alt="Michael Buono" radius="md" />
      </Grid.Col>

      {/* Right Side - Text Content */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack justify="center" style={{ height: '100%', textAlign: 'center' }}>
          <Text
            size="lg"
            style={{
              color: theme.colors.gray[3],
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            After releasing a collection of honest, hopeful, and piano-driven
            indie pop records, in 2023 Michael Buono decided to go back to his
            roots. Having grown up to a soundtrack of Green Day, Weezer, and
            anything Fall Out Boy, Buono's latest album is something completely
            different from anything he's put out in the past.
            <Text
              component="span"
              style={{ fontStyle: 'italic', color: theme.white }}
            >
              {' '}
              Another Night Gone
            </Text>{' '}
            is an unabashed, in-your-face, full-speed-ahead throwback to the
            golden era of 2000s pop-punk, filled with angst, nostalgia, and
            boundless energy.
          </Text>

          <Text
            size="lg"
            style={{
              fontStyle: 'italic',
              color: theme.colors.gray[4],
              marginTop: rem(20),
            }}
          >
            Another Night Gone is now available everywhere.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
