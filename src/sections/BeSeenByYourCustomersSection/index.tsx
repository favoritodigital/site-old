import { useEffect } from 'react'

import { WhatsappButton } from '../../components/WhatsappButton'

import styles from './styles.module.css'

export function BeSeenByYourCustomersSection() {
  useEffect(() => {
    const scriptId = 'static/bitrix-estabelecimento-form.js'

    if (document.getElementById(scriptId) != null) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = scriptId
    script.setAttributeNS(null, 'data-b24-form', 'inline/14/vle4l0')
    script.setAttributeNS(null, 'data-skip-moving', 'true')
    script.defer = true

    const scriptDiv = document.getElementById('script_div')

    scriptDiv?.appendChild(script)

    return () => {
      scriptDiv?.removeChild(script)
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>seja visto pelo seu cliente ideal a partir de hoje!</h1>
      <p className={styles.paragraph}>
        preencha o formulário abaixo e a nossa equipe entrará em contato com você
      </p>
      <div id='script_div' className={styles.form} />
      <p className={styles.paragraph}>ou se preferir, clique no botão abaixo e fale conosco</p>
      <WhatsappButton text='quero me cadastrar' />
    </div>
  )
}
