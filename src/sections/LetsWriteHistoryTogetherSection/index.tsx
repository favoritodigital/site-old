import { useEffect } from 'react'

import styles from './styles.module.css'

export function LetsWriteHistoryTogetherSection() {
  useEffect(() => {
    const scriptId = 'static/bitrix-franqueado-form.js'

    if (document.getElementById(scriptId) != null) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = scriptId
    script.setAttributeNS(null, 'data-b24-form', 'inline/10/esgoms')
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
      <div id='bora-construir-uma-historia' className={styles.pin} />
      <h1 className={styles.title}>Bora construir uma história de sucesso juntos?</h1>
      <p className={styles.paragraph}>
        Preencha o formulário abaixo e a nossa equipe entrará em contato com você
      </p>
      <div id='script_div' className={styles.form} />
    </div>
  )
}
