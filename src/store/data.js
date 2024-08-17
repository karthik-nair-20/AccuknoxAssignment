import { atom } from "recoil";
import dashboardData from "./widgets.json"

// store complete json
export const dashboardState = atom({
  key: 'dashboardState',
  default: dashboardData
});

// store modelState
export const modelState = atom({
  key: 'modelState',
  default: false,
});

// store currentcategory
export const categoryState = atom({
  key: 'categoryState',
  default: '',
});

// store inputsVal
export const widgetValueState = atom({
  key: 'widgetValueState',
  default: {
    title: '',
    data: '',
  },
});
