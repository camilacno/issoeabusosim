import { ListItem, OrderedList, Box } from '@chakra-ui/react'

export default function InfluenciaCultura() {
  return (
    <Box className="mt-5 px-5 ">
      <main className="flex flex-col gap-5 mb-5 ">
        <h1 className="text-3xl flex flex col justify-center items-center text-[#607D8B]">
          A Influência da Cultura na Violência Contra as Mulheres
        </h1>
        <p className="text-base font-normal">
          É essencial entender que você não é culpada de nada relacionado à
          violência ou abuso que possa ter enfrentado. Muitos dos desafios que
          as mulheres enfrentam estão enraizados em aspectos culturais que,
          infelizmente, ainda são prevalentes em nossa sociedade. Esses aspectos
          culturais frequentemente perpetuam conceitos e comportamentos nocivos
          às mulheres, tratando-os como se fossem aceitáveis.
        </p>
        <OrderedList className="text-base font-normal gap-1">
          <ListItem>
            <span className="font-bold text-[#E57373] pr-1">
              Papéis de Gênero Tradicionais:
            </span>
            Em muitas culturas, existem expectativas rígidas sobre como homens e
            mulheres devem se comportar. As mulheres são frequentemente vistas
            como submissas e responsáveis pelo cuidado do lar e da família,
            enquanto os homens são vistos como os provedores e figuras
            dominantes. Essa dinâmica pode levar a relações de poder desiguais e
            justificar comportamentos abusivos.
          </ListItem>
          <ListItem>
            <span className="font-bold text-[#E57373] pr-1">
              Normalização da Violência:
            </span>
            Em alguns contextos, a violência contra as mulheres é vista como uma
            parte "normal" das relações. Comentários depreciativos, controle
            excessivo e até mesmo abuso físico são muitas vezes minimizados ou
            aceitos como parte do relacionamento.
          </ListItem>
          <ListItem>
            <span className="font-bold text-[#E57373] pr-1">
              Culpa da Vítima:
            </span>
            Existe uma tendência em muitas sociedades de culpar a vítima em
            casos de violência sexual ou doméstica. Perguntas como "O que ela
            estava vestindo?" ou "Por que ela não deixou o parceiro?" colocam a
            responsabilidade na vítima, em vez de condenar o agressor.
          </ListItem>
          <ListItem>
            <span className="font-bold text-[#E57373] pr-1">
              Silêncio e Estigma:
            </span>
            Muitas mulheres sentem vergonha ou medo de falar sobre a violência
            que enfrentam. O estigma associado ao divórcio ou à separação, bem
            como o medo de represálias, podem silenciar as vítimas.
          </ListItem>
          <ListItem>
            <span className="font-bold text-[#E57373] pr-1">
              Falta de Recursos e Apoio:
            </span>
            A falta de recursos adequados para apoiar mulheres em situações de
            abuso também é um problema. Isso inclui acesso limitado a abrigos,
            serviços legais, apoio psicológico e oportunidades econômicas.
          </ListItem>
        </OrderedList>
      </main>
    </Box>
  )
}
