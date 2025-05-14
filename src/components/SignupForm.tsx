import { Button, Card, TextInput, useMantineTheme } from '@mantine/core'
import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const theme = useMantineTheme()

  const mailchimpUrl =
    'https://michaelbuonomusic.us16.list-manage.com/subscribe/post'
  const mailchimpU = 'ff07856f116f46e10c263b2d2' // Keep this the same
  const mailchimpId = 'c4b58a3868' // Keep this the same

  return (
    <Card
      shadow="sm"
      radius="md"
      padding="lg"
      style={{ backgroundColor: 'transparent' }}
    >
      <form action={mailchimpUrl} method="POST" target="_blank">
        <input type="hidden" name="u" value={mailchimpU} />
        <input type="hidden" name="id" value={mailchimpId} />

        <TextInput
          label="Name"
          placeholder="Your name"
          name="MMERGE2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '10px' }}
          styles={{
            label: {
              color: theme.colors.gray[3],
            },
            input: {
              color: theme.colors.gray[3],
              borderColor: theme.colors.gray[3],
              '&:focus': {
                borderColor: theme.colors.gray[3],
              },
            },
          }}
        />

        <TextInput
          label="Email Address"
          placeholder="your@email.com"
          type="email"
          name="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '10px' }}
          styles={{
            label: {
              color: theme.colors.gray[3],
            },
            input: {
              color: theme.colors.gray[3],
              borderColor: theme.colors.gray[3],
              '&:focus': {
                borderColor: theme.colors.gray[3],
              },
            },
          }}
        />

        <Button
          type="submit"
          color="gray"
          fullWidth
          variant="outline"
          style={{
            color: theme.colors.gray[3],
            borderColor: theme.colors.gray[3],
            '&:hover': {
              backgroundColor: theme.colors.gray[7],
              borderColor: theme.colors.gray[3],
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Card>
  )
}
