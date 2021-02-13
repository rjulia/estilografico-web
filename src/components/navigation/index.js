import React from 'react'
import { useHistory } from 'react-router-dom';
import ButtonNavigation from '../button-navigation'
import { ReactComponent as Squares } from '../../assets/icons/squares.svg';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg';
import './navigation.scss'

const NavigationService = () => {
  let history = useHistory();;

  const goToBack = () => {
    history.goBack()
  }
  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  const goToServcies = () => {
    window.scrollTo(0, 0)
    history.push('/servicios')
  }
  return (
    <div className="container-navigation-services">
      <ul className="list-navigation-services">
        <li>
          <ButtonNavigation
          icon={ArrowUp}
          title="VOLVER"
          onClick={goToBack}/>
        </li>
        <li>
          <ButtonNavigation
            icon={Squares}
            title="MENÚ"
            onClick={goToServcies}/>
        </li>
        <li>
          <ButtonNavigation
            icon={ArrowUp}
            title="SUBIR"
            onClick={goToTop}/>
        </li>
      </ul>
    </div>
  )
}

export default NavigationService
