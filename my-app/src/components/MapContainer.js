import React from 'react'
import './MapContainer.css'
import { Link } from 'react-router-dom'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import Countries from './Countries'
import { MapCountries } from './pages/Data'
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

const containerStyle = {
  width: '100%',
  height: '360px',
  backgroundColor: '#F6F6F6',
}

const center = {
  lat: 37.09024,
  lng: -95.712891,
}

const options = {
  draggable: false,
  fullscreenControl: false,
  zoomControl: false,
}

function MapContainer({ header, label }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDh9a7OdIyDLmNfhvhZkxcJS1UKLKhixA8',
  })

  return (
    <section className='map__wrapper container-custom'>
      <div className='map__heading flex-between'>
        <h2 className='map__header section__heading'>{header}</h2>
        <OnDesktop>
          <Link to='/location' className='map__more section__more'>
            {label}
          </Link>
        </OnDesktop>
      </div>
      <div className='map space-y'>
        {isLoaded ? (
          <>
            <OnDesktop>
              <GoogleMap
                options={options}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4.3}
              ></GoogleMap>
            </OnDesktop>
            <OnAtMostPhablet>
              <GoogleMap
                options={options}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={3}
              ></GoogleMap>
            </OnAtMostPhablet>
          </>
        ) : (
          <></>
        )}
      </div>
      <Countries {...MapCountries} col='3' isPush={false} />
      <OnAtMostPhablet>
        <Link to='/location' className='map__more section__more'>
          {label}
        </Link>
      </OnAtMostPhablet>
    </section>
  )
}
export default React.memo(MapContainer)
