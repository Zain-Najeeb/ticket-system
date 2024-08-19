import React from 'react';
import './requestCardHeader.css'
import RequestCard from '../requestCard/requestCard'
import RequestCardVisability from '../../hooks/RequestCardVisability'
interface RequestCardChildProps {
  title: string,
  description: string
}
interface RequestCardHeaderProps {
  title: string,
  description: string
  children: RequestCardChildProps[]
}

function RequestCardHeader({ title, description, children}: RequestCardHeaderProps) {
  const [isVisible, toggleVisibility] = RequestCardVisability(false);
  return (
    <>
      <div className="card" onClick={toggleVisibility}>
          <div className="logo"></div>
          <div className="adjectives">
            <div className="title">
              <span>{title}</span>
            </div>
            <div className="description">
              <span>{description}</span>
            </div>
          </div>
          <div className="arrow">
            <i className={`fas ${!isVisible ? 'fa-chevron-left' : 'fa-chevron-left chevron-down'}`}></i>
          </div>
      </div>
      
      <div className={`card-container ${isVisible ? 'expanded' : ''}`}>
        {children.map((child, index) => (
          <RequestCard key={index} title={child.title} description={child.description} />
        ))}
      </div>
    
    </>
  );
}

export default RequestCardHeader;
