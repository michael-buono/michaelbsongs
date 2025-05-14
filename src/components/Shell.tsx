import {
  Anchor,
  AppShell,
  Container,
  Divider,
  Group,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { ReactNode } from 'react'
import Navigation from './Navigation'
import Socials from './Socials'

interface ShellProps {
  children: ReactNode
}

export default function Shell({ children }: ShellProps) {
  const theme = useMantineTheme()
  const backgroundColor = '#0a0a0a' // Ensure near-black background is consistent

  return (
    <AppShell
      header={{ height: 100 }}
      padding="md"
      styles={{
        root: { backgroundColor }, // Ensures the entire page uses the same background
        main: { backgroundColor }, // Ensures Main content matches the Header
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor, // Forces the header to have the same background as the rest of the page
          borderBottom: 'none', // Removes any unwanted bottom border
        }}
      >
        <Container size="xxl" py="lg" px="lg">
          <Group justify="space-between" align="center">
            <Anchor
              href="#"
              size="sm"
              style={{
                fontStyle: 'italic',
                textDecoration: 'none',
                color: theme.colors.gray[3],
              }}
            >
              <Title order={2} style={{ color: theme.colors.gray[3] }}>
                Michael Buono
              </Title>
            </Anchor>
          </Group>

          {/* Divider */}
          {/* Remove this if you want the line gone */}
          <Divider size="xs" color={theme.colors.gray[7]} mt="sm" />

          {/* Bottom Row: Links and Socials */}
          <Group justify="space-between" align="center" mt="sm">
            <Navigation />
            <Socials />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
