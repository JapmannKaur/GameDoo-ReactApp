import './Top.css'
import s9 from '../images/rocket.png'
import s10 from '../images/diamond.png'
const Top = () =>{
    return(
        <div className="contain">
            <div className='texts'>
                <div className='desc'> 
                3D Game Assets Store & Free
                </div>
                <div className='heading'>
                High-quality premium & free 3D-game assets.
                </div>
                <button className='btn'><img src = {s10} className='diamond'/><span className='btn-text'>Download Assests</span></button>
            </div>
            <div className='rocket'>
                <img src={s9} className='udtarocket'/>
            </div>
        </div>
    )
}

export default Top