import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { navigate } from 'gatsby'

import styles from './menu.module.css'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const icon = menuIsOpen ? faTimes : faBars

  const menu = (
    <nav className={styles.links}>
      <button
        onClick={() => {
          navigate('/#community')
        }}
      >
        Community
      </button>
      <button
        onClick={() => {
          navigate('/#conference')
        }}
      >
        Conference
      </button>
      <button
        onClick={() => {
          navigate('/#own-your-expertise')
        }}
      >
        Own Your Expertise
      </button>
      <button
        onClick={() => {
          navigate('/#chapters')
        }}
      >
        Chapters
      </button>
      <button
        onClick={() => {
          navigate('/#sponsorship')
        }}
      >
        Sponsorship
      </button>
    </nav>
  )

  return (
    <div>
      <div className={styles.large}>{menu}</div>
      <div className={styles.small}>
        <FontAwesomeIcon
          icon={icon}
          className={styles.menuButton}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        {menuIsOpen && menu}
      </div>
    </div>
  )
}

export default Menu
