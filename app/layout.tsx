export const metadata = {
  title: 'Flexibble',
  description: 'a clone from dribbble.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
