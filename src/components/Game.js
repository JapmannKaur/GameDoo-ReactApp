import './Game.css'
import s17 from '../images/Rectangle 6.png'
import s18 from '../images/heart2.png'
import s19 from '../images/Fill4_1.png'
import s20 from '../images/Marketplace.png'
const Game = () =>{
    return(
        <div className='Mygame'>
            <div className='img'>
                <img src={s17} className='img2'/>
            </div>
            <div className='txt'>
                <div className='t2 black'>
                    Nocturnal
                </div>
                <div className='l1 mid'>
                    <img src = {s18} />
                    <p>232</p>
                    <img src = {s19} />
                    <p>146k</p>
                </div>
            </div>
            <div className='d1 mid'>
            Its your last night shift as a forklift operator at…
            </div>
            <div className='foot2'>
                <div className='footimg'>
                    <img src={s20} />
                </div>
                <button className='bttn'><span className='xyz'>Download</span></button>
            </div>
        </div>
    )
}

export default Game