import React from 'react'
import { Link } from 'react-router-dom'
function Countries({ countries, header, col, isPush }) {
  return (
    <section className={`map__countries ${isPush ? 'container-custom' : ''}`}>
      {header ? (
        <h2 className='map__countries-header section__heading'>{header}</h2>
      ) : (
        <></>
      )}
      <ul className='map__countries-list'>
        {countries.map((country, index) => {
          return (
            <li className={`map__country col-xl-${col} col-6`} key={index}>
              <Link className='map__country-link' to={`./city/${country.id}`}>
                {country.country}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Countries
