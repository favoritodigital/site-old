import Head from 'next/head'
import styles from './termos-de-uso-usuario.module.css'

export default function TermsOfUseUser() {
  return (
    <>
      <Head>
        <title>termos de uso | Que Barbada</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleBig}>Termos e Condições Gerais de Uso do USUÁRIO</h1>
          <p className={styles.text}>
            Seja muito bem vindo(a) a plataforma QUE BARBADA. Ao baixar ou usar o aplicativo, estes
            termos se aplicarão automaticamente a você - portanto, certifique-se de lê-los com
            atenção antes de usar o aplicativo. Neste termo você terá acesso às informações para
            aproveitar os benefícios da plataforma.
          </p>
          <h2 className={styles.titleSmall}>1. QUEM SOMOS</h2>
          <p className={styles.text}>
            1.1. Somos uma plataforma que deseja proporcionar a você (USUÁRIO) momentos de alegria,
            diversão e lazer em diversos estabelecimentos.
          </p>
          <h2 className={styles.titleSmall}>2. QUAIS SERVIÇOS OFERECEMOS</h2>
          <p className={styles.text}>
            2.2. O serviço da plataforma QUE BARBADA consiste em conectar, através do aplicativo, as
            pessoas (usuários) aos estabelecimentos cadastrados, por meio da visualização online das
            ofertas e/ou opções diferenciadas de entretenimento/atendimento do estabelecimento para
            um determinado dia.
          </p>
          <h2 className={styles.titleSmall}>3. COMO FUNCIONA</h2>
          <p className={styles.text}>
            3.1. Cabe a você, USUÁRIO do app, visualizar a oferta do estabelecimento na nossa
            plataforma e decidir se vai ou não aproveitá-la.
          </p>
          <p className={styles.text}>
            3.2. Para uma melhor experiência, utilize nossos filtros para encontrar os locais de
            acordo com a sua preferência. Por exemplo: que aceitem seu pet, possui espaço kids,
            música ao vivo, wi-fi, estacionamento, mesa ao ar livre entre outras opções.
          </p>
          <p className={styles.text}>
            3.3. Desde logo fica esclarecido ao USUÁRIO, o qual se declara ciente, que os serviços
            oferecidos pela plataforma QUE BARBADA se relacionam apenas à intermediação, sem
            qualquer responsabilidade quanto ao preparo, atendimento e vícios inerentes aos produtos
            e serviços.
          </p>
          <h2 className={styles.titleSmall}>4. MODIFICAÇÕES DESTE TERMO</h2>
          <p className={styles.text}>
            4.1. O presente TERMO de uso poderá, a qualquer tempo, ter seu conteúdo, ou parte dele,
            modificados para adequações e inserções, tudo com vistas ao aprimoramento dos serviços
            disponibilizados, sendo possível ao USUÁRIO manifestar oposição a quaisquer dos termos
            modificados.
          </p>
          <h2 className={styles.titleSmall}>5. CANAL DE COMUNICAÇÃO</h2>
          <p className={styles.text}>
            5.1. Se você tiver dúvidas ou sugestões sobre nosso TERMO e CONDIÇÕES, não hesite em nos
            contatar em{' '}
            <a
              className={styles.link}
              href='mailto:contato@quebarbada.com'
              target='_blank'
              rel='noreferrer'
            >
              contato@quebarbada.com
            </a>{' '}
            ou WhatsApp: (47) 99680-8143.
          </p>
          <h2 className={styles.titleSmall}>6. ACEITAÇÃO DO TERMO DE USO</h2>
          <p className={styles.text}>
            6.1. O USUÁRIO declara ter lido, entendido e que aceita todas as regras, condições e
            obrigações estabelecidas no presente TERMO.
          </p>
          <p className={styles.text}>
            Estes termos e condições são válidos a partir de 01-03-2022.
          </p>
        </div>
      </div>
    </>
  )
}
