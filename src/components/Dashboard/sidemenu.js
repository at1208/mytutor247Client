import React from "react";
import Sidebar from "react-sidebar";
import './sidemenu.css'
import Fade from 'react-reveal/Fade';

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
      <button className='btn  j3 shadow'  >Profit</button>
             </Fade>
      <br/>
      <Fade left>
      <button className='btn  j3 shadow'  >Visitors</button>
               </Fade>
      <br/>
          <Fade left>
      <button className='btn   j3 shadow'  >Users</button>
         </Fade>
      <br/>
              <Fade left>
      <button className='btn   j3 shadow'   >Products</button>
       </Fade>
      <br/>
        <Fade left>
      <button className='btn   j3' >Card</button>
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
