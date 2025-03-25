

import './App.css'
import { ModeButton } from './components/Ui/ModeButton/ModeButton'
import { LikeDislike } from './components/Ui/LikeDislike/LikeDislike'
import { GenerateColor } from './components/Ui/GenerateColor/GenerateColor'
import {Time} from './components/Ui/Time/Time'

function App() {  

  return (
    <>

      <main>
       
        <ModeButton></ModeButton>
        <LikeDislike></LikeDislike>
        <GenerateColor></GenerateColor>
        <Time></Time>
        <div className="container"></div>
      </main>
     
    </>
  )
}

export default App
