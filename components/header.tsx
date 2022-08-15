import { useState } from 'react'
import Link from 'next/link'

// SVGS
import Logo from '../public/images/logo.svg'
import Open from '../public/images/open.svg'
import Close from '../public/images/open.svg'

// COMPONENTS
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
          {isMenuOpen && (
            <div className="header_menu">
              <ul>
                <MenuItem
                  id="menu_item1"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/'}
                  label={'home'}
                  background={'dark'}
                  hasShadow
                />
                <MenuItem
                  id="menu_item2"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#inicio'}
                  label={'inicio'}
                  background={'light'}
                />
                <MenuItem
                  id="menu_item3"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#como-encontrar'}
                  label={'como encontrar o seu rolê'}
                  background={'light'}
                />
                <MenuItem
                  id="menu_item4"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#clientes'}
                  label={'clientes'}
                  background={'light'}
                />
                <MenuItem
                  id="menu_item5"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#depoimentos'}
                  label={'depoimentos'}
                  background={'light'}
                />
                <MenuItem
                  id="menu_item6"
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#apoiadores'}
                  label={'apoiadores'}
                  background={'light'}
                  hasShadow
                />
                <MenuItem
                  id="menu_item7"
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
    </>
  )
}
