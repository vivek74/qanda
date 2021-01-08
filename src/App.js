import { Router } from "@reach/router"
import Layout from './components/Layout'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Result path='/result' />
      </Router>
    </Layout>
  );
}

export default App;
