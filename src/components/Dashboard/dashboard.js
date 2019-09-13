import React, { Component }from 'react';
import './dashboard.css'
import Slide from 'react-reveal/Slide';
import Sidemenu from './sidemenu'
import Fade from 'react-reveal/Fade';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MathJax from 'react-mathjax-preview'




class Dashboard extends Component  {
    state = {
    editorState: EditorState.createEmpty(),
    MathsFormula: ``,

  };



onEditorStateChange: Function = (editorState) => {
  this.setState({
    editorState: editorState,
  });
};
  render(){

     const { editorState } = this.state;


    return <div>

          <div className='a1 container-fluid text-center  jumbotron'>
          <img src="aman.jpg" alt=" avatar" className='e1 float-right'/>
          <Fade bottom>
          <button type="button" className="btn btn-primary float-right f1">
          Notifications <span className="badge badge-light e2" >2</span>
          </button>
          </Fade>
          <Slide bottom>
          <h1 ><b style={{ color: '#d32f2f'}}>My</b> <b  style={{ color: '#32cb00'}}>tutor24</b><b style={{ color: '#d32f2f'}}>7</b> Admin</h1>
          </Slide>
          </div>

          <h1 className=' text-center'><label className='g1'>Dashboard</label></h1>






          <div className='container g3'>
          <label className='k2 text-center'>Enter Maths formula</label>
          <input onChange={e => this.setState({ MathsFormula: e.target.value })} value={this.state.MathsFormula}/>
          </div>

          <div className = 'container'>
          {this.state.MathsFormula}
          </div>

          <Fade bottom>
          <div className='container g2  justify-content-center shadow'>
           <Editor
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
