
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import {Provider} from 'react-redux'
import { store } from './service/store'
import { Table } from './components/Table'
import { VerifyFilter } from './components/VerifyFilter'


function App() {

  return (
    <div className="App flex flex-col items-center">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <VerifyFilter/>
          <Table/>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
