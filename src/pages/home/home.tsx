import  React from 'react';
import '../../components/global/global.css'
import MainModel from '../../components/mainModel/mainmodel';
import RequestCardHeader from '../../components/requestCardHeader/requestCardHeader';

import './home.css'
function Home() {
  const applicationCards = [
    {
      title: 'Request for a New Application', 
      description: 'Request this form to create a brand new application'
    },
    {
      title: 'Enahance an Exisiting Application', 
      description: 'Request this form to modify or change an exisiting application'
    },
  ]
  const dataCards = [
    {
      title: 'New Report', 
      description: 'Request this form to inquire a report on some data'
    },
    {
      title: 'Report a Bug', 
      description: 'Request this form to notify the team of miscalculated data '
    },
  ]
  return (
    <div className="main-content"> 
        <MainModel>
          <div className="model-content">
            <RequestCardHeader title='Application' description='Click here to request tickets related to application devolpment' children={applicationCards} />
            <RequestCardHeader title='Data' description='Click here to request tickets related to data insight' children={dataCards} />
          </div>
        </MainModel>
    </div>
  );
}

export default Home;
