import About from './About'
import './Hero.css'
import 'remixicon/fonts/remixicon.css'
function Hero() {
  return (
    <div className="main">


    <div className="nav">
        <h1>PortFolio</h1>
        
        <div className="list">
        <ul>
            <a href=""><li>HOME</li></a>
            <a href="" ><li>ABOUT</li></a>
            <a href=""><li>RESUME</li></a>
            <a href=""><li>BLOG</li></a>
            <a href=""><li>CONTACT</li></a>
        </ul>
        </div>
        <i class="ri-menu-3-line"></i>  
    </div>

    <div className="Typing">
        <h1>Hello, I'm <span>Afzan Iftikhar</span></h1>
        <p>A Web Developer Actively Looking For A New Position.I Love To explore Technologies And Always try To Enhance My Skills,By Developing New Projects.</p>
        <button><a href="">MORE ON ME </a></button>
    </div>
     


    </div>
  )
}

export default Hero
