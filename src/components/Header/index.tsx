import { useState } from 'react'
import Link from 'next/link'

import { isMobile } from 'react-device-detect'

import { MenuItem } from '../MenuItem'
import { WebNavigationItem } from '../WebNavigationItem'

import QueBarbadaLogo from '/public/images/quebarbada-logo.svg'
import OpenIcon from '/public/images/icons/open.svg'
import CloseIcon from '/public/images/icons/close.svg'

import styles from './styles.module.css'
import { HeaderDownloadButton } from '../HeaderDownloadButton'
import { HeaderWebDownloadButton } from '../HeaderWebDownloadButton'

export enum BadgePages {
  home = '/',
  whoWeAre = '/quem-somos',
  registerYourStablishment = '/cadastre-seu-estabelecimento',
  beAFranchisee = '/seja-franqueado',
}

interface Props {
  badge?: BadgePages
}

export function Header({ badge }: Props) {
  const [isMenuOpen, handleIsMenuOpen] = useState(false)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href={'/'}>
                <a>
                  <QueBarbadaLogo />
                </a>
              </Link>
            </div>
            <div className={styles.navigationWeb}>
              <WebNavigationItem href={'/'} label={'início'} hasBadge={badge === BadgePages.home} />
              <WebNavigationItem
                href={'/quem-somos'}
                label={'quem somos'}
                hasBadge={badge === BadgePages.whoWeAre}
              />
              <WebNavigationItem
                href={'/cadastre-seu-estabelecimento'}
                label={'cadastre o seu estabelecimento'}
                hasBadge={badge === BadgePages.registerYourStablishment}
              />
              <WebNavigationItem
                href={'/seja-franqueado'}
                label={'seja um franqueado'}
                hasBadge={badge === BadgePages.beAFranchisee}
              />
            </div>
          </div>
          {isMobile ? (
            <HeaderDownloadButton text='baixe o app' />
          ) : (
            <HeaderWebDownloadButton text='baixe o app' />
          )}
          <button className={styles.menuButton} onClick={() => handleIsMenuOpen(!isMenuOpen)}>
            <div>{isMenuOpen ? <CloseIcon /> : <OpenIcon />}</div>
          </button>
        </div>
        <div className={styles.navigationMobile}>
          {isMenuOpen && (
            <div className={styles.headerMenu}>
              <ul>
                <MenuItem
                  id='home'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/'
                  label='início'
                  hasBadge={badge === BadgePages.home}
                />
                <MenuItem
                  id='quem-somos'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/quem-somos'
                  label='quem somos'
                  hasBadge={badge === BadgePages.whoWeAre}
                />
                <MenuItem
                  id='cadastre-seu-estabelecimento'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/cadastre-seu-estabelecimento'
                  label='cadastre o seu estabelecimento'
                  hasBadge={badge === BadgePages.registerYourStablishment}
                />
                <MenuItem
                  id='seja-franqueado'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/seja-franqueado'
                  label='seja um franqueado'
                  hasBadge={badge === BadgePages.beAFranchisee}
                />
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
