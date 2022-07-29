import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, handleIsMenuOpen] = useState(false)
  return (
    <div className="header_wraper">
      <div className="header_main container box_shadow">
        {/* LOGO */}
        <Link href={'/'}>
          <svg
            version="1.1"
            id="header_logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="3268.3 141.2 2026.2 509.7"
          >
            <g>
              <path
                className="brand_purple"
                d="M3739.3,351.2l-1.7,16.4c-2.3,21.6-6.5,43-13.7,63.5c-38.7,109.6-139.1,176.9-253.9,155.3
		c-96.8-18.3-162.5-92.9-178.6-185.8c-7.4-42.8-2.5-86.8,11.6-127.9l3.7-10.6c0.5-1.6,1.4-3,2.5-4.2c1.1-1.2,2.5-2.2,4.1-2.8
		c1.5-0.6,3.2-1,4.9-0.9c1.7,0,3.3,0.4,4.8,1.1c27.9,13.1,102.1,45.4,191.7,64.5c107.7,22.9,176.4,19,207.5,14.8
		c2.3-0.3,4.6-0.1,6.8,0.6c2.2,0.7,4.2,1.9,5.8,3.6c1.6,1.6,2.9,3.6,3.7,5.8C3739.3,346.6,3739.5,348.9,3739.3,351.2L3739.3,351.2z
		 M3704.1,311.4c-4.4-15.6-10.5-29.8-19-42.3c-8.5-12.3-19.1-23.3-31.5-30.5c-12.1-7.5-26.6-10.5-39.1-5.4
		c-12.7,5.2-22,18.6-29.2,32.9c0.7-8.2,2.8-16.3,6.4-23.7c3.8-7.5,9.5-14.7,17.5-19.4c7.8-5,17.6-6.3,26.6-5.7
		c9.1,0.8,17.6,4.2,25.2,8.5c15,9.1,26.5,22.4,34,37.5C3702.5,278.4,3705.9,295.4,3704.1,311.4z M3505.1,233
		c-0.7,8.2-2.8,16.3-6.4,23.7c1-16-0.3-32.2-8.6-43.1c-8.2-10.8-22.2-15.4-36.5-15.1c-14.3,0-28.9,4.2-42.6,10.5
		c-13.6,6.5-26.1,15.7-37.7,27c6.6-14.8,18-27.8,32-37s30.7-15,48.2-15.2c8.7,0.1,17.7,1.5,26,5.4c8.2,4,15.9,10.1,20.2,18.3
		C3504.2,215.5,3505.6,224.6,3505.1,233z"
              />
              <path
                className="brand_white"
                d="M3367.7,331.9c5.2,1.6,10.5,2.5,15.9,2.7c7.4,10.8,17.9,19.1,30.1,23.7c12.2,4.7,25.6,5.5,38.3,2.3
		c8.6,9.4,19.9,16,32.3,18.9c12.4,2.9,25.5,2,37.4-2.6c8.9,11.5,21.2,19.8,35.1,23.9c13.9,4,28.8,3.6,42.4-1.4
		c11.3,8.6,24.9,13.8,39.1,14.9c14.2,1.1,28.4-2,40.9-8.8c12.5-6.8,22.8-17.1,29.6-29.6c6.8-12.5,9.8-26.7,8.7-40.9
		c-33,3.9-100.2,6.4-202.8-15.4c-88.1-18.7-161.1-50.2-190.1-63.7c-3.8,15.8-1.5,32.4,6.5,46.5
		C3339.1,316.6,3352.2,327.2,3367.7,331.9L3367.7,331.9z"
              />
              <path
                className="brand_red"
                d="M3534.3,489.3c-18.9-5.5-39-5.4-57.8,0.4c-10.6-13.8-24.5-24.6-40.5-31.4c-40.6-17.3-86.1-5.9-114.2,25
		c31.3,52.3,82.5,90.7,148.2,103.1c49,9.3,95.4,2.2,135.5-17.3C3599.1,532.3,3572.5,500.5,3534.3,489.3L3534.3,489.3z"
              />
              <path
                className="brand_yellow"
                d="M3523.2,141.2c-140.7,0-254.8,114.1-254.8,254.8s114.1,254.8,254.8,254.8S3778,536.8,3778,396
		S3663.9,141.2,3523.2,141.2z M3591.8,242.4c3.8-7.5,9.5-14.7,17.5-19.4c7.8-5,17.6-6.3,26.6-5.7c9.1,0.8,17.6,4.2,25.2,8.5
		c15,9.1,26.5,22.4,34,37.5c7.4,15.1,10.8,32,9,48.1c-4.4-15.6-10.5-29.8-19-42.3c-8.5-12.3-19.1-23.3-31.5-30.5
		c-12.1-7.5-26.6-10.5-39.1-5.4c-12.7,5.2-22,18.6-29.2,32.9C3586,257.9,3588.2,249.9,3591.8,242.4z M3405.3,199
		c14-9.3,30.7-15,48.2-15.2c8.7,0.1,17.7,1.5,26,5.4c8.2,4,15.9,10.1,20.2,18.3c4.5,8,5.9,17.1,5.4,25.5c-0.7,8.2-2.8,16.3-6.4,23.7
		c1-16-0.3-32.2-8.6-43.1c-8.2-10.8-22.2-15.4-36.5-15.1c-14.3,0-28.9,4.2-42.6,10.5c-13.6,6.5-26.1,15.7-37.7,27
		C3379.9,221.2,3391.3,208.2,3405.3,199z M3737.6,367.7c-2.3,21.6-6.5,43-13.7,63.5c-38.7,109.6-139.1,176.9-253.9,155.3
		c-96.8-18.3-162.5-92.9-178.6-185.8c-7.4-42.8-2.5-86.8,11.6-127.9l3.7-10.6c0.5-1.6,1.4-3,2.5-4.2c1.1-1.2,2.5-2.2,4.1-2.8
		c1.5-0.6,3.2-1,4.9-0.9c1.7,0,3.3,0.4,4.8,1.1c27.9,13.1,102.1,45.4,191.7,64.5c107.7,22.9,176.4,19,207.5,14.8
		c2.3-0.3,4.6-0.1,6.8,0.6c2.2,0.7,4.2,1.9,5.8,3.5c1.7,1.6,2.9,3.6,3.7,5.7c0.8,2.2,1.1,4.5,0.8,6.8L3737.6,367.7z"
              />
              <path
                className="brand_white"
                d="M4006.8,470.7c-10,7.9-21.1,11.9-33.4,11.9c-18.4,0-34.2-6.5-47.3-19.5c-13-13.1-19.5-28.9-19.5-47.3
		c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6c18.4,0,40.7,8.9,66.8,26.7v160.4h-33.4V470.7z M4006.8,394.3
		c-13-7.9-24.1-11.9-33.4-11.9c-9.3,0-17.2,3.3-23.7,9.8c-6.5,6.5-9.8,14.4-9.8,23.7c0,9.3,3.3,17.2,9.8,23.7
		c6.5,6.5,14.4,9.8,23.7,9.8c9.3,0,17.2-3.3,23.7-9.8c6.5-6.5,9.8-14.4,9.8-23.7V394.3z M4081.6,421.3v0.5c0,9.5,2.1,16.5,6.3,20.9
		c4.3,4.4,11,6.5,20.3,6.5c8,0,16.9-4,26.7-11.9l0.1-88.4h33.4l0.1,106.9c-18,17.8-38.1,26.7-60.4,26.7
		c-18.4-0.1-33.1-5.7-43.8-16.7c-10.8-11.1-16.1-26-15.9-44.6v-72.3h33.1V421.3z M4264.7,390.6c-7.1-5.5-14.3-8.3-21.4-8.3
		c-9.3,0-17.2,3.3-23.7,9.8c-4.7,4.8-7.1,12.3-7.1,22.6v1.1L4264.7,390.6z M4243.2,482.6c-18.4,0-34-6.5-47.1-19.6
		c-13.1-13-19.7-28.7-19.7-47.2c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6s34.2,6.5,47.3,19.5
		c9.8,9.9,15.9,21.3,18.3,34.1l-32.3,15.9v-0.1l-52.4,25.1c3.7,2.7,7.8,4.5,12.3,5.3v-0.1c2.2,0.5,4.6,0.8,7.2,0.8
		c9.4-0.2,20.5-4.2,33.5-12.2l13.9,30.6C4273.4,477.7,4257.4,482.6,4243.2,482.6z M4404,360.8c10-7.9,21.1-11.9,33.4-11.9
		c18.4,0,34.2,6.5,47.2,19.6c13.1,13,19.7,28.7,19.7,47.2c0,18.4-6.6,34.2-19.7,47.3c-13,13-28.7,19.5-47.2,19.5
		c-18.4,0-40.7-8.9-66.8-26.7l-0.1-153.7h33.4L4404,360.8z M4404,437.3c13,7.9,24.1,11.9,33.4,11.9c9.3,0,17.2-3.3,23.7-9.8
		c6.5-6.5,9.8-14.4,9.8-23.7c0-9.3-3.3-17.2-9.8-23.7c-6.5-6.5-14.4-9.8-23.7-9.8c-9.3,0-17.2,3.3-23.7,9.8
		c-6.5,6.5-9.8,14.4-9.8,23.7V437.3z M4602.8,439.4c6.5-6.5,9.8-14.4,9.8-23.7v-21.5c-13-7.9-24.1-11.9-33.4-11.9
		c-9.3,0-17.2,3.3-23.7,9.8c-6.5,6.5-9.8,14.4-9.8,23.7c0,9.3,3.3,17.2,9.8,23.7c6.5,6.5,14.4,9.8,23.7,9.8
		C4588.4,449.2,4596.3,445.9,4602.8,439.4z M4612.5,470.6c-9.9,8-21,12-33.4,12c-18.4,0-34.2-6.5-47.3-19.5
		c-13-13.1-19.5-28.9-19.5-47.3c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6s40.7,8.9,66.8,26.7v106.9h-33.4V470.6z
		 M4727.6,382.4c-16.9,0-30.3,4-40.1,11.9l-0.1,88.4H4654l0.1-106.9c17.8-17.8,42.3-26.7,73.5-26.7V382.4z M4769.2,360.8
		c10-7.9,21.1-11.9,33.4-11.9c18.5,0,34.2,6.5,47.2,19.6c13.1,13,19.7,28.7,19.7,47.2c0,18.4-6.6,34.2-19.7,47.3
		c-13,13-28.7,19.5-47.2,19.5c-18.4,0-40.7-8.9-66.8-26.7l-0.1-153.7h33.4L4769.2,360.8z M4769.2,437.3c13,7.9,24.1,11.9,33.4,11.9
		s17.2-3.3,23.7-9.8c6.5-6.5,9.8-14.4,9.8-23.7c0-9.3-3.3-17.2-9.8-23.7c-6.5-6.5-14.4-9.8-23.7-9.8s-17.2,3.3-23.7,9.8
		c-6.5,6.5-9.8,14.4-9.8,23.7V437.3z M4968,439.4c6.5-6.5,9.8-14.4,9.8-23.7v-21.5c-13-7.9-24.1-11.9-33.4-11.9
		c-9.3,0-17.2,3.3-23.7,9.8c-6.5,6.5-9.8,14.4-9.8,23.7c0,9.3,3.3,17.2,9.8,23.7c6.5,6.5,14.4,9.8,23.7,9.8
		C4953.6,449.2,4961.5,445.9,4968,439.4z M4977.7,470.6c-9.9,8-21,12-33.4,12c-18.4,0-34.2-6.5-47.3-19.5
		c-13-13.1-19.5-28.9-19.5-47.3c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6c18.4,0,40.7,8.9,66.8,26.7v106.9h-33.4
		V470.6z M5152.8,455.9c-26.1,17.8-48.4,26.7-66.8,26.7s-34.2-6.5-47.3-19.5c-13-13.1-19.5-28.9-19.5-47.3
		c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6c12.3,0,23.4,4,33.4,11.9v-58.7h33.4V455.9z M5119.4,415.8
		c0-9.3-3.3-17.2-9.8-23.7c-6.5-6.5-14.4-9.8-23.7-9.8c-9.3,0-17.2,3.3-23.7,9.8c-6.5,6.5-9.8,14.4-9.8,23.7
		c0,9.3,3.3,17.2,9.8,23.7c6.5,6.5,14.4,9.8,23.7,9.8c9.3,0,20.4-4,33.4-11.9V415.8z M5251.3,439.4c6.5-6.5,9.8-14.4,9.8-23.7v-21.5
		c-13-7.9-24.1-11.9-33.4-11.9c-9.3,0-17.2,3.3-23.7,9.8c-6.5,6.5-9.8,14.4-9.8,23.7c0,9.3,3.3,17.2,9.8,23.7
		c6.5,6.5,14.4,9.8,23.7,9.8C5236.9,449.2,5244.8,445.9,5251.3,439.4z M5261.1,470.6c-9.9,8-21,12-33.4,12
		c-18.4,0-34.2-6.5-47.3-19.5c-13-13.1-19.5-28.9-19.5-47.3c0-18.4,6.5-34.2,19.5-47.2c13.1-13.1,28.9-19.6,47.3-19.6
		s40.7,8.9,66.8,26.7v106.9h-33.4V470.6z"
              />
            </g>
          </svg>
        </Link>
        {/* MENU BUTTON */}
        <button>
          {!isMenuOpen ? (
            <svg
              version="1.1"
              id="menu_open"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 22.8 17.8"
              onClick={() => handleIsMenuOpen(!isMenuOpen)}
            >
              <path
                id="XMLID_1_"
                className="brand_white"
                d="M22.8,16.5c0,0.7-0.6,1.3-1.3,1.3l-20.3,0c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3l20.3,0
	C22.3,15.2,22.8,15.8,22.8,16.5z M21.6,7.6l-20.3,0C0.6,7.6,0,8.2,0,8.9s0.6,1.3,1.3,1.3l20.3,0c0.7,0,1.3-0.6,1.3-1.3
	S22.3,7.6,21.6,7.6z M21.6,0L1.3,0C0.6,0,0,0.6,0,1.3s0.6,1.3,1.3,1.3l20.3,0c0.7,0,1.3-0.6,1.3-1.3S22.3,0,21.6,0z"
              />
            </svg>
          ) : (
            <svg
              version="1.1"
              id="menu_close"
              x="0px"
              y="0px"
              viewBox="0 0 441.1 441.1"
              onClick={() => handleIsMenuOpen(!isMenuOpen)}
            >
              <path
                id="XMLID_212_"
                className="brand_white"
                d="M267.4,220.6l164-164c12.9-12.9,12.9-33.9,0-46.9s-33.9-12.9-46.9,0l-164,164l-164-164
	C43.6-3.2,22.6-3.2,9.7,9.7s-12.9,33.9,0,46.9l164,164l-164,164c-12.9,12.9-12.9,33.9,0,46.9c12.9,12.9,33.9,12.9,46.9,0l164-164
	l164,164c12.9,12.9,33.9,12.9,46.9,0c12.9-12.9,12.9-33.9,0-46.9L267.4,220.6z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="navigation">
        {isMenuOpen && (
          <div className="header_content">
            <ul>
              <li className="navigation_1 container box_shadow">
                <Link href={'/'}>
                  <h1 onClick={() => handleIsMenuOpen(false)}>home</h1>
                </Link>
              </li>
              <li className="navigation_2 container">
                <Link href={'/#inicio'}>
                  <h1 onClick={() => handleIsMenuOpen(false)}>início</h1>
                </Link>
              </li>
              <li className="navigation_2 container">
                <h1 onClick={() => handleIsMenuOpen(false)}>
                  como encontrar o seu rolê
                </h1>
              </li>
              <li className="navigation_2 container">
                <h1 onClick={() => handleIsMenuOpen(false)}>clientes</h1>
              </li>
              <li className="navigation_2 container">
                <h1 onClick={() => handleIsMenuOpen(false)}>depoimentos</h1>
              </li>
              <li className="navigation_2 container box_shadow">
                <h1 onClick={() => handleIsMenuOpen(false)}>apoiadores</h1>
              </li>
              <li className="navigation_1 container box_shadow">
                <Link href={'/seja-parceiro'}>
                  <h1 onClick={() => handleIsMenuOpen(false)}>seja parceiro</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="margin_top"></div>
    </div>
  )
}
