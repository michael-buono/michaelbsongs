import { Image } from '@mantine/core'

export default function MainImage() {
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 110px)', // Subtracts header height
        overflow: 'hidden', // Prevents any overflow issues
      }}
    >
      <Image
        src="/hero_screenshot.png"
        radius="md"
        alt="Hero Screenshot"
        width="100%" // Stretches across full width
        fit="cover" // Ensures it fills space without looking off
        style={{ objectPosition: 'top' }} // Aligns it better if needed
      />
    </div>
  )
}
