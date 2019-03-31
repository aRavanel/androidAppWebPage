import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserManual extends Component {
    render() {
      return (
          <div >
            <Link to="/"> Back to index </Link>
            <h2> Skin Analyser User Manual</h2>
            
            <h3>Quick analysis</h3>
            <p>
              This is used to perform a quick analysis on a new mole.
              The picture and associated analysis results will not be stored in the user follow up section.
              It can nevertheless be saved into a pdf format and sent per email.
            </p>

            <h3>Follow up description</h3>
            <p>
              This section is used to record the user's suspicious moles.
              To create a new tracked mole, the user has the possibility to add it by naming it and locating it into a body map.
              Once this has been realized, he will be able to add more picture to mark its evolution, comment them and perform an analysis.
            </p>
            
            <h3>Information description</h3>
            <p>This section is here to give more information on skin cancer. It lists various topics such as :
              <li> kkk</li>
              <li> kkk</li>
            </p>

            <h3>Quizz description</h3>
            <p>This section is here to give more information on skin cancer.
              Depending of the user's educationnal background, several categories can be chosen:
              <li> regular people</li>
              <li> student in med school</li>
            </p>
                
          </div>
       
      );
    }
  }