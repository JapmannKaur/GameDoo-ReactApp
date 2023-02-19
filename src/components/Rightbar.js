import './Rightbar.css'
import s11 from '../images/thumbnail.png'
import s12 from '../images/heart.png'
import s13 from '../images/Fill 4.png'
import s14 from '../images/Star Rate.png'
import s15 from '../images/Awards.png'

const Rightbar = () =>{
    return(
        <div className="rights">
            <div className='game1'>
                <img src = {s11} className='thumb'/>
            </div>
            <div className='t1'>
                <div className='title'>
                    Nocturnal
                </div>
                <div className='like'>
                    <img src = {s12} className='heart'/>
                    <p className='white'>232</p>
                    <img src = {s13} className='dwnld'/>
                    <p className='white'>14.6k</p>
                </div>
            </div>
            <div className='desc1'>
                <div className='key-text'>
                KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                </div>
                <div className='key-text'>
                KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                </div>
                <div className='key-text'>
                KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                </div>
                <div className='key-text'>
                KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                </div>
                <div className='key-text'>
                KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…
                </div>
            </div>
            <div className='foot'>
                <img src = {s14} className='i1'/>
                <img src = {s15} className='i2'/>
            </div>
        </div>
    )
}

export default Rightbar