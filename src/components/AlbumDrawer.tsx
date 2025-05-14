import { Box, Button, Drawer, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function AlbumDrawer() {
  const theme = useMantineTheme()
  const albumLink = 'https://ffm.to/anothernightgone'
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      {/* Button to Open Drawer */}
      <Button
        variant="outline"
        color="gray"
        size="sm"
        onClick={open}
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
        Get Album
      </Button>

      {/* Drawer with Full-Height `iframe` */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Get the Album"
        position="right"
        size="40%"
        padding="lg"
        styles={{
          body: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          },
        }}
      >
        {/* Full-height iframe */}
        <Box style={{ flexGrow: 1, height: '100%' }}>
          <iframe
            title="albumDrawer"
            src={albumLink}
            width="100%"
            height="100%"
            style={{
              border: 'none',
              display: 'block',
              flexGrow: 1,
            }}
          />
        </Box>
      </Drawer>
    </>
  )
}
