import { useState } from 'react'
import Link from 'next/link'
import Logo from '../images/logo.svg'
import Open from '../images/open.svg'
import Close from '../images/close.svg'

import MenuItem from './MenuItem'
import WebNavigationItem from './WebNavigationItem'
export default function Header() {
  const [isMenuOpen, handleIsMenuOpen] = useState(false)
  return (
    <>
      <div className="header_wraper">
        <div className="header_main container box_shadow">
          {/* LOGO */}
          <Link href={'/'}>
            <div id="header_logo">
              <Logo />
            </div>
          </Link>
          {/* NAVIGATION WEB */}
          <div className="navigation_web">
            <WebNavigationItem href={'/'} label={'home'} />
            <WebNavigationItem
              href={'/seja-parceiro'}
              label={'seja parceiro'}
            />

            {/* <Link href={'/'}>
              <h1>home</h1>
            </Link>
            <Link href={'/seja-parceiro'}>
              <h1>seja parceiro</h1>
            </Link> */}
          </div>

          {/* MENU BUTTON */}
          <button
            id="menu_button"
            onClick={() => handleIsMenuOpen(!isMenuOpen)}
          >
            <div>{isMenuOpen ? <Close /> : <Open />}</div>
          </button>
        </div>
        {/* NAVIGATION MOBILE */}
        <div className="navigation_mobile">
          <ul></ul>
          {isMenuOpen && (
            <div className="header_menu">
              <ul>
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/'}
                  label={'home'}
                  background={'dark'}
                  hasShadow
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#inicio'}
                  label={'inicio'}
                  background={'light'}
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#como-encontrar'}
                  label={'como encontrar o seu rolê'}
                  background={'light'}
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#clientes'}
                  label={'clientes'}
                  background={'light'}
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#inicio'}
                  label={'depoimentos'}
                  background={'light'}
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#apoiadores'}
                  label={'apoiadores'}
                  background={'light'}
                  hasShadow
                />
                <MenuItem
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/seja-parceiro'}
                  label={'seja parceiro'}
                  background={'dark'}
                  hasShadow
                />
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="margin_top"></div>
    </>
  )
}
