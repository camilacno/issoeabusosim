import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'

export function InProgress() {
  return (
    <Box className="w-screen h-screen flex flex-col justify-center items-center bg-[#FAFAFA]">
      <Container className="flex flex-col justify-center items-center gap-5">
        <Image
          src="/logo.jpg"
          width={300}
          height={300}
          className="rounded-3xl"
          alt="logo"
        />

        <h1 className="font-bold text-3xl text-[#E57373]">
          Sua ajuda está a caminho
        </h1>
      </Container>
    </Box>
  )
}
