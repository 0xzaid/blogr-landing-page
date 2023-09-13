/* eslint-disable react/prop-types */
import { useState } from "react"

import '../styles/global.css';
import styles from '../styles/DropDown.module.css';

import iconArrowLight from '../assets/images/icon-arrow-light.svg';
import iconArrowDark from '../assets/images/icon-arrow-dark.svg';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(mode => !mode)
  }
  const elements = props.elements.map(el => {
    return (
      <div className={styles.element} key={el.id}>
        <p className={styles.elementName}>{el.name}</p>
      </div>)
  })

  return (
    <>
      <div className={styles.container}>

        <div className={styles.dropdown}>
          <div className={styles.title} onClick={toggle}>
            <p>{props.title}</p>
          </div>

          <picture>
            <source srcSet={iconArrowDark} media="(max-width: 950px)" />
            <img
              src={iconArrowLight}
              className={`${styles.dropdownIcon} ${isOpen ? styles.opened : ""}`}
              alt='Arrow icon'
            />
          </picture>
        </div>

        <div>
          {isOpen && <div className={`${styles.dropdownItems} ${props.title.toLowerCase()}`}>
            {elements}
          </div>}
        </div>
      </div>
    </>
  )
}
export default DropDown;
