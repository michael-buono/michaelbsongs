import {
  ActionIcon,
  Box,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  IconBrandLinktree,
  IconBrandSpotify,
  IconVinyl,
} from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'
import classes from './BusinessCard.module.css'

export default function BusinessCard() {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate QR code for the business card URL
    const businessCardUrl = 'https://michaelbsongs.com/#/business-card'
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(businessCardUrl)}&bgcolor=0a0e27&color=ffffff`
    setQrCodeUrl(qrApiUrl)
  }, [])

  return (
    <Box className={classes.wrapper}>
      <Container size="xs" p={0}>
        <div ref={cardRef} className={classes.card}>
          {/* Dropzone AI Logo */}
          <div className={classes.logoSection}>
            <img
              src="/dropzone.svg"
              alt="Dropzone AI"
              className={classes.logo}
            />
          </div>

          {/* Main Business Info */}
          <Stack gap="xs" className={classes.mainInfo}>
            <Title order={1} className={classes.name}>
              Michael Buono
            </Title>
            <Text className={classes.title}>Principal Software Engineer</Text>
          </Stack>

          {/* Contact Info */}
          <Stack gap="xs" className={classes.contactInfo}>
            <a
              href="mailto:michael@dropzone.ai"
              className={classes.contactLink}
            >
              michael@dropzone.ai
            </a>
            <a
              href="https://dropzone.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.contactLink}
            >
              dropzone.ai
            </a>
          </Stack>

          {/* Divider */}
          <div className={classes.divider} />

          {/* QR Code Section */}
          {qrCodeUrl && (
            <Stack gap="xs" align="center" className={classes.qrSection}>
              <Text size="xs" className={classes.qrLabel}>
                Scan for digital card
              </Text>
              <img src={qrCodeUrl} alt="QR Code" className={classes.qrCode} />
            </Stack>
          )}

          {/* Divider */}
          <div className={classes.divider} />

          {/* Music Section */}
          <Stack gap="sm" className={classes.musicSection}>
            <Text className={classes.musicLabel}>
              In my spare time, I love making music:
            </Text>
            <Group gap="lg" justify="center">
              <a
                href="https://open.spotify.com/artist/5OJf8m79y7w11xvsLssBEV?si=kyaYUEwnQSeRmt0L0mtVZg"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.musicLink}
              >
                <ActionIcon
                  size="lg"
                  variant="transparent"
                  className={classes.musicIcon}
                >
                  <IconBrandSpotify size={24} />
                </ActionIcon>
                <Text size="sm">Spotify</Text>
              </a>
              <a
                href="https://linktr.ee/michaelbsongs"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.musicLink}
              >
                <ActionIcon
                  size="lg"
                  variant="transparent"
                  className={classes.musicIcon}
                >
                  <IconBrandLinktree size={24} />
                </ActionIcon>
                <Text size="sm">@michaelbsongs</Text>
              </a>
              <a
                href="https://michaelbsongs.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.musicLink}
              >
                <ActionIcon
                  size="lg"
                  variant="transparent"
                  className={classes.musicIcon}
                >
                  <IconVinyl size={24} />
                </ActionIcon>
                <Text size="sm">michaelbsongs.com</Text>
              </a>
            </Group>
          </Stack>
        </div>
      </Container>
    </Box>
  )
}
