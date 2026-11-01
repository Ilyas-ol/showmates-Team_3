
import './nav.css'

function  Navbar() {


  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <img src="/Group.png" alt="" />
          <h3 className='white logotext'>SHELLMATES</h3>
        </div>

        <ul className='list'>
            <li className='white listwheight'>About</li>
            <li className='white '>Structure</li>
            <li className='white'>What we do</li>
            <li className='white'>Events & projects</li>
            <li className='white'>Why join?</li>
        </ul>

        <div className='joinbtn'>
          <p>Join us</p>
          <img src="fleche.png" alt="" />
        </div>
      </nav>
    </>
  )
}

export default Navbar