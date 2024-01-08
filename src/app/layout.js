'use client'

import { Nunito } from 'next/font/google'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'

const titles = Nunito({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={titles.className}>{children}</body>
      </ChakraProvider>
    </html>
  )
}
