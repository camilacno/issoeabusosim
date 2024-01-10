import { Box, Stack, Link, Text, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useState } from 'react'

const Sidebar = () => {
  const [display, setDisplay] = useState(false)

  return (
    <Box className="pl-5 mt-5">
      <IconButton
        className=""
        aria-label="Open Menu"
        icon={display ? <CloseIcon /> : <HamburgerIcon />}
        onClick={() => setDisplay(!display)}
      />
      {display && (
        <Stack
          spacing="3"
          className=" w-[20vw] bg-[#F4F4F4] h-screen pl-3 pt-1 pb-4 sm:w-screen"
        >
          <Section title="A violência contra a mulher no Brasil">
            <LinkItem
              href="/numeros-violencia"
              className="text-black font-normal text-sm"
            >
              Números da violência
            </LinkItem>
            <LinkItem href="/influencia-cultura">
              A influência da cultura
            </LinkItem>
          </Section>
          <Section title="Lei Maria da Penha" className="text-[#E57373]">
            <LinkItem href="/resumo-lei">Resumo da lei</LinkItem>
            <LinkItem href="/lei-integra">
              A lei na íntegra e comentada
            </LinkItem>
          </Section>
          <Section title="Tipos de violência definidos na legislação brasileira">
            <LinkItem href="/violencia-psicologica">
              Violência psicológica
            </LinkItem>
            <LinkItem href="/violencia-psicologica">Violência moral</LinkItem>
            <LinkItem href="/violencia-psicologica">
              Violência patrimonial
            </LinkItem>
            <LinkItem href="/violencia-psicologica">Violência sexual</LinkItem>
            <LinkItem href="/violencia-psicologica">Violência física</LinkItem>
          </Section>
          <Section title="Como se fortalecer">
            <LinkItem href="/violencia-psicologica">
              Vozes de especialistas
            </LinkItem>
            <LinkItem href="/violencia-psicologica">Redes sociais</LinkItem>
            <LinkItem href="/violencia-psicologica">Podcasts</LinkItem>
          </Section>
          <Section title="A importância da rede de apoio"></Section>
          <Section title="A Como pedir ajuda">
            <LinkItem href="/violencia-psicologica">
              Não tenho nenhum dinheiro, o que posso fazer?
            </LinkItem>
            <LinkItem href="/violencia-psicologica">
              Somente eu posso pedir ajuda?
            </LinkItem>
          </Section>
          <Section title="Conseguiu se libertar? Dê força a outras mulheres "></Section>
        </Stack>
      )}
    </Box>
  )
}

const Section = ({ title, children }) => (
  <Box>
    <Text fontWeight="bold" mb="2" className="text-[#E57373] text-base">
      {title}
    </Text>
    <Stack spacing="1">{children}</Stack>
  </Box>
)

const LinkItem = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link className="text-black font-normal text-sm">{children}</Link>
  </NextLink>
)

export default Sidebar
