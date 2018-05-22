import {Link} from 'react-router-dom';
import React from 'react';

export default function Nav(props) {

      return (
        <div className="App">
        
        <Link to={`/${props.room}`}><button>Join room </button></Link>
        </div>
      );
}
  