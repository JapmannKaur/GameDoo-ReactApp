import './Sidebar.css' 
import s1 from '../images/Logo.png'
import s2 from '../images/Pages.png'
import s3 from '../images/signout.png'
const Sidebar = () =>{
    return(
        <div className="side">
            <div className='logoimg'>
                <img src = {s1} />
            </div>
            <div className='dash'>
                <img src = {s2} className='mydash' />
            </div>
            <div className='sign'>
                <img src = {s3} className='signimg' />
                <button className='logs'>Log Out</button>
            </div>
        </div>
    )
}

export default Sidebar