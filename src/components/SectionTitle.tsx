import { rem, Title, useMantineTheme } from '@mantine/core'

interface SectionTitleProps {
  title: string // Define the type of the title prop
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const theme = useMantineTheme()

  return (
    <Title
      order={1}
      style={{
        fontFamily: 'serif',
        fontStyle: 'italic',
        color: theme.white,
        marginBottom: rem(20),
        textAlign: 'center',
      }}
    >
      {title}
    </Title>
  )
}
