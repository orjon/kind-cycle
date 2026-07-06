import { useTranslation } from "react-i18next"
import HeaderImage from "../components/HeaderImage"
import { SafeHtml } from "../components/SafeHtml"
import { useNavState } from "../nav/NavStateContext"
import { path } from "../content"

import "../styles/pages/WasteNot.scss"

const WasteNot = () => {
  const { t } = useTranslation()
  const { isLocationSelectorOpen, openLocationsMenu } = useNavState()

  return (
    <div className="WasteNot page">
      <div className="content-wrapper">
        <HeaderImage filename="wasteNot" path={path.headers} altText="" />
        <div className="title">{t("sections.wasteNot.title")}</div>
        <div
          className={`description ${isLocationSelectorOpen ? "disabled" : ""}`}
          onClick={(e) =>
            (e.target as HTMLElement).closest(".openLocations") &&
            openLocationsMenu()
          }
        >
          <SafeHtml html={t("sections.wasteNot.description")} />
        </div>
      </div>
    </div>
  )
}

export default WasteNot
