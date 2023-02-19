import './Nav.css'
import s4 from '../images/Trending Game.png'
import s5 from '../images/Notifications.png'
import s6 from '../images/Awards Game.png'
import s7 from '../images/User.png'
import s8 from '../images/search.png'

const Nav = () =>{
    return(
        <div className='navbar'>
            <div className='search'>
                <input type = "text" placeholder='Search game...' className='search-input'/>
                <img src={s8} className = 'search-img' />
            </div>
            <div className='menu'>
                <img src = {s4}/>
                <img src = {s5}/>
                <img src = {s6}/>
                <img src = {s7}/>
            </div>
        </div>
    )
}

export default Nav