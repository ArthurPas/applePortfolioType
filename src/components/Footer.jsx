import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Infos on my university studies {' '}
            <span className="underline text-blue">
              <a href="https://www.iut.u-bordeaux.fr/info/">IUT info</a>
            </span>
            {' '} and for epitech school {' '}
            <span className="underline text-blue">
              <a href="https://www.epitech.eu/formation-alternance/master-of-science-post-bac3/">msc pro</a>
            </span>{' '}
            @Bordeaux
          </p>
          <p className="font-semibold text-gray text-xs">
            For more information feel free to send an email i generaly answer fast !
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

      </div>
    </footer>
  )
}

export default Footer