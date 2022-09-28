import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function TermsOfUseUser() {
  return (
    <>
      <Head>
        <title>Que Barbada</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div className='legal-text-center'>
        <div className='termos-de-uso-usuario'>
          <h1>Termos e Condições Gerais de Uso do USUÁRIO</h1>
          <p>
            Seja muito bem vindo(a) a plataforma QUE BARBADA. Ao baixar ou usar o aplicativo, estes
            termos se aplicarão automaticamente a você - portanto, certifique-se de lê-los com
            atenção antes de usar o aplicativo. Neste termo você terá acesso às informações para
            aproveitar os benefícios da plataforma.
          </p>
          <h2>
            <span>1. </span>QUEM SOMOS
          </h2>
          <p>
            <span>1.1. </span>Somos uma plataforma que deseja proporcionar a você (USUÁRIO) momentos
            de alegria, diversão e lazer em diversos estabelecimentos.
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
            <span>3.1. </span>Cabe a você, USUÁRIO do app, visualizar a oferta do estabelecimento na
            nossa plataforma e decidir se vai ou não aproveitá-la.
          </p>
          <p>
            <span>3.2. </span>Para uma melhor experiência, utilize nossos filtros para encontrar os
            locais de acordo com a sua preferência. Por exemplo: que aceitem seu pet, possui espaço
            kids, música ao vivo, wi-fi, estacionamento, mesa ao ar livre entre outras opções.
          </p>
          <p>
            <span>3.3. </span>Desde logo fica esclarecido ao USUÁRIO, o qual se declara ciente, que
            os serviços oferecidos pela plataforma QUE BARBADA se relacionam apenas à intermediação,
            sem qualquer responsabilidade quanto ao preparo, atendimento e vícios inerentes aos
            produtos e serviços.
          </p>
          <h2>
            <span>4. </span>MODIFICAÇÕES DESTE TERMO
          </h2>
          <p>
            <span>4.1. </span>O presente TERMO de uso poderá, a qualquer tempo, ter seu conteúdo, ou
            parte dele, modificados para adequações e inserções, tudo com vistas ao aprimoramento
            dos serviços disponibilizados, sendo possível ao USUÁRIO manifestar oposição a quaisquer
            dos termos modificados.
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
          <h2>
            <span>6. </span>ACEITAÇÃO DO TERMO DE USO
          </h2>
          <p>
            <span>6.1. </span>O USUÁRIO declara ter lido, entendido e que aceita todas as regras,
            condições e obrigações estabelecidas no presente TERMO.
          </p>
          <p>Estes termos e condições são válidos a partir de 01-03-2022.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
