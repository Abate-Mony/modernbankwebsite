
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
const Navbar = () => {
  window.onclick = function () {
    if (toggleMenu) setToggleMenu(false)

  }

  const Menu = () => (<>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibilty">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>)

  const Sign = _class => (
    <div className={_class}>
      <p>Sign in</p>
      <button type='button'>
        Sign up
      </button>
    </div>

  )


  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar ' >

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>

      </div>

      {Sign("gpt3__navbar-sign")}
      <div className="gpt3__navbar-menu">
        {toggleMenu ?

          <RiCloseLine color='red'
            size={27} onClick={() => { setToggleMenu(false) }} />
          : <RiMenu3Line color='#fff' size={27} className="scale-up-center"
            onClick={e => [setToggleMenu(true), e.stopPropagation()]} />}
        {toggleMenu && <div
          className='gpt3__navbar-menu_container scale-up-center' onClick={e=>e.stopPropagation()}>
          <Menu />
          <div className="gtp3__navbar-menu_containers-links" >
            {Sign("gpt3__navbar-menu_container-links-sign")}
          </div>
        </div>}
      </div>


    </div>
  )
}

export default Navbar