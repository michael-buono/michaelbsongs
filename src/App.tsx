import '@mantine/carousel/styles.css'
import '@mantine/core/styles.css'

import { Global } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import Shell from './components/Shell'
import { Router } from './Router'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Global
        styles={{
          'html, body': {
            scrollBehavior: 'smooth',
            scrollPaddingTop: '120px',
          },
        }}
      />
      <Shell>
        <Router />
      </Shell>
    </MantineProvider>
  )
}
