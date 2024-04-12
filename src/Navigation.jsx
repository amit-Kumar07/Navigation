import React, {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import './styles/Navigation.css'
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
          <IoIosMenu />
        </button>
        <ul className={`menu ${isOpen ? 'open': ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
    </div>
  )
}

export default Navigation