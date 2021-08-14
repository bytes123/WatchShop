import React from 'react'
import HeroSection from '../HeroSection'
import FoodCategory from '../FoodCategory'
import AppPanel from '../AppPanel'
import MapContainer from '../MapContainer'
import Countries from '../Countries'
import SectionBrand from '../SectionBrand'
import {
  appIntroduction,
  SectionLookingFood,
  SectionBrandData,
  foodsData,
  categoryData,
  statusData,
  newFoodsData,
  CenterMapCountries,
  MapCountriesOnly,
} from './Data'
import { layoutGenerator } from 'react-break'

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 769,
  desktop: 992,
})

const OnMobile = layout.is('mobile')
const OnAtLeastTablet = layout.isAtLeast('tablet')
const OnAtMostPhablet = layout.isAtMost('phablet')
const OnDesktop = layout.is('desktop')

function Home() {
  const { iconApp, inforApp, iphoneInfo, androidInfo } = appIntroduction[0]
  return (
    <div className='app'>
      <div className='app_container'>
        <HeroSection list={SectionLookingFood} />

        {/* App Pannel on desktop */}
        <OnDesktop>
          <AppPanel
            classApp='center__app container-custom'
            iconApp={iconApp}
            inforApp={inforApp}
            iphoneInfo={iphoneInfo}
            androidInfo={androidInfo}
          />
        </OnDesktop>

        {/* App Pannel on tablet and mobile */}
        <OnAtMostPhablet>
          <AppPanel
            classApp='center__app container-custom'
            iconApp={iconApp}
            inforApp={inforApp}
            iphoneInfo={iphoneInfo}
            textApp='Get The App'
          />
        </OnAtMostPhablet>

        <SectionBrand data={SectionBrandData} />

        <MapContainer {...CenterMapCountries} />

        <Countries {...MapCountriesOnly} col='3' isPush={true} />
      </div>
    </div>
  )
}

export default Home
