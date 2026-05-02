import type { Portfolio } from './types'
import portfolioData from './data/portfolio.json'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/home/Hero'

function App() {
  const data: Portfolio = portfolioData as Portfolio

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <Navbar header={data.header} />
      
      <main className="flex-1">
        <Hero 
          home={data.home} 
          name={data.header.name} 
          email={data.header.email}
        />
      </main>

      <Footer footer={data.footer} header={data.header} />
    </div>
  )
}

export default App