import React, { Component} from 'react';
import './auth.css'
import Slide from 'react-reveal/Slide';
import axios from 'axios';
import Dashboard from '../Dashboard/dashboard';



class Auth extends Component{

  state = {
    Username: '',
    Password: '',
    LoginStatus: ''
  }

onSubmission =  async () => {
const  username = this.state.Username
const password = this.state.Password

await axios.get(`https://mytutor247.herokuapp.com/login/${username}/${password}`)
.then((result) => this.setState({ LoginStatus: result.data }))
.catch((err) => console.log(err))

}

  render(){
if(this.state.LoginStatus === 'Login Successfull!' ){
  return <Dashboard />

}else if(this.state.LoginStatus === 'Invalid Username Or Password'){
  return <div>
  <div className='a1 container-fluid text-center  jumbotron'>
   <Slide bottom>
     <h1 className='b9'>My Tutor247 Admin</h1>
        </Slide>
         </div>
  <div className='b2 text-center shadow'>
        <Slide bottom>
           <h1 className='b1'> Authentication</h1>
        </Slide>

    <div className = 'container b5'>
 <form onSubmit={(e) => e.preventDefault()}>
         <label className='b6'>Username</label>
         <input type='text' value={this.state.Username} onChange = {e => this.setState({ Username: e.target.value })} placeholder='Enter Username' className='text-center b7'/>

         <br />

         <label  className='b6'>Password </label>
         <input type='Password'   value={this.state.Password} onChange = {e => this.setState({ Password: e.target.value })} placeholder='Enter Password'  className='text-center b7'/>
 <br />
 <button className =  'b8 btn btn-sm  btn-outline-info' onClick={this.onSubmission}>Submit</button>
 </form>
    </div>

    <div>
  Invalid Username Or Password
    </div>
        </div>
</div>
}else{
  return <div>
  <div className='a1 container-fluid text-center jumbotron'>
   <Slide bottom>
     <h1>My tutor247 Admin</h1>
        </Slide>
         </div>
  <div className='b2 text-center shadow container'>
        <Slide bottom>
           <h1 className=''> Authentication</h1>
        </Slide>

    <div className = 'container b5'>
<form onSubmit={(e) => e.preventDefault()}>
         <label className='b6'>Username</label>
         <input type='text' value={this.state.Username} onChange = {e => this.setState({ Username: e.target.value })} placeholder='Enter Username' className='text-center b7'/>

         <br />

         <label  className='b6'>Password </label>
         <input type='Password'   value={this.state.Password} onChange = {e => this.setState({ Password: e.target.value })} placeholder='Enter Password'  className='text-center b7'/>
 <br />
<button className =  'b8 btn btn-sm  btn-outline-info' onClick={this.onSubmission}>Submit</button>
</form>
    </div>
        </div>
        </div>
}

  }
}
export default Auth;
