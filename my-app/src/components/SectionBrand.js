import React from 'react'
import { Link } from 'react-router-dom'
import './SectionBrand.css'

function SectionBrand({ data }) {
  return (
    <section className='section__brand container-custom'>
      <div className='section__brand-list row'>
        {data.map((item, index) => {
          const { image, titleItem, label, link } = item

          return (
            <div className='section__brand-item col-12 col-md-4 col-xl-4 '>
              <Link to={link} className='section__brand-link'>
                <img
                  src={image}
                  alt={titleItem}
                  className='section__brand-img'
                />
                <p className='section__brand-header'>{titleItem}</p>
                <p className='section__brand-label'>{label}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionBrand
