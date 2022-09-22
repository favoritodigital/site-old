// IMAGES
import Link from 'next/link'
import WhatsappLogo from '../public/images/whatsapplogo.svg'

// SEJA PARCEIRO SECTION
export default function SejaParceiro() {
  return (
    <div id="seja-parceiro">
      <h1 className="title">seja um parceiro Que Barbada</h1>
      <p>
        cadastre-se e compartilhe você também a sua agenda e aumente a
        visibilidade do seu estabelecimento!
      </p>
      <div className="benefícios">
        <h2>benefícios de ser nosso parceiro:</h2>
        <ul>
          <li>-maior visibilidade para o seu estabelecimento</li>
          <li>- aumento de vendas</li>
          <li>- aumento da demanda de clientes em horários de sazonalidade</li>
          <li>- fique dentro das nossas campanhas publicitárias mais topes</li>
          <li>- ofereça cartão de fidelidade virtual para seu cliente</li>
        </ul>
      </div>
      <div className="diferenciais">
        <h2>nossos diferenciais:</h2>
        <ul>
          <li>- não cobramos taxa de adesão</li>
          <li>- somos mais baratin que Netflix</li>
          <li>- não cobramos percentual sobre suas vendas</li>
          <li>
            - a assinatura da plataforma permite que você utilize todos os
            recursos disponíveis
          </li>
        </ul>
      </div>
      <div className="whatsapp">
        <h1 className="contact">se você chegou até aqui... é um match ;)</h1>
        <p>
          e temos uma longa história para construirmos juntos. entre em contato
          com a gente clicando no número abaixo, ou no botão ao lado:
        </p>
        <div className="tablet">
          <a
            href="https://wa.me/5547997536595"
            target="_blank"
            rel="noreferrer"
          >
            <div className="telephone">
              <WhatsappLogo />
              <span itemProp="telephone">+55 (47) 99753-6595</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
