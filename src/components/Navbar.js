import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <ul>
                    <Link to='/weather' className='link'><li>Current Weather</li> </Link>
                    <Link to='/fiveDayForecast' className='link' ><li>Five Day Forecast</li></Link>
                </ul>
            </div>
        )
    }
}
export default Navbar;