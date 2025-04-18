import './App.css'
import { Header } from './components/header/Header.tsx';
import { MainContent } from './components/landing-page/main-content/Main-content.tsx';
import { Footer } from './components/footer/Footer.tsx';

function App() {

  return (
    <>
        <Header />
        <MainContent/>
        <Footer/>
    </>
  )
}

export default App
