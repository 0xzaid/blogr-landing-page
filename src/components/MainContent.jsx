import styles from "../styles/MainContent.module.css";
import Phones from "../assets/images/illustration-phones.svg"
import Navbar from "./Navbar"

const MainContent = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className={styles.headerInfo}>
          <h1>
            A modern publishing platform
          </h1>

          <p>Grow your audience and build your online brand</p>


          <div className={styles.headerBtns}>
            <div className={styles.btn1}>Start for Free</div>
            <div className={styles.btn2}>Learn more</div>
          </div>
        </div>


      </header>

      <section className={styles.section1}>
        <h1>Designed for the future</h1>


        <div className={styles.sectionInfo}>
          <h1>
            Introducing an extensible editor
          </h1>
          <p className={styles.sectionText}>
            Blogr features an exceedingly intuitive interface which lets you focus
            on one thing: creating content. The editor supports management of
            multiple blogs and allows easy manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide
            easy ways to add functionality or change the looks of a blog.
          </p>

          <h2>
            Robust content management
          </h2>
          <p className={styles.sectionText}>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality, you&apos;re in
            full control.
          </p>
        </div>



      </section>

      <section className={styles.section2}>
        <picture className={styles.phone}>
          <img className={styles.phoneImg} src={Phones} alt="Phones"></img>
        </picture>
        <div className={styles.section2Info}>
          <h1>
            State of the Art Infrastructure
          </h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.section3Info}>
          <div className={styles.section3Text}>
            <h1>
              Free, open, simple
            </h1>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>


            <h1>
              Powerful tooling
            </h1>
            <p>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainContent;











