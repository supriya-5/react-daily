
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return(

        <div style = {{display: 'flex', gap:'10px'}}>
            <Link to = '/home'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/contact'>Contact</Link>
        </div> 
    )
}

export default NavigationBar;