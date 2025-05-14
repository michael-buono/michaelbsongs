import { ActionIcon, Group, useMantineTheme } from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react'

export default function Socials() {
  const theme = useMantineTheme()

  return (
    <Group gap="md" justify="center">
      <ActionIcon
        component="a"
        href="https://instagram.com/michaelbsongs"
        target="_blank"
        size="lg"
        color="gray"
        variant="transparent"
        style={{ color: theme.colors.gray[3] }}
      >
        <IconBrandInstagram size={18} />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://facebook.com/michaelbsongs"
        target="_blank"
        size="lg"
        color="gray"
        variant="transparent"
        style={{ color: theme.colors.gray[3] }}
      >
        <IconBrandFacebook size={18} />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://x.com/michaelbsongs"
        target="_blank"
        size="lg"
        color="gray"
        variant="transparent"
        style={{ color: theme.colors.gray[3] }}
      >
        <IconBrandTwitter size={18} />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://youtube.com/MichaelBuono"
        target="_blank"
        size="lg"
        color="gray"
        variant="transparent"
        style={{ color: theme.colors.gray[3] }}
      >
        <IconBrandYoutube size={18} />
      </ActionIcon>
    </Group>
  )
}
