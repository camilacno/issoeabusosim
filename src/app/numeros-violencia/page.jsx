import { Box } from '@chakra-ui/react'
import { Section } from '../../components/Section'

export default function NumerosViolencia() {
  return (
    <Box className="mt-5 px-5 ">
      <main className="flex flex-col gap-5 mb-5 ">
        <h1 className="text-3xl flex flex col justify-center items-center text-[#607D8B]">
          Números da violência
        </h1>

        <Section
          title="Entendendo os Números da Violência Contra a Mulher no Brasil"
          paragraph="Você já parou para pensar sobre quantas mulheres, assim como você, enfrentam situações de violência no nosso país? Muitas vezes, quando estamos passando por momentos difíceis, podemos nos sentir sozinhas. Mas a verdade é que, infelizmente, a violência contra a mulher é uma realidade comum no Brasil, e entender um pouco mais sobre isso pode nos ajudar a perceber que não estamos sós e que existe apoio disponível."
        />
        <Section
          title="A Extensão do Problema"
          paragraph="Vamos começar com alguns números que nos ajudam a ver o tamanho desse desafio. Segundo o Fórum Brasileiro de Segurança Pública, em seu Anuário de 2020, a cada dois minutos, uma mulher registrou um caso de violência doméstica no Brasil. Isso significa que, enquanto você lê este texto, várias mulheres podem estar buscando ajuda.
          Além disso, o mesmo relatório mostra que, em média, a cada dia, 180 mulheres são vítimas de violência física ou psicológica. Esses números são alarmantes e mostram como a violência está presente no dia a dia de muitas de nós."
        />
        <Section
          title="Tipos de Violência"
          paragraph="Quando falamos de violência contra a mulher, não estamos falando apenas de agressões físicas. Existem vários tipos de violência, como a psicológica, a sexual, a patrimonial (quando alguém controla seu dinheiro ou bens) e a moral (como difamações e calúnias).
          A violência psicológica, por exemplo, pode não deixar marcas visíveis, mas causa danos emocionais profundos. Ela pode acontecer através de humilhações, ameaças, isolamento social, entre outras formas."
        />
      </main>
    </Box>
  )
}
