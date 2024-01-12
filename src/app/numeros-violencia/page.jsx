import { Box } from '@chakra-ui/react'
import { Section } from '../../components/Section'
import Link from 'next/link'

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
        <Section
          title="Os Números por Trás da Violência Psicológica e Sexual "
          paragraph="De acordo com o Datafolha, em uma pesquisa realizada em 2019, cerca de 1 em cada 4 mulheres acima de 16 anos afirmou ter sofrido algum tipo de violência ou agressão no último ano. Dentre essas, a maioria relatou ter sofrido violência psicológica.
          A violência sexual também é uma triste realidade. O mesmo estudo mostrou que 43% das brasileiras já sofreram assédio sexual. Em muitos casos, essa violência parte de pessoas conhecidas, o que torna a situação ainda mais delicada.  "
        />
        <Section
          title="Violência Doméstica Durante a Pandemia"
          paragraph="A pandemia do COVID-19 agravou ainda mais esse cenário. Com as medidas de isolamento, muitas mulheres se viram trancadas em casa com seus agressores. Em 2020, os canais de denúncia registraram um aumento significativo nos relatos de violência doméstica.
          "
        />
        <section className="flex flex-col gap-2">
          <h3 className="text-xl text-[#E57373]">A Importância da Denúncia</h3>
          <p className="text-base font-normal">
            Embora os números sejam altos, eles não mostram toda a realidade.
            Muitas mulheres não denunciam por medo ou por não saberem a quem
            recorrer. Por isso, é importante falar sobre isso e encorajar a
            busca por ajuda.
            <span className="font-bold pl-1">
              Nós estamos aqui pra te ajudar com isso.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-xl text-[#E57373]">Você Não Está Sozinha</h3>
          <p className="text-base font-normal">
            É essencial saber que, se você está passando por uma situação de
            violência, não está sozinha. Existem várias organizações e serviços
            que podem te ajudar, como a Central de Atendimento à Mulher - Ligue
            180, delegacias especializadas, abrigos, e grupos de apoio.
            <span className="font-bold pl-1">
              E aqui nós vamos trazer um mapa de tudo isso pra você
            </span>
            . Entender a dimensão do problema da violência contra a mulher no
            Brasil é o primeiro passo para buscar mudanças. Cada número que
            mencionamos representa uma história, uma vida, e é importante
            lembrar que,
            <span className="font-bold pl-1">
              por trás das estatísticas, existem pessoas reais com sonhos e
              esperanças
            </span>
            . É fundamental lutar contra essa realidade, buscando apoio e
            informação, e lembrar sempre:
            <span className="font-bold pl-1">você não está sozinha.</span>
          </p>
        </section>
        <h2 className="text-2xl flex flex col justify-center items-center pt-5">
          Para conhecer um pouco mais sobre estes e outros números, você pode
          dar uma olhada em várias fontes. Aqui citamos algumas:
        </h2>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O site do Senado Federal do Brasil destaca uma pesquisa do
              DataSenado revelando que três em cada dez mulheres brasileiras já
              sofreram violência doméstica
            </span>
            . A pesquisa, considerada a maior já realizada sobre o tema no
            Brasil, abrange uma ampla gama de violências, incluindo psicológica,
            moral, física, patrimonial e sexual. Os dados são alarmantes e
            demonstram a necessidade de medidas mais eficazes para combater a
            violência doméstica, além de destacar a importância de ações
            governamentais e sociais para proteger e apoiar as mulheres. Para
            mais informações, visite:
            <Link
              href="https://www12.senado.leg.br/noticias/materias/2023/11/21/datasenado-aponta-que-3-a-cada-10-brasileiras-ja-sofreram-violencia-domestica"
              className="pl-1 text-[#607D8B]"
            >
              Senado Notícias.
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O 15° Anuário Brasileiro de Segurança Pública (FBSP, 2021) é uma
              pesquisa anual realizada pelo Fórum Brasileiro de Segurança
              Pública que compila dados de segurança pública no Brasil.
            </span>
            A edição de 2021 destaca estatísticas preocupantes sobre violência
            contra mulheres, incluindo feminicídios e violência sexual. O
            anuário revela um aumento nos casos de feminicídio e uma alta
            incidência de estupros, com um foco particular nas vítimas
            vulneráveis, como meninas menores de 13 anos. A pesquisa serve como
            uma ferramenta valiosa para entender a extensão e a natureza da
            violência contra as mulheres no Brasil. Visite o site para mais
            informações:
            <Link
              href="https://dossies.agenciapatriciagalvao.org.br/dados-e-fontes/pesquisa/anuario-brasileiro-de-seguranca-publica-fbsp-2021/"
              className="pl-1 text-[#607D8B]"
            >
              Dossiês Agência Patrícia Galvão
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O artigo da Agência Brasil destaca que, no Brasil, uma mulher é
              vítima de violência a cada quatro horas ,
            </span>
            com São Paulo e Rio de Janeiro concentrando quase 60% dos casos. A
            pesquisa, realizada em sete estados, revela dados alarmantes como o
            aumento de 45% nos casos de violência contra mulheres no Rio de
            Janeiro. Além disso, aponta para a necessidade de políticas públicas
            mais efetivas para prevenir e proteger as mulheres da violência,
            destacando a relevância do monitoramento e análise dos dados sobre o
            tema. Para mais detalhes, acesse:
            <Link
              href="https://agenciabrasil.ebc.com.br/geral/noticia/2023-03/no-brasil-uma-mulher-e-vitima-de-violencia-cada-quatro-horas"
              className="pl-1 text-[#607D8B]"
            >
              Agência Brasil
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O artigo no Poder360 revela que o Brasil registra, em média, 245
              casos de violência contra a mulher por dia, segundo dados do
              serviço Ligue 180.
            </span>
            Até outubro de 2023, foram registrados 74.584 casos, incluindo
            violência psicológica, física, patrimonial e sexual. A pesquisa
            também mostra que mulheres negras são as principais vítimas. O Ligue
            180 desempenha um papel crucial na orientação de mulheres em
            situação de violência e na oferta de informações sobre seus direitos
            e serviços de apoio. Para mais detalhes, leia o artigo completo em:
            <Link
              href="https://www.poder360.com.br/brasil/brasil-tem-245-registros-de-violencia-contra-a-mulher-por-dia/"
              className="pl-1 text-[#607D8B]"
            >
              Poder360
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              A pesquisa da Universidade Federal de Minas Gerais (UFMG) revela
              um alto índice de subnotificação de violência contra mulheres no
              Brasil.
            </span>
            Estima-se que a subnotificação da violência psicológica, física e
            sexual seja de 98,5%, 75,9% e 89,4%, respectivamente. O estudo, que
            compara dados de saúde com registros oficiais, mostra a discrepância
            entre os casos de violência relatados e os realmente registrados. A
            violência psicológica é a mais subnotificada, indicando a
            necessidade de maior atenção e conscientização sobre esta forma de
            violência. Para mais informações, leia o artigo completo na página
            da UFMG:
            <Link
              href="https://ufmg.br/comunicacao/noticias/pesquisa-mostra-alto-indice-de-subnotificacao-de-violencia-contra-as-mulheres-no-brasil"
              className="pl-1 text-[#607D8B]"
            >
              Universidade Federal de Minas Gerais
            </Link>
            .
          </p>
        </section>
        <section>
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O artigo no Consultor Jurídico reporta um aumento de 40% nos
              registros de feminicídios e violência doméstica contra mulheres em
              tribunais estaduais brasileiros.
            </span>
            O relatório do Conselho Nacional de Justiça (CNJ) analisou dados de
            2022, comparando-os com 2017. Há uma preocupação com a eficiência do
            Judiciário no tratamento desses casos, indicando a necessidade de um
            sistema judicial mais rápido e eficaz para lidar com a violência
            contra a mulher. Para ler o artigo completo, visite:
            <Link
              href="https://www.conjur.com.br/2023-ago-16/casos-feminicidio-violencia-mulher-crescem-40-justica/"
              className="pl-1 text-[#607D8B]"
            >
              Consultor Jurídico
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal ">
            <span className="font-bold pr-1">
              O artigo na Veja reporta um aumento significativo na violência
              contra mulheres no Brasil em 2022, conforme dados do Anuário
              Brasileiro de Segurança Pública.
            </span>
            Os casos de feminicídio cresceram 6,1%, com uma maioria das vítimas
            sendo negras e mortas dentro de casa. Também houve aumentos em casos
            de violência doméstica, ameaças, stalking e violência psicológica. O
            país registrou o maior número de estupros desde 2011, com um
            crescimento de 8,2% em relação a 2021. Para ler o artigo completo,
            visite:
            <Link
              href="https://veja.abril.com.br/coluna/maquiavel/brasil-tem-alta-de-violencia-contra-as-mulheres-e-bate-recorde-de-estupros"
              className="pl-1 text-[#607D8B]"
            >
              Veja
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O artigo no Terra aborda a violência contra a mulher no Brasil,
              destacando as estatísticas e os diferentes tipos de violência
              previstos na Lei Maria da Penha.
            </span>
            Ele apresenta dados alarmantes de violência diária contra mulheres e
            explica as cinco categorias de violência: física, psicológica,
            moral, sexual e patrimonial. Além disso, oferece orientações sobre
            como denunciar esses casos, ressaltando a importância da denúncia e
            do apoio às vítimas. Para mais informações, acesse o artigo no
            <Link
              href="https://www.terra.com.br/nos/violencia-contra-a-mulher-no-brasil-dados-tipos-e-como-denunciar,d30403a7cf474968fc2e7813515eef4f25a34mhl.html"
              className="pl-1 text-[#607D8B]"
            >
              Terra
            </Link>
            .
          </p>
        </section>
        <section className="">
          <p className="text-base font-normal">
            <span className="font-bold pr-1">
              O artigo no Meio & Mensagem discute o aumento da violência contra
              mulheres no Brasil em 2022.
            </span>
            Apresenta estatísticas do Fórum Brasileiro de Segurança Pública,
            incluindo um aumento de 6% nos feminicídios e um crescimento
            significativo em casos de agressão, assédio e estupro. O artigo
            também destaca a subnotificação destes crimes e os desafios
            enfrentados na implementação da Lei Maria da Penha, além de explorar
            possíveis razões para o aumento da violência, como cortes em
            políticas públicas e a pandemia de Covid-19. Leia o artigo completo
            em:
            <Link
              href="https://www.meioemensagem.com.br/womentowatch/violencia-contra-mulheres-alcanca-maior-patamar-ultimos-anos"
              className="pl-1 text-[#607D8B]"
            >
              Meio & Mensagem
            </Link>
            .
          </p>
        </section>
      </main>
    </Box>
  )
}
