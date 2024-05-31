import './index.css'
import AppRouter from './AppRouter'
import { PokemonProvider } from './Context/PokemonProvider.jsx'

function App() {


  return (
    <>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </>
  )
}

export default App
