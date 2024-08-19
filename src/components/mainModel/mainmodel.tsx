import  React from 'react';

import './mainModel.css'

interface MainModelProps {
    children?: React.ReactNode; 
    title? : string
  }

function MainModel( { children, title=''}: MainModelProps, ) {

  return (
    <div className="main-model">
        <div className="top-bar"> {title} </div>
            {children} 
    </div>

  );
}

export default MainModel;
