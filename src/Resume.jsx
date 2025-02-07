import './Resume.css'

function Resume() {
  return (
    <div className='Parent'>

        <div className="header">
        <hr />
        <h2>My <span>Resume</span></h2>
        </div>

        <div className="section">
        <div className="Education">
            <h1>EDUCATION</h1>
            <hr />
            <div className="Matric">
                <h2>Matriculation</h2>
                <p>I have Done My Matriculation From Pamir School And College Matta Swat.
                    I have Secured 86% In matric.
                </p>
            </div>
            <div className="Fsc">
                <h2>INTERMEDIATE</h2>
                <p>I have done my F.S.C from Afzal Khan Lala Degree College Matta Swat.
                    i secured 76% in F.S.C (Pre-Medical).
                </p>
            </div>
            <div className="bachelors">
                <h2>BACHELORS</h2>
                <p>Currently I am Doing My Bachelors Degree in Computer Sciences from Agriculture University Peshawar. currently I am in 4th Semester in Computer Science Department</p>
            </div>

        </div>
        <div className="Experience">
            <h1>EXPERIENCE</h1>
            <hr />
            <div className="SMIT">
                <h1>Learning Stage</h1>
            <p>I am Currently learning Web Development From SEYLANI MASS AND HUMA IT TRAINING. I have made Some Project but it's not a Real-Time Project.</p>
            </div>
        <div className="footer">
            <hr />
            <h1>Contact Me</h1>

            <input type="text" placeholder='Your Name' name="" id="" />
            <input type="email" placeholder='Your Email' name="" id="" />
            <input type="number" placeholder='Your Phone' name="" id="" />
            <input type="text" placeholder='Write a Message' name="" id="" />
            <button>Send Message</button>

        <hr />
        <h1>Get In Touch</h1>
        <div className="contact">

        <i class="ri-mail-line"></i> <h3>Aafzan95@gmail.com</h3>
        <i class="ri-phone-line"></i> <h3>+923258644231</h3>
        </div>


        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Resume
