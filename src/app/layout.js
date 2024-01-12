'use client'

import { Nunito } from 'next/font/google'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'

const titles = Nunito({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CacheProvider>
        <ChakraProvider>
          <body className={titles.className}>
            <Grid
              templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
              gridTemplateRows={'1fr'}
              gridTemplateColumns={' 1fr'}
              h="200px"
              gap="3"
              color="blackAlpha.700"
              fontWeight="bold"
            >
              <GridItem pl="2" area={'header'}>
                <Header />
              </GridItem>
              <GridItem pl="2" area={'nav'}>
                <Sidebar />
              </GridItem>
              <GridItem pl="2" area={'main'}>
                {children}
              </GridItem>
              <GridItem pl="2" area={'footer'}></GridItem>
            </Grid>
          </body>
        </ChakraProvider>
      </CacheProvider>
    </html>
  )
}
