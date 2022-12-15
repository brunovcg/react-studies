import Routing from './routes'
import Header from './components/header'
import Main from './styles'
import { HeaderProvider } from './providers'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <HeaderProvider>
        <Header />
        <Main>
          <Routing />
        </Main>
      </HeaderProvider>
         <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
     </QueryClientProvider>
    </div>
  
  )
}

export default App
