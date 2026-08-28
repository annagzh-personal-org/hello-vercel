export const metadata = {
  title: 'Hello Vercel',
  description: 'Deployed automatically with GitHub Actions on Blacksmith runners.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
