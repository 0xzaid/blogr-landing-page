import { useState } from "react";

import '../styles/global.css';
import styles from '../styles/NavBar.module.css';

import DropDown from './DropDown';
import logo from '../assets/images/logo.svg';
import HamBurger from '../assets/images/icon-hamburger.svg';
import Close from '../assets/images/icon-close.svg'

const ProductItems = [
  {
    id: 0,
    name: "Overview"
  },
  {
    id: 1,
    name: "Pricing"
  },
  {
    id: 2,
    name: "Marketplace"
  },
  {
    id: 3,
    name: "Features"
  },
  {
    id: 4,
    name: "Integrations"
  }
]
const CompanyItems = [
  {
    id: 0,
    name: "About"
  },
  {
    id: 1,
    name: "Team"
  },
  {
    id: 2,
    name: "Blog"
  },
  {
    id: 3,
    name: "Careers"
  }
]
const ConnectItems = [
  {
    id: 0,
    name: "Contact"
  },
  {
    id: 1,
    name: "Newsletter"
  },
  {
    id: 2,
    name: "LinkedIn"
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(mode => !mode)
  }


  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.navLogo} src={logo} alt="Logo" />
        <img className={styles.menuBtn} src={isOpen ? Close : HamBurger} onClick={toggle} alt="Menu Button"></img>
        <div className={`${styles.navItems} ${isOpen ? styles.opened : ""}`}>

          <DropDown title='Product' elements={ProductItems} className={styles.dropDown} />
          <DropDown title='Company' elements={CompanyItems} className={styles.dropDown} />
          <DropDown title='Connect' elements={ConnectItems} className={styles.dropDown} />
          <div className={styles.divider}></div>
          <div className={styles.headerBtns}>
            <div className={styles.loginBtn}>Login</div>
            <div className={styles.signupBtn}>Sign Up</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
