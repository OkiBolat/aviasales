import React from "react";
import './Header.scss'

function Header () {
  return (
    <div className="header">
          <button className='header__button'>Самый дешевый</button>
          <button className='header__button'>Самый быстрый</button>
          <button className='header__button'>Оптимальный</button>
        </div>
  )
}

export default Header;