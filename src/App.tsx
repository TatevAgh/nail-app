import './App.css'
import { Header } from './components/header/Header.tsx';
import { MainContent } from './components/landing-page/main-content/Main-content.tsx';

function App() {

  return (
    <>
        <Header />
        <MainContent/>
        <div className="Footer">Footer</div>
    </>
  )
}

export default App
