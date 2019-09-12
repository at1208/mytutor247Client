import React from 'react';
import './dashboard.css'
import Slide from 'react-reveal/Slide';

const Dashboard = () => {
  return <div>
  <div className='a1 container-fluid text-center  jumbotron'>

    <img src="aman.jpg" alt=" avatar" className='e1 float-right'/>

  <button type="button" className="btn btn-primary float-right f1">
  Notifications <span className="badge badge-light ">2</span>
</button>

   <Slide bottom>
     <h1>My tutor247 Admin</h1>
        </Slide>
         </div>


     <h1 className='shadow text-center'><label className='g1'>Dashboard</label></h1>

  </div>

}
export default Dashboard;
