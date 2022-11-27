import SearchBox from './components/SearchBox'
import Details from './components/Details'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { useState } from 'react'

const queryClient = new QueryClient()

function App() {
  const [parentSearchTerm, setParentSearchTerm] = useState('')
  console.log(parentSearchTerm)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchBox setParentSearchTerm={setParentSearchTerm} />
        <Details word={parentSearchTerm} />
      </div>
    </QueryClientProvider>
  )
}

export default App
