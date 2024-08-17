import "./App.css";
import AddWidget from "./components/AddWidget";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, dashboardState, modelState, widgetValueState } from "./store/data";
import { nanoid } from "nanoid";
import ShowWidget from "./components/ShowWidget";

function App() {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const setShowModal = useSetRecoilState(modelState);
  const [currentCategory, setcurrentCategory] = useRecoilState(categoryState);
  const inputValues = useRecoilValue(widgetValueState);

  const openModal = (key) => {
    setcurrentCategory(key); //btnclick to save
    setShowModal(true);
  };

  function addWidget() {
    if (inputValues.title && inputValues.data && currentCategory) {
      const newWidget = {
        id: nanoid(),
        name: inputValues.title,
        data: inputValues.data
      };
      const updatedDashboard = {
        ...dashboard,
        [currentCategory]: {
          ...dashboard[currentCategory],
          widgets: [...dashboard[currentCategory].widgets, newWidget],
        },
      };
      setDashboard(updatedDashboard);
      setShowModal(false);
    }
  }


  return (
    <div className="main">
      <AddWidget onSave={addWidget} />
      {Object.keys(dashboard).map((categoryKey) => {
        const category = dashboard[categoryKey];
        return (
          <div key={categoryKey} className="container">
            <h2 className="title">{category.title}</h2>
            <div className="widgets-container">
              <ShowWidget category={category} />
              <button className="btn" onClick={() => openModal(categoryKey)}>
                Add Widget
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
