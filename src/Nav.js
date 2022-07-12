import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                handleShow(true);
            } else handleShow(false);
        });
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
            className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
        />
        <img
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Account.svg/640px-Microsoft_Account.svg.png"
            alt="Avatar Logo" 
         />

    </div>
  )
}

export default Nav