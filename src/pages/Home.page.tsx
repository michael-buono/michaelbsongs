import SectionTitle from '@/components/SectionTitle'
import { Container, Space, Stack } from '@mantine/core'
import About from '../components/About'
import Contact from '../components/Contact'
import PhotoGallery from '../components/PhotoGallery'
import Press from '../components/Press'
import SignupForm from '../components/SignupForm'
import Socials from '../components/Socials'
import Tracklist from '../components/Tracklist'
import Video from '../components/Video'

export default function Home() {
  return (
    <>
      {/* <MainImage /> */}
      <Container fluid id="watch" size="xl" py="lg">
        {/* <SectionTitle title="Watch" /> */}
        <Video />
      </Container>
      <Container id="listen" size="xl" py="xl">
        <SectionTitle title="Stream Another Night Gone" />
        <Tracklist />
      </Container>
      <Container id="about" size="xl" py="xl">
        <SectionTitle title="About" />
        <About />
      </Container>
      <Container id="press" size="xxl" py="xl">
        <SectionTitle title="Press" />
        <Press />
      </Container>
      <Container id="gallery" size="lg" py="xl">
        <SectionTitle title="Photo Gallery" />
        <PhotoGallery />
      </Container>
      <Container id="subscribe" size="lg" py="xl">
        <SectionTitle title="Subscribe" />
        <SignupForm />
      </Container>
      <Container id="contact" size="xs" py="xl" style={{ textAlign: 'center' }}>
        <SectionTitle title="Contact" />
        <Stack>
          <Contact />
          <Socials />
        </Stack>
      </Container>
      <Space h="xl" /> {/* Adds spacing at the bottom */}
    </>
  )
}
