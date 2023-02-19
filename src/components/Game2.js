import './Game.css'
import s17 from '../images/Rectangle 6.png'
import s18 from '../images/heart.png'
import s19 from '../images/Fill 4.png'
import s20 from '../images/Marketplace.png'
const Game2 = () =>{
    return(
        <div className='Mygame2'>
            <div className='img'>
                <img src={s17}/>
            </div>
            <div className='txt'>
                <div className='t2 white'>
                    Nocturnal
                </div>
                <div className='l1 white'>
                    <img src = {s18} />
                    <p>232</p>
                    <img src = {s19} />
                    <p>146k</p>
                </div>
            </div>
            <div className='d1 white'>
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

export default Game2