
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import {Provider} from 'react-redux'
import { store } from './service/store'
import { Filter } from './components/Filter'


function App() {

  return (
    <div className="App flex flex-col items-center">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Filter/>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
