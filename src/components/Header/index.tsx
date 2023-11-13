import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { HeaderDownloadButton } from '../HeaderDownloadButton'
import { MenuItem } from '../MenuItem'
import { WebDownloadButton } from '../WebDownloadButton'
import { WebNavigationItem } from '../WebNavigationItem'
import styles from './styles.module.css'

import CloseIcon from '/public/images/icons/close.svg'
import OpenIcon from '/public/images/icons/open.svg'

import { useIsMobile } from '../../hooks/useIsMobile'

export enum BadgePages {
  home = '/',
  whoWeAre = '/quem-somos',
  registerEstablishment = '/cadastre-seu-estabelecimento',
  beFranchisee = '/seja-franqueado',
}

interface Props {
  badge?: BadgePages
}

export function Header({ badge }: Props) {
  const [isMenuOpen, handleIsMenuOpen] = useState(false)

  const isMobile = useIsMobile()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href={'/'}>
                <a>
                  <Image
                    src='/images/favorito-logo.svg'
                    layout='fill'
                    objectFit='contain'
                    alt='logo Favorito'
                  />
                </a>
              </Link>
            </div>
            <div className={styles.navigationWeb}>
              <WebNavigationItem href={'/'} label={'Início'} hasBadge={badge === BadgePages.home} />
              <WebNavigationItem
                href={'/quem-somos'}
                label={'Quem somos'}
                hasBadge={badge === BadgePages.whoWeAre}
              />
              <WebNavigationItem
                href={'/cadastre-seu-estabelecimento'}
                label={'Cadastre o seu estabelecimento'}
                hasBadge={badge === BadgePages.registerEstablishment}
              />
              <WebNavigationItem
                href={'/seja-franqueado'}
                label={'Seja um franqueado'}
                hasBadge={badge === BadgePages.beFranchisee}
              />
            </div>
          </div>
          <div className={styles.downloadButton}>
            {isMobile ? (
              <HeaderDownloadButton text='Baixe o app' />
            ) : (
              <WebDownloadButton text='Baixe o app' header />
            )}
          </div>
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
                  label='Início'
                  hasBadge={badge === BadgePages.home}
                />
                <MenuItem
                  id='quem-somos'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/quem-somos'
                  label='Quem somos'
                  hasBadge={badge === BadgePages.whoWeAre}
                />
                <MenuItem
                  id='cadastre-seu-estabelecimento'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/cadastre-seu-estabelecimento'
                  label='Cadastre o seu estabelecimento'
                  hasBadge={badge === BadgePages.registerEstablishment}
                />
                <MenuItem
                  id='seja-franqueado'
                  handleIsMenuOpen={handleIsMenuOpen}
                  href='/seja-franqueado'
                  label='Seja um franqueado'
                  hasBadge={badge === BadgePages.beFranchisee}
                />
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
