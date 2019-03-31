import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class MainPage extends Component{

    render(){
        return(
            <div>
                <h2>Web page for Skin Analyser App</h2> 
                <br/>
                <h3>Purpose of web the app</h3>
                <p> Skin Analyser is and android application aiming to enhance skin cancer prevention.
                    It is a non commercial software and made solely by a engineer concerned about this problematic.
                </p>
                
                <div>
                    <h3>Index</h3>
                    <li className = "list-group-item">
                        <Link className="btn btn-primary" to="/algorithm" >
                                Algorithm Description
                        </Link> : Explanations on the algorithm used to perform analysis
                    </li>
                    <li className = "list-group-item">
                        <Link className="btn btn-primary" to="/usermanual">
                                User Manual
                        </Link> : Go to User Manual
                    </li>
                    <li className = "list-group-item">
                        <Link className="btn btn-primary" to="/usermanual">
                                Terms of conditions
                        </Link> : Terms of conditions and liability description
                    </li>
                </div>

                <br/>
                <div>
                    <h3>Contact</h3>
                    For questions or bug report you can contact : 
                    <li className = "list-item"> toto@gmail.com</li>
                </div>
            </div>
        )
    }
}

export default MainPage;