import Nav from './Nav'
import Top from './Top'
import Bottom from './Bottom'
import Rightbar from './Rightbar'

const Mainpage = () =>{
    return(
        <div className="mains">
            <div>
                <Nav />
            </div>
            <div className='topbars'>
                <div>
                    <Top />
                </div>
                <div>
                    <Rightbar />
                </div>
            </div>
            <div>
                <Bottom />
            </div>
            
        </div>
    )
}

export default Mainpage