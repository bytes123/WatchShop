import React from 'react'
import './AppPanel.css'
import Button from './Button'

function AppPanel({
  iconApp,
  inforApp,
  iphoneInfo,
  androidInfo,
  classApp,
  classHeader,
  classAppBtn,
  textApp,
}) {
  return (
    <section
      className={`${classApp ? `app__panel ${classApp}` : 'app__panel'}`}
    >
      <div className='app__info'>
        <img src={iconApp} alt={inforApp} className='app__icon' />
        <span
          className={`${
            classHeader ? `app__text ${classHeader}` : 'app__text'
          }`}
        >
          {inforApp}
        </span>
      </div>
      <div
        className={`${
          classAppBtn ? `app__btn-wrapper ${classAppBtn}` : 'app__btn-wrapper'
        }`}
      >
        {iphoneInfo
          ? iphoneInfo.map((item, index) => {
              return (
                <Button
                  text={textApp ?? item.iphoneName}
                  iconBtn={item.iphoneIcon}
                  btnSize='btn-medium'
                  btnClass='iphone__icon-btn'
                  key={index}
                />
              )
            })
          : ''}
        {androidInfo
          ? androidInfo.map((item, index) => {
              return (
                <Button
                  text={item.androidName}
                  iconBtn={item.androidIcon}
                  btnSize='btn-medium'
                  btnClass='android__icon-btn'
                  key={index}
                />
              )
            })
          : ''}
      </div>
    </section>
  )
}

export default AppPanel
