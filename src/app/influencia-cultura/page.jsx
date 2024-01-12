import { ListItem, OrderedList, Box } from '@chakra-ui/react'
import Link from 'next/link'

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
        <p>
          É crucial trabalhar para mudar essas normas culturais prejudiciais.
          Campanhas de conscientização, educação em igualdade de gênero, leis
          mais fortes e apoio comunitário são fundamentais para criar uma
          sociedade onde todas as mulheres se sintam seguras e respeitadas. Para
          conhecer um pouco mais sobre estes e outros assuntos relacionados ao
          tema, você pode dar uma olhada em várias fontes. Aqui citamos algumas:
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Organização Pan-Americana da Saúde (OPAS/OMS): Fornece informações
            detalhadas sobre as consequências da violência contra mulheres para
            a saúde física, mental, sexual e reprodutiva
          </span>
          além de discutir as causas subjacentes e sugerir estratégias de
          prevenção e intervenção.
          <Link href="https://www.paho.org " className="pl-1 text-[#607D8B]">
            [Visite OPAS/OMS]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Instituto Maria da Penha (IMP): Uma organização brasileira dedicada
            a combater a violência doméstica e familiar contra a mulher.
          </span>
          Oferece informações sobre a Lei Maria da Penha, tipos de violência, e
          realiza projetos para promover mudanças de atitudes e práticas
          sociais.
          <Link
            href="https://www.institutomariadapenha.org.br "
            className="pl-1 text-[#607D8B]"
          >
            [Visite o IMP]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            As Nações Unidas no Brasil (ONU Brasil): Apresenta dados globais
            sobre a violência contra a mulher
          </span>
          e aborda a necessidade de estratégias de prevenção e intervenção,
          incluindo a promoção da igualdade de gênero e o empoderamento
          feminino.
          <Link href="https://brasil.un.org " className="pl-1 text-[#607D8B]">
            [Visite ONU Brasil]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            OIM Brasil (Organização Internacional para as Migrações): Destaca a
            campanha da ONU para prevenir e eliminar a violência contra mulheres
            e meninas
          </span>
          , abordando a importância de financiar estratégias de prevenção e
          resposta.
          <Link href="https://brazil.iom.int " className="pl-1 text-[#607D8B]">
            [Visite OIM Brasil]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Ministério dos Direitos Humanos e da Cidadania (Brasil): Fornece
            informações sobre as políticas públicas e iniciativas do governo
            brasileiro
          </span>
          para combater a violência contra a mulher.
          <Link href="https://www.gov.br " className="pl-1 text-[#607D8B]">
            [Visite o Ministério dos Direitos Humanos]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Escritório das Nações Unidas sobre Drogas e Crime (UNODC): Aborda a
            violência de gênero por parceiros íntimos e suas consequências
          </span>
          , destacando a necessidade de estratégias globais para combatê-la.
          <Link href="https://www.unodc.org " className="pl-1 text-[#607D8B]">
            [Visite UNODC]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            UNA-SE pelo Fim da Violência contra as Mulheres e Meninas: Uma
            campanha da ONU que se concentra no financiamento de estratégias de
            prevenção e resposta
          </span>
          à violência contra mulheres e meninas.
          <Link href="https://brasil.un.org " className="pl-1 text-[#607D8B]">
            [Visite UNA-SE]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Brasil Escola: Oferece uma visão geral sobre a violência contra a
            mulher, incluindo tipos de violência e suas consequências.
          </span>

          <Link
            href="https://brasilescola.uol.com.br "
            className="pl-1 text-[#607D8B]"
          >
            [Visite Brasil Escola]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Não Se Cale (Mato Grosso do Sul): Um portal do Governo do Estado de
            Mato Grosso do Sul que oferece informações sobre políticas de
            combate e prevenção à violência contra a mulher
          </span>
          , incluindo dados estatísticos e recursos para denúncia.
          <Link
            href="https://www.naosecale.ms.gov.br "
            className="pl-1 text-[#607D8B]"
          >
            [Visite Não Se Cale]
          </Link>
        </p>
        <p className="text-base font-normal">
          <span className="font-bold pl-1">
            Fórum Brasileiro de Segurança Pública: Em parceria com o Instituto
            Datafolha, o Fórum realiza estudos sobre a vitimização de mulheres
            no Brasil
          </span>
          , incluindo dados estatísticos e recursos para denúncia.
          <Link
            href="https://forumseguranca.org.br "
            className="pl-1 text-[#607D8B]"
          >
            [Visite o Fórum Brasileiro de Segurança Pública]
          </Link>
        </p>
        <p className="text-base font-normal">
          Cada um destes sites oferece informações importantes e recursos sobre
          a violência contra a mulher, contribuindo para a conscientização,
          prevenção e combate a este grave problema social.
        </p>
      </main>
    </Box>
  )
}
