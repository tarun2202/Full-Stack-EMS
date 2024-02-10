import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeeComponent from './components/ListEmployeeeComponent'
import { BrowserRouter, Routes , Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        
          {/* //http://localhost:3000 */}
          <Route path = '/' element = {<ListEmployeeeComponent />}></Route>

          {/* //http:localhost:8080/employees */}
          <Route path = '/employees' element = {<ListEmployeeeComponent />}></Route>
        
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
      
    </>
  )
}

export default App
