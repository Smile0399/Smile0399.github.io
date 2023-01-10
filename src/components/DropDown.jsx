import { useState, useRef } from 'react'

const DropDown = ({ title, options }) => {
  const [open, setOpen] = useState(false)

  const menuToggler = useRef(null)

  const handleOpen = () => {
    setOpen(!open)
  }

  // Main Menu toggler
  const toggleMenu = e => {
    if (
      menuToggler.current &&
      open &&
      !menuToggler.current.contains(e.target)
    ) {
      handleOpen()
    }
  }

  // Click off dropdown closes dropdown
  document.addEventListener('click', toggleMenu)

  return (
    <div className='dropdown'>
      <div ref={menuToggler} onClick={handleOpen}>
        {title}{' '}
        <i className={`fa-solid fa-angle-down ${open ? 'rotate' : ''}`}></i>
      </div>
      {open ? (
        <ul className='menu'>
          {options.map(option => (
            <a className='dropdown-links' href={`/${option}`}>
              <li className='menu-item'>{option}</li>
            </a>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
export default DropDown
