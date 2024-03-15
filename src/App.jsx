import './App.css'
import { Header } from './components/Header'
import {Head} from "./components/Head"
import { Services } from './components/services'
import { Main } from './components/main'



function App() {
 

  return (
    <>
    <Header/>
    <main>
      <Head/>
      <Services/>
      <Main/>
    </main>
    </>
  )
}

export default App
