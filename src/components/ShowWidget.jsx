import { FaTimes } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil"
import { categoryState, dashboardState } from "../store/data"

export default function ShowWidget({ category }) {

  const currentCategory = useRecoilValue(categoryState)
  const [dashboard, setDashboard] = useRecoilState(dashboardState)
  /*
  The below fnc have a Bug, since i am using currentCategory to remove i cant remove widgets, 
  from other category. This need a fix.
  */
  function removeWidgets(categoryKey,widgetId) {
    console.log("Current Category:", currentCategory); 
    if (currentCategory) {
      const updatedDashboard = {
        ...dashboard,
        [currentCategory]: {
          ...dashboard[currentCategory],
          widgets: dashboard[currentCategory].widgets.filter(widget => widget.id !== widgetId),
        },
      };
      setDashboard(updatedDashboard);
    }
  }

  return category.widgets.map((widget) => (
    <div key={widget.id} className="widget-container">
      <FaTimes
        className="remove-icon"
        onClick={() => removeWidgets(category.key,widget.id)}
      />
      <h3 className="widget-title">{widget.name}</h3>
      <p className="widget-data">{widget.data}</p>
    </div>
  ));
}