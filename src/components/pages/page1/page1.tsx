
import './page1.css'

function  Page1() {


  return (
    <>
      <section className='page1'>
        <div className='container '>
          <p className='green'>$ whoami</p>
          <div className='bigdiv'>
              <h1 className='bigtext'>SHELLMATES CLUB</h1>
          </div>

          <div className='typing'>
              <h1 className='white'>Learn. Build. Compete. Connect.</h1>
          </div>

          <div className='btncontainer'>
              <div className='p1btn1'>
                <p style={{ color: "#000000" }}>Join the Club</p>
                <img src="fleche.png" alt="" />
              </div>

              <div className='p1btn2'>
                <p>Explore Events</p>
                <img src="flecheBL.png" alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page1