import React from 'react';
import './requestCard.css';

interface RequestCardProps {
  title: string;
  description: string;
}

function RequestCard({ title, description }: RequestCardProps) {
  return (
    <div className={`requestCard`}>
      <div className="items">
        <div className="logo"></div>
        <div className="card-content">
          <div className="card-content-header">
            <span>{title}</span>
          </div>
          <div className="card-content-footer">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
