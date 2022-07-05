import { Link } from 'react-router-dom'
import '../index.scss'

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src='/logo.png' alt='logo' />
        </Link>
    </div>
  )
}

export default Sidebar