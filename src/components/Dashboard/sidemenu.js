import React from "react";
import Sidebar from "react-sidebar";
import './sidemenu.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

class Sidemenu extends React.Component {

    state = {
      sidebarOpen: true,


    };


  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {

    return (

      <Sidebar
        sidebar = {
          <div>
          <header className='j1'>Welcome to Mytutor247</header>
          <hr />

        <Fade left>
    <Link to='/profits'>  <button className='btn  j3 shadow'  >Profit</button> </Link>
             </Fade>
      <br/>
      <Fade left>
      <Link to='/visitors'>  <button className='btn  j3 shadow'  >Visitors</button> </Link>
               </Fade>
      <br/>
          <Fade left>
      <Link to='/users'>  <button className='btn   j3 shadow'  >Users</button> </Link>
         </Fade>
      <br/>
              <Fade left>
      <Link to='/products'>  <button className='btn   j3 shadow'   >Products</button> </Link>
       </Fade>
      <br/>
        <Fade left>
      <Link to='/card'>  <button className='btn   j3' >Card</button> </Link>
       </Fade>
          </div>

        }
        shadow = {true}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#d1c4e9" } }} >

        <button onClick={() => this.onSetSidebarOpen(true)} className='btn btn-info j2'>
            Menu
        </button>
      </Sidebar>
    );
  }
}

export default Sidemenu;
