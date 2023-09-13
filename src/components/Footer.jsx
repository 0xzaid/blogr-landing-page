import logo from '../assets/images/logo.svg';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer>
        <img className={styles.footerLogo} src={logo} alt="Logo" />
        <div>
          <p className={styles.listHeading}>Product</p>
          <ul className={styles.footerItems}>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <p className={styles.listHeading}>Company</p>
          <ul className={styles.footerItems}>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className={styles.listHeading}>Connect</p>
          <ul className={styles.footerItems}>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;