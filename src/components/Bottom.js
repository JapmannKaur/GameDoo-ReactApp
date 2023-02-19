import './Bottom.css'
import s16 from '../images/Path.png'
import Game from './Game.js'
import Game2 from './Game2.js'

const Bottom = () =>{
    return(
        <div className='final'>
            <div className='pop'>
                Popular Games
                <img src={s16} className='arrow'/>
            </div>
            <div className='games'>
                <Game2 />
                <Game />
                <Game />
                <Game />
                <Game />
                <Game />
            </div>
        </div>
    )
}

export default Bottom