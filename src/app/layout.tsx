import { Fira_Code } from 'next/font/google'
import './globals.css'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitness Routine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
