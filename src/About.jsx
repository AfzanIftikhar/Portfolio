import './About.css'
import img from './pic2.png'


function About() {
  return (
    <div className='About'>
        <div className="pic">
            <img src={img} alt=""  />
        </div>
        <div className="aboutme">

            <hr />
            <h2>About <span>Me</span></h2>
            <p>I am a passionate Front-end Web Developer and I interested to study  and tackle complex problems. Currently i am doing My Bachelors Degree in<strong> Computer Sciences</strong> from <strong>Agriculture University Peshawar</strong>. My technical and management skills which will use to support the growth of the organization as well as myself.</p>
            <button className='btn1'><a href="">HIRE ME</a></button>
            

        </div>
    </div>
      
  )
}

export default About
