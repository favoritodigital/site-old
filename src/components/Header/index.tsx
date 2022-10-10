import { useState } from 'react'
import Link from 'next/link'

import Logo from '/public/images/logo.svg'
import Open from '/public/images/open.svg'
import Close from '/public/images/close.svg'

import MenuItem from '../MenuItem'
import WebNavigationItem from '../WebNavigationItem'

import styles from './Header.module.css'

export enum BadgePages {
  home = '/',
  bePartner = '/seja-parceiro',
}

interface Props {
  badge?: BadgePages
}

export default function Header({ badge }: Props) {
  const [isMenuOpen, handleIsMenuOpen] = useState(false)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href={'/'}>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={styles.navigationWeb}>
            <WebNavigationItem href={'/'} label={'início'} hasBadge={badge === BadgePages.home} />
            <WebNavigationItem
              href={'/seja-parceiro'}
              label={'seja parceiro'}
              hasBadge={badge === BadgePages.bePartner}
            />
          </div>
          <button className={styles.menuButton} onClick={() => handleIsMenuOpen(!isMenuOpen)}>
            <div>{isMenuOpen ? <Close /> : <Open />}</div>
          </button>
        </div>
        <div className={styles.navigationMobile}>
          {isMenuOpen && (
            <div className={styles.headerMenu}>
              <ul>
                <MenuItem
                  id='menu_item1'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/'}
                  label={'home'}
                  background={'dark'}
                  hasShadow
                />
                <MenuItem
                  id='menu_item2'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#inicio'}
                  label={'inicio'}
                  background={'light'}
                />
                <MenuItem
                  id='menu_item3'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#como-encontrar'}
                  label={'como encontrar o seu rolê'}
                  background={'light'}
                />
                <MenuItem
                  id='menu_item4'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#clientes'}
                  label={'clientes'}
                  background={'light'}
                />
                <MenuItem
                  id='menu_item5'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#depoimentos'}
                  label={'depoimentos'}
                  background={'light'}
                />
                <MenuItem
                  id='menu_item6'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href={'/#apoiadores'}
                  label={'apoiadores'}
                  background={'light'}
                  hasShadow
                />
                <MenuItem
                  id='menu_item7'
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
