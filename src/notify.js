import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import './style_actab.scss'
class Notify extends Component{
    constructor(props){
      super(props)
      this.state ={
         in:[],
         cn:"Error",
         dt:"Error",
         des:"Error",
         dl:null
       }
  
    }
    btn(i){
      let array = [...this.state.in];
      array[i-1].read=true;
      this.setState({
        in:array,
        cn:this.state.in[i-1].Content,
        dt:this.state.in[i-1].Date,
        des:this.state.in[i-1].Desc
      })
      if( document.getElementById("myModal").style.display = "none"){
        document.getElementById("myModal").style.display = "block";
      } 
      }
      bt(){
        document.getElementById("myModal").style.display = "none";
      }  
      bt1(){
        document.getElementById("myModal1").style.display = "none";
      } 
dlt(i){
  if( document.getElementById("myModal1").style.display = "none"){
    this.setState({dl:i-1})
    document.getElementById("myModal1").style.display = "block";
    
  }
  
}
nw(){
  this.setState({
    in:this.state.in.splice(this.state.dl,1)
  })
  document.getElementById("myModal1").style.display = "none";
}

    render(){
        var i=0;let x=[];
        let sty={"fontWeight":"750"};
        x=this.props.tb;
        this.state.in=x;
        if(x){
            return(<div className='ni'>
<div id="myModal1" className="modal_nw">


<div className="modal-contenti">
  <div className="modal-header">
    
  <h2 style={{color:"white"}}>Message Box</h2>
  <span className="close" id='cls' onClick={this.bt1}>&times;</span>

  </div>

  <div className="profilei">

        <div>
        <br/>
        <div><h6>Do you wish to delete the message ?</h6></div>
      </div>
  <div className="submit-part">
  <button type="submit" className="btn btn-primary" onClick={this.bt1} style={{background:"#337ab7"}}>Close</button>
  <button type="submit" className="btn btn-primary" onClick={this.nw.bind(this)} style={{background:"#337ab7"}}>Delete</button>
  </div>
  </div> 
</div>
</div>
                <div id="myModal" className="modal">


<div className="modal-content">
  <div className="modal-header">
    
  <h2 style={{color:"white"}}>Message Box</h2>
  <span className="close" id='cls' onClick={this.bt}>&times;</span>

  </div>

  <div className="profile">

    <div className="Tag-no">
        <center>{this.state.cn}</center>
    </div>
      
        <div>
        <br/>
        <div><b>Date and Time:  </b></div><p className='txt'> {this.state.dt}</p>
      </div>
      <br/>
   <div>
     <div><b>Description:  </b></div><p className='txt'>{this.state.des}</p>
   </div>
  
 
  

  
  <div className="submit-part">
    <button type="submit" className="btn btn-primary" onClick={this.bt} style={{background:"#337ab7"}}>Close</button>
  </div>
  </div> 
</div>
</div>
                <table id="auth">  
                
                <tbody className="nt">
                    {this.state.in.map(dt=>{
                      i=i+1;
                        return(
                <tr key={i} style={dt.read?null:sty}>
                 <td>{i}</td>
            <td>{dt.Content}</td>
                 <td>{dt.Date} </td>
                 <td> <a href="#!"  id='shw' name={i}  onClick={this.btn.bind(this,i)}><FontAwesomeIcon  name={i}  icon={faEye} style={{color:"#337ab7"}} aria-hidden="true"  /></a></td>
                 <td> <a href="#!" name={i} onClick={this.dlt.bind(this,i)}><FontAwesomeIcon name={i} icon={faTrash} style={{color:"#337ab7"}} aria-hidden="true" value={i}  /></a></td>
                  </tr> 
                        )
                    })}
                  </tbody> 
                </table>     
                  </div>                
            )

        }else{
            return(<div className="preloader"></div>)

        }

        
        
        
    }
}

export default Notify