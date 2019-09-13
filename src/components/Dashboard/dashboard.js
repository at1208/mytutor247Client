import React, { Component }from 'react';
import './dashboard.css'
import Slide from 'react-reveal/Slide';
import Sidemenu from './sidemenu'
import Fade from 'react-reveal/Fade';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import MathJax from 'react-mathjax2'





class Dashboard extends Component  {
    state = {
    editorState: EditorState.createEmpty(),
    MathsFormula: '',

  };



onEditorStateChange: Function = (editorState) => {
  this.setState({
    editorState: editorState,
  });
};
  render(){

     const { editorState } = this.state;
     const ascii = this.state.MathsFormula;

    return <div>
          <Sidemenu />

          <div className='a1 container-fluid text-center  jumbotron'>
          <img src="aman.jpg" alt=" avatar" className='e1 float-right'/>
          <Fade bottom>

          <button className='btn btn-sm g7 float-right' onClick={() =>  window.location.reload()}>Logout</button>

          <button type="button" className="btn btn-primary float-right f1">
          Notifications <span className="badge badge-light e2" >2</span>
          </button>
          </Fade>

          <Slide bottom>
          <h1 ><b style={{ color: '#d32f2f'}}>My</b> <b  style={{ color: '#32cb00'}}>tutor24</b><b style={{ color: '#d32f2f'}}>7</b> Admin</h1>
          </Slide>

          </div>
<Fade bottom>
          <h1 className=' text-center'><label className='g1'>Dashboard</label></h1>
</Fade>






          <Fade bottom>
          <div className='container g2  justify-content-center shadow'>

                             <div className='container g3 text-center'>
                             <label className='k2 text-center'>Enter Maths formula</label>
                             <input onChange={e => this.setState({ MathsFormula: e.target.value })} placeholder ='eg. sum_(i=1)^n i^3=((n(n+1))/2)^2' value={this.state.MathsFormula} className='g4'/>
                             </div>

                             <div className = 'container'>
                              <div>
                               <MathJax.Context input='ascii'>
                                   <div className='container g5'>
                                       <h1 className='g6 text-center'>Block display of Ascii Math</h1>
                                       <hr />
                                       <MathJax.Node>{ascii}</MathJax.Node>
                                   </div>
                               </MathJax.Context>
                           </div>
                             </div>

           <Editor
             placeholder = 'PLEASE WRITE HERE'
             wrapperClassName="wrapper-class"
             editorClassName="editor-class"
             toolbarClassName="toolbar-class"
             editorState={editorState}
             onEditorStateChange={this.onEditorStateChange}
             toolbar={{
             inline: { inDropdown: true },
             list: { inDropdown: true },
             textAlign: { inDropdown: true },
             link: { inDropdown: true },
             history: { inDropdown: true }, }} />
         </div>
         </Fade>



    </div>

  }

}
export default Dashboard;
