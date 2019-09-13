import React from "react";
import Sidebar from "react-sidebar";
import './sidemenu.css'
import Fade from 'react-reveal/Fade';

class Sidemenu extends React.Component {

    state = {
      sidebarOpen: true,
      Profit: false,
      Visitors: false,
      Users: false,
      Products: false,
      Card: false

    };


  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
console.log(this.state.Profit)
    return (

      <Sidebar
        sidebar = {
          <div>
          <header className='j1'>Welcome to Mytutor247</header>
          <hr />

        <Fade left>
      <button className='btn  j3 shadow' onClick = {() => this.setState({ Profit: true })}>Profit</button>
             </Fade>
      <br/>
      <Fade left>
      <button className='btn  j3 shadow' onClick = {() => this.setState({ Visitors: true })}>Visitors</button>
               </Fade>
      <br/>
          <Fade left>
      <button className='btn   j3 shadow'onClick = {() => this.setState({ Users: true })} >Users</button>
         </Fade>
      <br/>
              <Fade left>
      <button className='btn   j3 shadow'  onClick = {() => this.setState({ Products: true })}>Products</button>
       </Fade>
      <br/>
        <Fade left>
      <button className='btn   j3' onClick = {() => this.setState({ Card: true })} >Card</button>
       </Fade>
          </div>

        }
        shadow = 'true'
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#64b5f6" } }} >

        <button onClick={() => this.onSetSidebarOpen(true)} className='btn btn-info j2'>
          Open Sidebar
        </button>
      </Sidebar>
    );
  }
}

export default Sidemenu;
