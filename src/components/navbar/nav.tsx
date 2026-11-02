
import './nav.css'

function  Navbar() {


  return (
    <>
      <nav className='nav'>
        <a className='logo' href="#home">
          <img src="/Group.png" alt="" />
          <h3 className='white logotext'>SHELLMATES</h3>
        </a>

        <ul className='list'>
            <li><a className='white listelm' href="#about">About</a></li>
            <li><a className='white listelm' href="#p3-structure">Structure</a></li>
            <li><a className='white listelm' href="#p4-what">What we do</a></li>
            <li><a className='white listelm' href="#events">Events &amp; projects</a></li>
            <li><a className='white listelm' href="#why-join">Why join?</a></li>
        </ul>

        <a className='joinbtn' href="#join">
          <p style={{ color: "#000000" }}>Join us</p>
          <img src="/fleche.png" alt="" />
        </a>
      </nav>
    </>
  )
}

export default Navbar