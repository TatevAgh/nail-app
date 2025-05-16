import './App.css'
import { Header } from './components/header/Header.tsx';
import { Footer } from './components/footer/Footer.tsx';
// import { MainContent } from './components/guest-page/main-content/Main-content.tsx';
import MainPage from './components/main-page/Main-page.tsx';

function App() {

  return (
    <>

        <Header/>
        <MainPage/>
        {/*<MainContent/>*/}
        <Footer/>
    </>
  )
}

export default App
