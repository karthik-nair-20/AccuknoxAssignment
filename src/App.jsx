import './App.css'
// We are building a basics crud operation thing where
// we can Add, delete, update,edit
// json thing which contains widget, each widget has name, description, nanoid.
// btn to add new widget
import React from 'react'
import { nanoid } from 'nanoid'

import initialWidgets from './store/widgets.json'

function App() {

  const [dashboard, setDashboard] = React.useState(initialWidgets)

  const renderWidgets = (widgets) => {
    return widgets.map((widget) => (
      <div key={widget.id}>
        <h3>{widget.name}</h3>
        <p>{widget.data}</p>
        </div>
    ))
  }

  const addNewWidget = (id) => {
    const newWidget = {
      id: nanoid(),
      name: 'New Widget',
      data: 'Random text for the new widget'
    };
    
    setDashboard((prevData) => ({
      ...prevData,
      categories: prevData.categories.map(category => 
        category.id === id ? 
        {...category, widgets:[...category.widgets,newWidget]} :
        category
      )
    }))
  }

  return (
    <div className='main'>
      <div>
      {dashboard.categories.map(category => (
        <div key={category.id} style={{ marginBottom: '20px' }}>
          <h2>{category.name}</h2>
          <div style={{ paddingLeft: '20px' }}>
            {renderWidgets(category.widgets)}
          </div>
          <button onClick={() => addNewWidget(category.id)}>
            Add Widget
          </button>
        </div>
      ))}
    </div>
    </div>
  )
}


export default App
