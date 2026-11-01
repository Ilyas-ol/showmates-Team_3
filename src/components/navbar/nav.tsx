
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
            <li className='white listelm'>About</li>
            <li className='white listelm'>Structure</li>
            <li className='white listelm'>What we do</li>
            <li className='white listelm'>Events & projects</li>
            <li className='white listelm'>Why join?</li>
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