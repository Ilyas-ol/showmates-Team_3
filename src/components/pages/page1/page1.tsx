
import './page1.css'

function  Page1() {


  return (
    <>
      <section className='page1' id="home">
        <div className='container '>
          <p className='green'>$ whoami</p>
          <div className='bigdiv'>
              <h1 className='bigtext'>SHELLMATES CLUB</h1>
          </div>

          <div className='typing'>
              <h1 className='white'>Learn. Build. Compete. Connect.</h1>
          </div>

          <div className='btncontainer'>
              <a className='p1btn1' href="#join">
                <p style={{ color: "#000000" }}>Join the Club</p>
                <img src="/fleche.png" alt="" />
              </a>

              <a className='p1btn2' href="#events">
                <p>Explore Events</p>
                <img src="/flecheBL.png" alt="" />
              </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page1