import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Algorithm extends Component{

    render(){
        return(
            <div>
                <Link to="/"> Back to index </Link>
                <h3>Algorithm Detail</h3>
               
                <p> The mole classification is based upon recent Artificial Intelligence algorithms.
                    A Convolutional Network (InceptionResNetV2) is used here, and has been trained on thousands images issued from xxx.
                </p>
                Further enhancement under study : 
                <li className = "list-item"> use of mole Size</li>
                <li className = "list-item"> use of mole texture</li>
                <li className = "list-item"> age and gender of person</li>
             
                
                
         
            </div>
        )
    }
}

export default Algorithm;