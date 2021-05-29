import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import App from "./App.js"

import noteReducer from "./reducers/noteReducer"
import filterReducer from "./reducers/filterReducer"
import { createNote } from "./reducers/noteReducer"
import { filterChange } from "./reducers/filterReducer"
import "./index.css"

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools())
console.log(store.getState())

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange("IMPORTANT"))
store.dispatch(createNote("combineReducers forms one reducer from many simple reducers"))

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
)

