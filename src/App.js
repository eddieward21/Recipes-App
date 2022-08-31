import Home from './pages/Home'
import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import Category from './components/Category'
function App() {
  return (
    <div className = "App">

      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>

    </div>
  )
}

export default App;
