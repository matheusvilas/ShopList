import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import MainContainer from './containers/main'


const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
}
