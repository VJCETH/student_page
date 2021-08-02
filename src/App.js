import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faPhoneAlt, faSearch, faSignOutAlt, faUnlock, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import Acc from './Acc'
import Gate from './Gate'
import FoodCorner from './FoodCorner'
import { faCuttlefish, faFacebook, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import acdata from './data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state ={
        show:"account",
        adata:{},
        gdata:{},
        load:false,
    }
    this.change = this.change.bind(this);
  }
  change(e){
    {
      this.setState({show:e.target.getAttribute('name')})
     if(e.target.getAttribute('name')==='gate'){
      document.getElementById("ac").classList.remove('mm');
      document.getElementById("fc").classList.remove('mm');
      document.getElementById("gt").classList.add('mm');
     }else if(e.target.getAttribute('name')==='account'){
      document.getElementById("gt").classList.remove('mm');
      document.getElementById("fc").classList.remove('mm');
      document.getElementById("ac").classList.add('mm');
     }else{
      document.getElementById("gt").classList.remove('mm');
      document.getElementById("fc").classList.add('mm');
      document.getElementById("ac").classList.remove('mm');
     }
    }
  }

async  componentDidMount() {
    // try {
      // Note::For reference, visit(highly recommended to visit):: 
      //       Axios:-   https://www.digitalocean.com/community/tutorials/react-axios-react

      // use this request to access data

      // await axios.get('uri for accessing account info....')
      //               .then((response)=>{
      //                     // handle success
      //                     this.setState({adata:response.data,load:true})
      //                     })
      //   } catch (error) {
      //     console.error(error);
      //   }

        // Note: i fitted this get request here, for only for initial setup, plz delete after using above setup
  setTimeout(()=>{
    this.setState({
      adata:acdata,
      load:true
    })
  },2000)
    
}
logout_confirmation(){

  if( document.getElementById("myModal1").style.display = "none"){
    document.getElementById("myModal1").style.display = "block";}
}
bt(){
  if( document.getElementById("myModal1").style.display = "block"){
    document.getElementById("myModal1").style.display = "none";}
}
reload(){
  this.setState({load:false})
    // try {
      // Note::For reference, visit(highly recommended to visit):: 
      //       Axios:-   https://www.digitalocean.com/community/tutorials/react-axios-react

      // use this request to access data

      // await axios.get('uri for accessing account info....')
      //               .then((response)=>{
      //                     // handle success
      //                     this.setState({adata:response.data,load:true})
      //                     })
      //   } catch (error) {
      //     console.error(error);
      //   }

        // Note: i fitted this get request here, for only for initial setup, plz delete after using above setup
        setTimeout(()=>{
          this.setState({
            adata:acdata,
            load:true
          })
        },2000)
}
logout(){
  // this function is to logout from the account.Note:: Delete the bt function below, after logout backend updation.
  this.bt()
}
render(){

return(
      <div>
        
        <div id="myModal1" className="modal">
          {<div className="modal-content">
          <div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to logout from current account.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" name="savep"  onClick={this.logout.bind(this)} style={{background:"#337ab7"}}>Confirm</button>
</div>
</div> 
            </div>}
          </div>
            {this.state.load?<div className="wrapper">
    <header className="main-header">

{/* <!-- header upper --> */}
<div className = "main_headerh" id='navbar'>
    <div className = "nav1h">
        <div className="header-upperh">
            <div className="containerh">
                <ul className="top-lefth .ui">
                    <li><FontAwesomeIcon icon={faPhoneAlt} style={{'marginRight':'10px'}}/>Call:  xxxxxxxxxxx </li>
                    <li><FontAwesomeIcon icon={faEnvelope} style={{'marginRight':'10px'}}/>Email:  vjcet.org</li>
                </ul>
                <div className="top-righth">
                    <div className="search-box-areah">
                        <div className="search-toggleh"><FontAwesomeIcon icon={faSearch} color='white' opacity='0.8'/></div>
                        <div className="search-boxh">
                            <form method="post" action="#">
                                <div className="form-grouph">
                                    <input type="search" name="search" placeholder="Search Here" required/>
                                    <button type="submit"><FontAwesomeIcon icon={faSearch} style={{'size':"10%"}}/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ul className="social-toph">
                        <li><a href="facebook"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a href="twitterr"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><a href="instagram"><FontAwesomeIcon icon={faInstagram}/></a></li>
                       <li><a href="linkedin"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    </ul>
                </div>             
            </div>
        </div>
    </div>
    <div className = "nav2h">
         <div className="header-lowerh">
            <div className="container1h">
                        <div className="logo-boxh">
                            <a href="../index.html"></a>
                        </div>

            </div>
            <div className="container2h">
              <nav className='navh'>
                <label htmlFor="btn" className="iconh">
                  <span className="fa fa-bars"></span>
                </label>
                <input type="checkbox" id="btn" className='inph'/>
                <ul>
                  <li><a href="#!" >Home</a></li>
                  <li>
                    <label htmlFor="btn-1" className="showh" >Login</label>
                    <a href="#!">Login </a>
                    <input type="checkbox" id="btn-1" className ='inph'/>
                    <ul>
                    <li><a href="#!" >Manager </a></li>
                    <li><a href="#!" >Warden</a></li>
                    <li><a href="#!" >Staff</a></li>
                    <li><a href="#!" >Student</a></li>
                    <li><a href="#!" >Security</a></li>
                    </ul>
                  </li>
                    <li><a href="#!" >Facilities</a></li>
                  <li><a href="#!" >Contact</a></li>
                </ul>
              </nav>
            </div>
        </div>
    </div>
  </div>



</header>
{/* <!-- end main header area --> */}
<main>
  
  <div className="sbox"></div>        
  <div className="navbar ">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="#" className="nav-link">
          <span className="link-text logo-text">VJCETH</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-inn "
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li id='ac' className="nav-item mm" onClick={this.change} name='account' >
        <a href="#"  className="nav-link char" name='account' >
        <FontAwesomeIcon icon={faUser}  className="ch nn fa-2x" name='account' aria-hidden="true" />
          <span className="link-text" name='account' >Account</span>
        </a>
      </li>

      <li  id='gt' className="nav-item "  onClick={this.change} name='gate' >
        <a href="#" className="nav-link char " name='gate' >
        <FontAwesomeIcon icon={faUnlock} className="ch nn fa-2x"aria-hidden="true" name='gate'/>
          <span className="link-text " name='gate'>GatePass</span>
        </a>
      </li>

      <li  id='fc' className="nav-item "  onClick={this.change} name='food_corner' >
        <a href="#" className="nav-link char " name='food_corner' >
        <FontAwesomeIcon icon={faUtensils} className="ch nn fa-2x"aria-hidden="true" name='food_corner'/>
          <span className="link-text " name='food_corner'>Food Corner</span>
        </a>
      </li>


      <li className="nav-item las" style={{marginBottom:"1vh"}}>
       <a href="#!" className="nav-link char" onClick={this.logout_confirmation.bind(this)}>
           
       <FontAwesomeIcon icon={faSignOutAlt} className="ch nn fa-2x" aria-hidden="true" />
            
          
           <span className="link-text" >Logout</span>
        </a>
      </li>
    </ul>
  </div>  
  
{this.state.show==='account'?<Acc go={this.state.adata} reload={this.reload.bind(this)}/>:this.state.show==='gate'?<Gate go={this.state.adata}/>:<FoodCorner go={this.state.adata}/>}
</main>
</div>:<div className="preloader"></div>}
    
 </div>
    )

}
}

export default App