import './App.css'
import { Header } from './components/Header'
import {Head} from "./components/Head"
import { Services } from './components/services'
import { Main } from './components/main'
import { Order } from './components/order'



function App() {
 

  return (
    <>
    <Header/>
    <main>
      <Head/>
      <Services/>
      <Order/>
    </main>
    </>
  )
}

export default App
