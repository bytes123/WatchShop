import React from 'react'
import { Link } from 'react-router-dom'
import { appIntroduction, asideList } from './pages/Data'
import './Asidebar.css'
import Button from './Button'
import AppPanel from './AppPanel'
import { layoutGenerator } from 'react-break'
import {
  AiFillApple,
  AiFillAndroid,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
})

const OnMobile = layout.is('mobile')
const OnAtLeastTablet = layout.isAtLeast('tablet')
const OnAtMostPhablet = layout.isAtMost('phablet')
const OnDesktop = layout.is('desktop')

function Asidebar({ display, handleCloseAsidebar }) {
  const { iconApp, inforApp, iphoneInfo, androidInfo } = appIntroduction[0]
  return (
    <div
      className={`overlay ${display ? 'open' : ''}`}
      onClick={handleCloseAsidebar}
    >
      <aside className={`asidebar ${display ? 'showoff' : ''}`}>
        <div className='asiderbar__container'>
          <div className='asiderbar__header'>
            <Button
              text='Sign in'
              btnSize='btn-large'
              btnClass='aside__btn'
              link='/login'
            />
            <ul className='asidebar__list'>
              {asideList.map((item, index) => {
                return (
                  <li className='asidebar__item' key={index}>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='asidebar__footer'>
            <OnDesktop>
              <AppPanel
                iconApp={iconApp}
                inforApp={inforApp}
                iphoneInfo={iphoneInfo}
                androidInfo={androidInfo}
              />
            </OnDesktop>
            <OnAtMostPhablet>
              <AppPanel
                iconApp={iconApp}
                inforApp={inforApp}
                iphoneInfo={iphoneInfo}
                textApp='Get The App'
              />
            </OnAtMostPhablet>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Asidebar
