import './Myskils.css'
import html from './HTML.png'
import Css from './CSS.png'
import btsrp from './BootStrap.png'
import java from './Javascript.png'
import react from './React.png'


function MySkills() {
  return (
    <div className="Skills">

        <div className="Myskills">
            <hr />

            <h1>My <span>Skills</span></h1>

        <div className="img">
            <img src={html} width={60} alt="" />HTML
            <progress value={80} max={100} style={{width:"60vw", background:"#fafafa", height:"1vh"}}></progress>
            <img src={Css} width={70} alt="" />CSS
            <progress value={70} max={100} style={{width:"60vw", background:"#fafafa", height:"1vh"}}></progress>
            <img src={btsrp} width={60} alt="" />BootStrap
            <progress value={75} max={100} style={{width:"60vw", background:"#fafafa", height:"1vh"}}></progress>
            <img src={java} width={60} alt="" />JavaScript
            <progress value={50} max={100} style={{width:"60vw", background:"#fafafa", height:"1vh"}}></progress>
            <img src={react} className='react' width={60} alt="" />React JS
            <progress value={30} max={100} style={{width:"60vw", background:"#fafafa", height:"1vh"}}></progress>

            </div>   
        </div>



           </div>

        
      
    
  )
}

export default MySkills
