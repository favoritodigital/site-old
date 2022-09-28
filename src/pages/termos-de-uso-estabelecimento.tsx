// NEXT
import Head from 'next/head'

// HEADER
import Footer from '../components/Footer'
import Header from '../components/Header'

// POLÍTICA DE PRIVACIDADE
export default function Sejaparceiro() {
  return (
    <>
      <Head>
        <title>Que Barbada</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div className='legal-text-center'>
        <div className='termos-de-uso-estabelecimento'>
          <h1>Termos de Adesão, Condições Gerais e Uso do ESTABELECIMENTO</h1>
          <p>
            Seja muito bem vindo(a) a plataforma QUE BARBADA. Ao se cadastrar no aplicativo, estes
            termos se aplicarão automaticamente ao ESTABELECIMENTO. Portanto, certifique-se de
            lê-los com atenção antes de se cadastrar na plataforma. Neste termo você terá acesso às
            informações para aproveitar os benefícios da plataforma.
          </p>
          <h2>
            <span>1. </span>QUEM SOMOS
          </h2>
          <p>
            <span>1.1. </span>Somos uma plataforma que deseja proporcionar aumento de visibilidade e
            demanda de clientes ao ESTABELECIMENTO cadastrado.
          </p>
          <h2>
            <span>2. </span>QUAIS SERVIÇOS OFERECEMOS
          </h2>
          <p>
            <span>2.2. </span>O serviço da plataforma QUE BARBADA consiste em conectar, através do
            aplicativo, as pessoas (usuários) aos estabelecimentos cadastrados, por meio da
            visualização online das ofertas e/ou opções diferenciadas de entretenimento/atendimento
            do estabelecimento para um determinado dia.
          </p>
          <h2>
            <span>3. </span>COMO FUNCIONA
          </h2>
          <p>
            <span>3.1. </span>O ESTABELECIMENTO fica desde logo informado e concorda, que os
            serviços deste sistema serão disponibilizados aos usuários, conforme as ofertas são
            recebidas do ESTABELECIMENTO aos responsáveis pela plataforma QUE BARBADA.
          </p>
          <p>
            <span>3.1.1. </span>Cabe ao ESTABELECIMENTO se comprometer em enviar as ofertas
            diariamente, semanalmente ou mensalmente aos responsáveis pela plataforma para o
            cadastramento.
          </p>
          <p>
            <span>3.2. </span>É de responsabilidade da plataforma QUE BARBADA informar ao
            ESTABELECIMENTO a quantidade de visualizações no seu perfil e redimensionamentos para
            informações específicas do ESTABELECIMENTO cadastrado no último dia de cada mês.
          </p>
          <p>
            <span>3.3. </span>Desde logo fica esclarecido ao ESTABELECIMENTO, o qual se declara
            ciente, que os serviços oferecidos pela plataforma QUE BARBADA se relacionam apenas à
            intermediação, sem qualquer responsabilidade quanto ao preparo, atendimento e vícios
            inerentes aos produtos e serviços.
          </p>
          <h2>
            <span>4. </span>MODIFICAÇÕES DESTE TERMO
          </h2>
          <p>
            <span>4.1. </span>O presente TERMO de uso poderá, a qualquer tempo, ter seu conteúdo, ou
            parte dele, modificados para adequações e inserções, tudo com vistas ao aprimoramento
            dos serviços disponibilizados, sendo possível ao ESTABELECIMENTO manifestar oposição a
            quaisquer dos termos modificados.
          </p>
          <h2>
            <span>5. </span>CANAL DE COMUNICAÇÃO
          </h2>
          <p>
            <span>5.1. </span>Se você tiver dúvidas ou sugestões sobre nosso TERMO e CONDIÇÕES, não
            hesite em nos contatar em{' '}
            <a href='mailto:contato@quebarbada.com' target='_blank' rel='noreferrer'>
              contato@quebarbada.com
            </a>{' '}
            ou WhatsApp: (47) 99680-8143.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
