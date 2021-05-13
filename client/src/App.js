import 'materialize-css'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes(true)
  return (
    <BrowserRouter>
      <div className="container">
        {routes}
      </div>
    </BrowserRouter>
  )
}

export default App;
