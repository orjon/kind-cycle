import { useTranslation } from "react-i18next"
import HeaderImage from "../components/HeaderImage"
import { SafeHtml } from "../components/SafeHtml"
import { useNavState } from "../nav/NavStateContext"
import { path } from "../content"

import "../styles/pages/RecycleYourElectricals.scss"

const RecycleYourElectricals = () => {
  const { t } = useTranslation()
  const { isLocationSelectorOpen, openLocationsMenu } = useNavState()

  return (
    <div className="RecycleYourElectricals page">
      <div className="content-wrapper">
        <HeaderImage
          filename="recycleYourElectricals"
          path={path.headers}
          altText=""
        />
        <div className="title">
          <span className="title-text">
            {t("sections.recycleYourElectricals.title")}
          </span>
        </div>
        <div
          className={`description ${isLocationSelectorOpen ? "disabled" : ""}`}
          onClick={(e) =>
            (e.target as HTMLElement).closest(".openLocations") &&
            openLocationsMenu()
          }
        >
          <SafeHtml html={t("sections.recycleYourElectricals.description")} />
        </div>
      </div>
    </div>
  )
}

export default RecycleYourElectricals
