import Head from 'next/head'
import styles from './termos-de-uso-estabelecimento.module.css'

export default function TermsOfUseEstablishment() {
  return (
    <>
      <Head>
        <title>termos de uso | Que Barbada</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleBig}>
            Termos de Adesão, Condições Gerais e Uso do ESTABELECIMENTO
          </h1>
          <p className={styles.text}>
            Seja muito bem vindo(a) a plataforma QUE BARBADA. Ao se cadastrar no aplicativo, estes
            termos se aplicarão automaticamente ao ESTABELECIMENTO. Portanto, certifique-se de
            lê-los com atenção antes de se cadastrar na plataforma. Neste termo você terá acesso às
            informações para aproveitar os benefícios da plataforma.
          </p>
          <h2 className={styles.titleSmall}>1. QUEM SOMOS</h2>
          <p className={styles.text}>
            1.1. Somos uma plataforma que deseja proporcionar aumento de visibilidade e demanda de
            clientes ao ESTABELECIMENTO cadastrado.
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
            3.1. O ESTABELECIMENTO fica desde logo informado e concorda, que os serviços deste
            sistema serão disponibilizados aos usuários, conforme as ofertas são recebidas do
            ESTABELECIMENTO aos responsáveis pela plataforma QUE BARBADA.
          </p>
          <p className={styles.text}>
            3.1.1. Cabe ao ESTABELECIMENTO se comprometer em enviar as ofertas diariamente,
            semanalmente ou mensalmente aos responsáveis pela plataforma para o cadastramento.
          </p>
          <p className={styles.text}>
            3.2. É de responsabilidade da plataforma QUE BARBADA informar ao ESTABELECIMENTO a
            quantidade de visualizações no seu perfil e redimensionamentos para informações
            específicas do ESTABELECIMENTO cadastrado no último dia de cada mês.
          </p>
          <p className={styles.text}>
            3.3. Desde logo fica esclarecido ao ESTABELECIMENTO, o qual se declara ciente, que os
            serviços oferecidos pela plataforma QUE BARBADA se relacionam apenas à intermediação,
            sem qualquer responsabilidade quanto ao preparo, atendimento e vícios inerentes aos
            produtos e serviços.
          </p>
          <h2 className={styles.titleSmall}>4. MODIFICAÇÕES DESTE TERMO</h2>
          <p className={styles.text}>
            4.1. O presente TERMO de uso poderá, a qualquer tempo, ter seu conteúdo, ou parte dele,
            modificados para adequações e inserções, tudo com vistas ao aprimoramento dos serviços
            disponibilizados, sendo possível ao ESTABELECIMENTO manifestar oposição a quaisquer dos
            termos modificados.
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
        </div>
      </div>
    </>
  )
}
