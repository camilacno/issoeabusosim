import { Box } from '@chakra-ui/react'
import { Section } from '../../components/Section'

export default function ViolenciaPsicologica() {
  return (
    <Box className="mt-5 px-5 ">
      <main className="flex flex-col gap-5 mb-5 ">
        <h1 className="text-3xl flex flex col justify-center items-center text-[#607D8B]">
          Violência psicológica
        </h1>
        <h2 className="text-2xl flex flex col justify-center items-center">
          De acordo com a Lei Maria da Penha, configura-se como violência
          psicológica atos como:
        </h2>
        <Section
          title="Ameaças"
          paragraph="Na lei brasileira, a ameaça é considerada uma forma de violência psicológica quando usada para causar medo, insegurança ou para controlar a vítima. Essas ameaças podem ser verbais ou não-verbais e não precisam ser de natureza física. O importante é o impacto que elas têm na saúde mental da vítima.
Em termos de processo judicial, os casos de violência psicológica, incluindo ameaças, podem ser complexos de se provar. Geralmente, é necessário um exame de corpo de delito ou uma perícia psicológica para comprovar os danos emocionais. Esses danos podem incluir depressão, estresse pós-traumático, transtornos alimentares, entre outros. A violência psicológica, embora comum, muitas vezes não é reconhecida pelas vítimas como algo injusto ou ilícito devido ao processo de naturalização da violência doméstica e familiar contra a mulher.
A legislação brasileira evoluiu para melhor enquadrar e punir os atos de violência psicológica. Por exemplo, a Lei nº 14.188/2021 incluiu no Código Penal o crime de violência psicológica contra a mulher, estabelecendo critérios mais claros para identificação e punição desses atos.
Para mais informações sobre como a violência psicológica é tratada na legislação brasileira, você pode consultar os artigos no Jusbrasil e no Conjur."
        />
        <Section
          title="Constrangimento"
          paragraph='O "constrangimento", conforme abordado na Lei Maria da Penha, é uma forma de violência psicológica que ocorre quando o agressor força a vítima a realizar algo contra a sua vontade, utilizando-se de pressão psicológica, ameaças ou coação. Essa forma de violência atinge a autonomia e a liberdade da mulher, interferindo na sua capacidade de tomar decisões próprias e viver livremente.
Embora haja uma ampla discussão sobre a caracterização do constrangimento e a dificuldade em se provar este tipo de violência, a Lei Maria da Penha e a legislação penal brasileira oferecem meios para a sua caracterização e punição. Nos casos de constrangimento, pode ser necessário realizar perícia médica psiquiátrica para comprovar os danos à saúde psicológica da vítima, como depressão, estresse pós-traumático, entre outros. A legislação prevê que esses danos psíquicos podem ser enquadrados como crime de lesão corporal, na modalidade lesão à saúde psicológica, abrindo caminho para a responsabilização penal dos agressores.
Para mais informações sobre a violência psicológica e o constrangimento na Lei Maria da Penha, você pode consultar os artigos no Conjur e no Jusbrasil.'
        />
        <Section
          title="Humilhação"
          paragraph="A humilhação, sob a Lei Maria da Penha, é uma forma de violência psicológica que consiste em atos que desonram, degradam ou causam sentimento de inferioridade na vítima. Estes atos podem incluir insultos, depreciações, e outras formas de tratamento degradante que visam diminuir a autoestima e a dignidade da mulher. A humilhação pode ter sérias consequências psicológicas, levando a transtornos como ansiedade, depressão, baixa autoestima e isolamento social.
A lei e a jurisprudência destacam a importância da interpretação abrangente e sensível aos contextos de violência doméstica e familiar para proteger eficazmente as mulheres vítimas de tais abusos."
        />
      </main>
    </Box>
  )
}
