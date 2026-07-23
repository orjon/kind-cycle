import { useTranslation } from "react-i18next"
// import { Link } from "react-router-dom"
import HeaderImage from "../components/HeaderImage"
import { path } from "../content"
// import { addLanguagePrefix } from "../utils"
import "../styles/pages/About.scss"

function About() {
  const { t } = useTranslation()

  return (
    <div className="About page">
      <div className="content-wrapper">
        <HeaderImage
          filename="kindCycle"
          path={path.logo}
          altText="KindCycle logo"
        />
        {/* <div className='title'>{t('sections.about.title')}</div> */}
        <div className="description">
          <p>{t("sections.about.description")}</p>
          <br />
          {/* <p>
            <Link to={addLanguagePrefix("/contact")} className="bold link">
              {t("sections.contact.title")}
            </Link>
          </p> */}
          <a href="mailto:kindcycle.uk@gmail.com" className="bold link center">
            kindcycle.uk@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
