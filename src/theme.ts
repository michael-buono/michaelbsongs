import { createTheme, MantineThemeOverride } from '@mantine/core'

export const testTheme = createTheme({
  fontFamily: 'Inter, sans-serif',

  /** Custom headings styles (for titles, section headings, etc.) */
  headings: {
    fontFamily: 'Playfair Display, serif', // Elegant serif for headings
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '48px', fontWeight: '700' }, // Main title size
      h2: { fontSize: '32px', fontWeight: '600' }, // Section title
      h3: { fontSize: '24px', fontWeight: '500' },
    },
  },

  /** Custom styles for <Title> and <Text> components */
  components: {
    Title: {
      styles: {
        root: {
          fontSize: '32px',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontStyle: 'italic', // Matches the Wix title
        },
      },
    },
    Text: {
      styles: {
        root: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          lineHeight: 1.6,
          fontWeight: 400, // Regular weight for body text
          color: '#ffffff', // Ensure it's readable on dark background
        },
      },
    },
  },
})

export const testTheme2 = createTheme({
  colors: {
    dark: [
      '#f8f9fa', // Light gray (for text highlights)
      '#e9ecef',
      '#dee2e6',
      '#adb5bd',
      '#6c757d',
      '#495057', // **Warm dark gray for accents**
      '#222222', // **Dark gray for subtle contrast**
      '#111111', // **Near black (darker than Mantine default)**
      '#0a0a0a', // **ALMOST BLACK (Use this for background)**
      '#000000', // **PURE BLACK (Use sparingly to avoid complete void)**
    ],
  },
  primaryColor: 'gray', // Keeps a neutral tone
  primaryShade: 8, // Uses **very dark gray** for primary elements
  components: {
    AppShell: {
      styles: {
        root: {
          backgroundColor: '#0a0a0a', // **Applies near-black background globally**
        },
      },
    },
    Container: {
      styles: {
        root: {
          backgroundColor: '#0a0a0a', // Ensures all containers match
        },
      },
    },
    Text: {
      styles: {
        root: {
          color: '#ffffff', // **Pure white text for high contrast**
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: '#ffffff',
          fontFamily: 'serif',
        },
      },
    },
    Divider: {
      styles: {
        root: {
          borderColor: '#222222', // **Very subtle dividers to avoid harsh contrast**
        },
      },
    },
  },
})

export const actualTheme = createTheme({})
export const theme: MantineThemeOverride = testTheme2
