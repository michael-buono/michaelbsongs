import { Carousel } from '@mantine/carousel'
import { ActionIcon, Container, Image, Modal, SimpleGrid } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

const images = [
  'another_night_gone.jpeg',
  'headshot.jpg',
  'loop.webp',
  'rail.webp',
  'standing.webp',
  'park.webp',
  'sitting.webp',
  'lost.png',
  'tv.webp',
]

export default function PhotoGallery() {
  const [opened, setOpened] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentIndex(index) // Set the current slide index
    setOpened(true)
  }

  return (
    <Container size="xl" style={{ textAlign: 'center', paddingTop: '50px' }}>
      {/* Image Grid */}
      <SimpleGrid cols={3} spacing="md" verticalSpacing="md">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            radius="md"
            alt={`Gallery image ${index + 1}`}
            height={300}
            width="100%"
            fit="cover"
            onClick={() => handleImageClick(index)}
            style={{ cursor: 'pointer' }} // Makes images clickable
          />
        ))}
      </SimpleGrid>

      {/* Modal with Carousel */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="80%"
        padding="lg"
        centered
        withCloseButton={false} // Hides default close button
        overlayProps={{ blur: 5 }} // Adds blur effect to background
      >
        {/* Close Button */}
        <ActionIcon
          variant="light"
          color="gray"
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={() => setOpened(false)}
        >
          <IconX size={24} />
        </ActionIcon>

        {/* Image Carousel with Initial Slide Controlled */}
        <Carousel slideSize="100%" withIndicators initialSlide={currentIndex}>
          {images.map((src, index) => (
            <Carousel.Slide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85vh', // Smaller height to prevent scrolling
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                radius="md"
                style={{
                  maxWidth: '85vw', // Ensures image scales properly inside viewport width
                  maxHeight: '85vh', // Ensures image scales properly inside viewport height
                  width: 'auto', // Maintains aspect ratio
                  height: 'auto', // Maintains aspect ratio
                  objectFit: 'contain', // Ensures no cropping
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
    </Container>
  )
}
