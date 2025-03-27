import './App.css'
import { Header } from './components/Header.tsx';
import { MainContent } from './components/Main-content.tsx';

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
