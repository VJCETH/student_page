import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import './style_acc.scss'
import Notify from './notify';

class Acc extends Component{

    constructor(props){
      super(props)
      this.state ={
        fn:{},
        msg_box_no:1,
        room_mate_no:0,
        server_response:"wait",
        feedback:'',
        notification_message:''
        
      }
  
    }
    notifyy() {
      document.getElementById("not").style.display = "block";
      document.getElementById("fee").style.display = "none";
       document.getElementById("roo").style.display = "none";
      document.getElementById("nm").style.color = "#2b5d8a";
      document.getElementById("nm").style.fontWeight = "bold";
      document.getElementById("fk").style.color = "#141418";
      document.getElementById("fk").style.fontWeight = "medium";
      document.getElementById("rm").style.color = "#141418";
      document.getElementById("rm").style.fontWeight = "medium";
      document.getElementById("nm2").style.color = "#2b5d8a";
      document.getElementById("nm2").style.fontWeight = "bold";
      document.getElementById("fk2").style.color = "#141418";
      document.getElementById("fk2").style.fontWeight = "medium";
      document.getElementById("rm2").style.color = "#141418";
      document.getElementById("rm2").style.fontWeight = "medium";

  }
  room() {
    document.getElementById("roo").style.display = "block";
    document.getElementById("not").style.display = "none";
    document.getElementById("fee").style.display = "none";
    document.getElementById("rm").style.color = "#2b5d8a";
    document.getElementById("rm").style.fontWeight = "bold";
    document.getElementById("fk").style.color = "#141418";
    document.getElementById("fk").style.fontWeight = "medium";
    document.getElementById("nm").style.color = "#141418";
    document.getElementById("nm").style.fontWeight = "medium";
    document.getElementById("rm2").style.color = "#2b5d8a";
    document.getElementById("rm2").style.fontWeight = "bold";
    document.getElementById("fk2").style.color = "#141418";
    document.getElementById("fk2").style.fontWeight = "medium";
    document.getElementById("nm2").style.color = "#141418";
    document.getElementById("nm2").style.fontWeight = "medium";

}
   feedb() {
      document.getElementById("not").style.display = "none";
      document.getElementById("fee").style.display = "block";
      document.getElementById("roo").style.display = "none";
      document.getElementById("fk").style.color = "#2b5d8a";
      document.getElementById("fk").style.fontWeight = "bold";
      document.getElementById("nm").style.color = "#141418";
      document.getElementById("nm").style.fontWeight = "medium";
      document.getElementById("rm").style.color = "#141418";
      document.getElementById("rm").style.fontWeight = "medium";
      document.getElementById("fk2").style.color = "#2b5d8a";
      document.getElementById("fk2").style.fontWeight = "bold";
      document.getElementById("nm2").style.color = "#141418";
      document.getElementById("nm2").style.fontWeight = "medium";
      document.getElementById("rm2").style.color = "#141418";
      document.getElementById("rm2").style.fontWeight = "medium";
  } 
up(){
  let ob=this.state.fn;
  document.getElementById("Register_number").value=ob["Register_number"]
  document.getElementById("First_name").value=ob["First_name"];
  document.getElementById("Last_name").value=ob["Last_name"];
  document.getElementById("Email").value=ob["Email"];
  document.getElementById("Address").value=ob["Address"];
  document.getElementById("Contact_1").value=ob["Contact_1"];
  document.getElementById("Contact_2").value=ob["Contact_2"];
  document.getElementById("Health_issues").value=ob["Health_issues"];
  document.getElementById("M1").style.display = "none";
  document.getElementById("M2").style.display = "grid";
  document.getElementById("M3").style.display = "none";
}
up1(){
  document.getElementById("M1").style.display = "none";
  document.getElementById("M2").style.display = "none";
  document.getElementById("M3").style.display = "grid";
}
show_popup(){
  let msg= document.getElementById("feedbacktext").value;
  this.setState({server_response:"wait",msg_box_no:9})
  if(msg!='' && (document.getElementById("feedback_bad").checked || document.getElementById("feedback_average").checked || document.getElementById("feedback_good").checked)){
    let feedback;
    if(document.getElementById("feedback_bad").checked){
      feedback='Bad'
    }else if(document.getElementById("feedback_average").checked){
      feedback="Average"
    }else{
      feedback="Good"
    }
    
    this.setState({notification_message:msg,feedback:feedback})

    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
  }else{
    this.setState({msg_box_no:8});
      if( document.getElementById("myModal2").style.display = "none"){
        document.getElementById("myModal2").style.display = "block";}
  }
}
send_notification_msg(){
  this.setState({server_response:"wait",msg_box_no:7});
      if( document.getElementById("myModal2").style.display = "none"){
        document.getElementById("myModal2").style.display = "block";}
  // NOTE:: Insert the POST request to send feedback to admins
  
  // Delete the below code after backend updation
  setTimeout(()=>{
    this.setState({server_response:"success"})
    document.getElementById("feedbacktext").value='';
    document.getElementById("feedback_bad").checked=false; 
    document.getElementById("feedback_average").checked=false; 
    document.getElementById("feedback_good").checked=false;

  },2000)
}
can(e){
  if(e.target.name==="save"){

    // NOTE:: call the this.props.reload function to handle if the response from the server is a error msg. It allows to reload the site once more.
    
    if(e.target.name==="save" && (document.getElementById("First_name").value ==="" || document.getElementById("Last_name").value ==="" || document.getElementById("Email").value==="" || document.getElementById("Address").value=="" ||document.getElementById("Contact_1").value==="" ||document.getElementById("Contact_2").value==="" || document.getElementById("Health_issues").value==="")){
     this.setState({msg_box_no:8})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    }else{
      let ob=this.state.fn;
    ob["First_name"]=document.getElementById("First_name").value;
    ob["Last_name"]=document.getElementById("Last_name").value;
    ob["Email"]=document.getElementById("Email").value;
    ob["Address"]=document.getElementById("Address").value;
    ob["Contact_1"]=document.getElementById("Contact_1").value;
    ob["Contact_2"]=document.getElementById("Contact_2").value;
    ob["Health_issues"]=document.getElementById("Health_issues").value;
    ob["Status"]="Active";
    this.setState({msg_box_no:7,server_response:"wait"})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    setTimeout(()=>{
      this.setState({fn:ob,server_response:"success"})
    document.getElementById("M1").style.display = "grid";
    document.getElementById("M2").style.display = "none";
    document.getElementById("M3").style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    },2000)

    }
    
  }else if(e.target.name==="savep"){
    if(document.getElementById("crpassword").value==="" || document.getElementById("nwpassword").value==="" || document.getElementById("newpassword").value===""){

    this.setState({msg_box_no:8})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    }else{      
      this.setState({msg_box_no:7,server_response:"wait"})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    setTimeout(()=>{
      this.setState({server_response:"success"})
      document.getElementById("M1").style.display = "grid";
  document.getElementById("M2").style.display = "none";
  document.getElementById("M3").style.display = "none";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    },2000)
    }
  }else{ 
    this.setState({msg_box_no:7,server_response:"wait"})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    setTimeout(()=>{
      this.setState({server_response:"success"})
      document.getElementById("M1").style.display = "grid";
    document.getElementById("M2").style.display = "none";
    document.getElementById("M3").style.display = "none";
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    },2000)
    
    }
}
show_msg_roomate(i,k){
  if( document.getElementById("myModal2").style.display = "none"){
    document.getElementById("myModal2").style.display = "block";
    // Here i is the message box content number to be displayed, k is the roommate number 
  this.setState({
    msg_box_no:i,
    room_mate_no:k
  })
  }
}
componentDidUpdate() {
  let ob = this.props.go;
  if(this.props.go["Status"]==="Pending"){
    
    document.getElementById("M1").style.display = "none";
    document.getElementById("M2").style.display = "grid";
    document.getElementById("M3").style.display = "none";
    document.getElementById("Register_number").value=ob["Register_number"]
    document.getElementById("First_name").value=ob["First_name"];
    document.getElementById("Last_name").value=ob["Last_name"];
    document.getElementById("Email").value=ob["Email"];
    document.getElementById("Address").value=ob["Address"];
    document.getElementById("Contact_1").value=ob["Contact_1"];
    document.getElementById("Contact_2").value=ob["Contact_2"];
  }
}
bt(i){
  document.getElementById("myModal2").style.display = "none"
  if(i==1){
    this.setState({msg_box_no:7,server_response:"wait"})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    setTimeout(()=>{
      this.setState({server_response:"success"})
    },2000)
  }else if (i==2){
    this.setState({msg_box_no:7,server_response:"wait"})
    if( document.getElementById("myModal2").style.display = "none"){
      document.getElementById("myModal2").style.display = "block";}
    setTimeout(()=>{
      this.setState({server_response:"success"})
    },2000)
  }
}
render(){
  let x =[],i=-1;
  x=this.props.go;
  this.state.fn=x;
  if(this.state.fn)
    return(
      <div className='acc'>
        <div id="myModal2" className="modal">

    {this.state.msg_box_no===1?<div className="modal-content">
  <div className="modal-header">
  <h2 style={{color:"white"}}>Message Box</h2>
  <span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

  </div>

  <div className="profile">

        <center>A notification will be send to this roommate to inform that, you have accessed his/her contact information.</center>
  
      
        <div>
        <br/>
        <div><b>Moblie Number 1:  </b></div><p className='txt'> {this.state.fn.Room_mates?this.state.fn.Room_mates[this.state.room_mate_no].Contact_number[0]:null}</p>
      </div>
      <br/>
   <div>
     <div><b>Moblie Number 1:  </b></div><p className='txt'>{this.state.fn.Room_mates?this.state.fn.Room_mates[this.state.room_mate_no].Contact_number[1]:null}</p>
   </div>
  
 
  

  
  <div className="submit-part">
    <button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
  </div>
  </div> 
</div>:this.state.msg_box_no===2?<div className="modal-content">
  <div className="modal-header">
  <h2 style={{color:"white"}}>Message Box</h2>
  <span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

  </div>

  <div className="profile">

        <center>Please specify the reason to report this member to the admin. Your details will not be shared to anyone.</center>
        <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Write </label> */}
    <p>About :{this.state.fn.Room_mates?this.state.fn.Room_mates[this.state.room_mate_no].Name:null}</p>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write here..."></textarea>
  </div>
  
 
  

  
  <div className="submit-part">
    <button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
  <button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,1)} style={{background:"#337ab7"}}>Report</button>
  </div>
  </div> 
</div>:this.state.msg_box_no===3?<div className="modal-content">
  <div className="modal-header">
  <h2 style={{color:"white"}}>Message Box</h2>
  <span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

  </div>

  <div className="profile">Please specify the reason for the request to change the current room.Specify your prefered room number(optional). New room will only be allocated after the admin confirmation. Your details will not be shared to anyone.
        <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write here..."></textarea>
  </div>
  <div className="submit-part">
    <button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
    <button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,2)} style={{background:"#337ab7"}}>Send</button>
  </div>
  </div> 
</div>:this.state.msg_box_no===4?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to update the account details.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" onClick={this.can.bind(this)} name="save" style={{background:"#337ab7"}}>Confirm</button>
</div>
</div> 
</div>:this.state.msg_box_no===5?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to update the account password.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" name="savep"  onClick={this.can.bind(this)} style={{background:"#337ab7"}}>Confirm</button>
</div>
</div> 
</div>:this.state.msg_box_no===6?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this,0)}>&times;</span>

</div>

<div className="profile">

    <center>Discard changes made in this form.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" name="discardp" onClick={this.can.bind(this)} style={{background:"#337ab7"}}>Confirm</button>
</div>
</div> 
</div>:this.state.msg_box_no===7?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>
{this.state.server_response==="wait"?<div className="profile">

<center>Waiting for Server Response....</center>

<div className="submit-part" style={{minHeight:"100px"}}>
</div>
</div>:this.state.server_response==="success"?<div className="profile">

<center>Database Updated Successsfully.</center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
</div>
</div>:<div className="profile">

<center>Error 408. Please try Again.</center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
</div>
</div>}
 
</div>:this.state.msg_box_no===8?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Please fill all required fields.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
</div>
</div> 
</div>:<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to send the following feedback.</center>
    <center><p>Feedback:{this.state.feedback}</p></center>
    <center><p>Message: {this.state.notification_message}</p></center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" onClick={this.send_notification_msg.bind(this)} style={{background:"#337ab7"}}>Confirm</button>
</div>
</div> 
</div>}

</div>
        <div className="mbox">                       
    <div  className="col1" >
      <h1>Account</h1> 
    </div>
    <div className="maingrid" id="M1">
        <div className="grid1">
    <div className="bl1"><h4>{this.state.fn.First_name} {this.state.fn.Last_name}</h4><br/>
                        <div className="lab"><a href="#!" className="bla" onClick={this.up.bind(this)} style={{textDecoration:"none"}}>Update</a>
                          <a href="#!" className="bla" onClick={this.up1.bind(this)} style={{textDecoration:"none"}}>Change Password</a>
                          {this.props.go.Status==="Occupied"?<a href="#!" className="bla" style={{textDecoration:"none"}}>Vaccate-Room</a>:null}</div></div>
        </div>
        <div className="grid2">
          <div className="pic">
            <center><img src={this.state.fn.img} alt='the profile picture' className="img-m"/> </center> </div>
            
    <div className="info"><center><div className="hh">{this.props.go.Register_number}</div></center>
            <div className="grid-container">
            <div className="grid-item bb">Status</div>
              <div className="grid-item" style={{"color":"darkgreen"}}><b>{this.props.go.Status}</b></div>
              
              <div className="grid-item bb">First Name</div>
              <div className="grid-item">{this.state.fn.First_name}</div>
              <div className="grid-item bb">Last Name</div>
              <div className="grid-item">{this.state.fn.Last_name}</div>
              <div className="grid-item bb">Address</div>
              <div className="grid-item">{this.state.fn.Address}</div>
              {this.props.go.Status==="Occupied"?<div className="grid-item bb">Room number</div>:null}
              {this.props.go.Status==="Occupied"?<div className="grid-item">{this.state.fn.Room_number}</div>:null}
              <div className="grid-item bb">Email</div>
              <div className="grid-item">{this.state.fn.Email}</div>
              <div className="grid-item bb">Role</div>
              <div className="grid-item">{this.state.fn.Role}</div>
            </div>
            </div>

        </div>
        <div className="grid3">
          <div className="option">
            <div className="option-a sp">
              <a href="#!" onClick={this.notifyy} style={{textDecoration:"none"}}><div className="notify item" id="nm">Notification</div></a>
              <a href="#!" onClick={this.room} style={{textDecoration:"none"}}><div className="room " id="rm" style={{borderRight:"1px solid rgb(233, 233, 233)"}}>Roommates</div></a>
              <a href="#!" onClick={this.feedb} style={{textDecoration:"none"}}><div className="feedback " id="fk">Feedback</div></a>
            </div>
            <div className="option-b sp">
              <center><a href="#!" className="notify"onClick={this.notifyy} id="nm2" style={{textDecoration:"none"}}>Notification</a>/
            <a href="#!" className="room" onClick={this.room} id="rm2" style={{textDecoration:"none"}}>Roommates</a>/
            <a href="#!" className="feed" onClick={this.feedb} id="fk2" style={{textDecoration:"none"}}>Feedback</a>
          </center>
          </div>
          </div>
          <div className="content">
            <div className="notify-a" id="not">
                <table  id="hd"><thead>
                  <tr>
                  <th className="no">#</th>
                  <th className="con">Content</th>
                  <th className="dat">Date</th>
                  <th></th>
                  <th></th>
                  </tr>
                  </thead>
                  <tbody className='bd'>
                  <tr>
                  <td>1</td>
                  <td>Gate Pass Request</td>
                  <td>2013-09-29T18:46:19-0700 </td>
                  <td> <a href="#"><FontAwesomeIcon icon={faEye} className="ic" aria-hidden="true" /></a></td>
                  <td> <a href="#"><FontAwesomeIcon icon={faTrash} className="ic" aria-hidden="true" /></a></td>
                   </tr> 
                  </tbody>
                </table>
                <div className='non'>
                <Notify tb={this.props.go.inbox}/>
                </div>
            </div>

            <div className="feed-a" id="fee">
                <div className="row">
                    <div className="col-sm-12 form-group">
                    <h6 style={{marginBottom:'20px'}}>
                Please provide your feedback below:
            </h6>
                    <h6 className="r-s"><b>How do you rate your overall experience?</b></h6>
                    <h6>
                        <input type="radio" name="experience" id="feedback_bad" value="bad" />
                        Bad
                        <input type="radio" name="experience" id="feedback_average" value="average" />
                        Average
                        <input type="radio" name="experience" id="feedback_good" value="good" />
                        Good
                    </h6>
                    </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                        <label htmlFor="comments">
                            Comments:</label>
                        <textarea className="text-ar" id="feedbacktext" type="textarea" name="comments"  placeholder="Your Comments" maxLength="6000" rows="5"/>
                    <input type="submit" className="btn btn-info" value="Submit" style={{marginTop:"20px" , color:"white",background:"#337ab7",fontSize:"small"}} onClick={this.show_popup.bind(this)}></input>
                </div>
                </div>
            </div>
            <div className="room-a" id="roo">
              {this.state.fn.Room_mates?this.state.fn.Room_mates.map((dt)=>{
                i=i+1
                return(
                  <div className="mem1">
                  <div className="b1">
                    <center><div >
                      <img src={this.state.fn.Room_mates[i].img} className="p1" alt="profile_picture"/>
                      </div></center>
                  </div>
                  <div className="b2">
                    <div className="con1">
                      <h6 style={{fontSize:"0.8rem"}}>Reg No : {this.state.fn.Room_mates?this.state.fn.Room_mates[i].Register_number:null}</h6>
                      <h6 style={{fontSize:"0.8rem"}}>Full Name : {this.state.fn.Room_mates?this.state.fn.Room_mates[i].Name:null}</h6>
                      <h6 style={{fontSize:"0.8rem"}}>Semester : {this.state.fn.Room_mates?this.state.fn.Room_mates[i].Semester:null}</h6>
                      <a href="#!" onClick={this.show_msg_roomate.bind(this,1,i)}><input type="button" value="Access Contact Details" className="bn-c btn " disabled={this.state.fn.Room_mates[i].Name==="no_data"}/></a>
                      <a href="#!" onClick={this.show_msg_roomate.bind(this,2,i)}><input type="button" value="Report" className="bn-c btn " disabled={this.state.fn.Room_mates[i].Name==="no_data"}/></a>
                    </div>
                  </div>
                </div>
                )
              }):null}
                <div  align="right"><a href="#" onClick={this.show_msg_roomate.bind(this,3,1)}><input type="button" value="Request Change" className="bn-c btn"/></a></div>
            </div>
          </div>
        </div>
    </div>
    <div className="main-grid" id="M2">
      <div className="grid_0">
      
      <div className="he">
      <div className="head">
            <div><h6><b>Updation Form</b></h6></div>
          </div>
          <div className="cont">
          <div className="picup">
            <div className="sm">
          <div><center><img src={this.props.go.img} alt='the profile picture' className="img-mi img-rounded"/></center></div>
          <div><center> <label htmlFor="myFile" className="upbto btn-sm">Upload Photo</label></center></div>
          <input type="file" id="myFile" name="filename" className="upbt" accept=".jpg, .jpeg, .png" />
         </div>
          </div>
          <div className="infoup input-group-sm">
            <form>
            <div>
              <label><p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Register Number *</p>
                  <input type="text" className="br form-control " id="Register_number" style={{height:"2.3rem"}} readOnly/></label></div>
                  <div className='ftwo'>
                    <div>
                    <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>First Name *</p>
                  <input type="text" className="br2 form-control" id="First_name" style={{height:"2.3rem"}} required/>
                  </div>
                  <div>
                  <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Last Name *</p>
                  <input type="text"  className="br2 form-control" id="Last_name"  style={{height:"2.3rem"}} required/>
                  </div>
                  </div>
                  <div className='ftwo'>
                    <div>
                    <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Email *</p>
                  <input type="text" className="br2 form-control" placeholder="Enter emailid" id="Email" style={{height:"2.3rem"}} required/>
                  </div>
                  <div>
                  <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>College Register Number</p>
                  <input type="text"  className="br2 form-control" id="College_register_number" placeholder="--RR---"  style={{height:"2.3rem"}}/>
                  </div>
                  </div>
                  <div><p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Address *</p>
                  <textarea type="text" className="bri form-control" placeholder="Enter address"  id="Address" rows="2" required/></div>
                  <div className='ftwo'>
                    <div>
                    <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Mobile Number 1 *</p>
                  <input type="text"  className="br2 form-control" placeholder="Enter mobile no.1"  id="Contact_1" style={{height:"2.3rem"}} required/>
                  </div>
                  <div>
                  <p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Mobile Number 2 *</p>
                  <input type="text"  className="br2 form-control" placeholder="Enter mobile no.2" id="Contact_2" style={{height:"2.3rem"}} required/>
                  </div>
                  </div>
                  <div><p className='updation_form_style' style={{color:"#337ab7" , fontWeight:"bold",fontSize:"0.8rem"}}>Health Issues *</p>
                  <textarea type="text"  className="bri form-control" placeholder="Enter your health issues"  id="Health_issues" style={{height:"2.3rem", overflowY:"hidden"}}/></div>
                  </form>  
          </div>
          <div className="fx">
          <div>
            <center><button type="submit" className="upti btn-sm" name="save" onClick={this.show_msg_roomate.bind(this,4,1)}>Save</button></center></div>
            <div className="hgt"></div>
          <div>
          <center>
          <button type="submit" className="uptj btn-sm" name="discardp" onClick={this.show_msg_roomate.bind(this,6,1)} >Discard</button></center></div>
          </div>
          
          </div>
        </div>
      </div>
      <div className="grid_1"></div>
    </div>
    <div className="main-grid1" id="M3">
      <div className="grid_0">
      <div className="he">
          <div className="head">
            <div><h6><b>Update Password</b></h6></div>
          </div>
          <div className="cont">
          <div className="pfx">
          <div><h6 style={{color:"#337ab7" , fontWeight:"bold", fontSize:"0.8rem"}}>Current Password *</h6>
                  <input id="crpassword" type="password" class="form-control" name="password" placeholder="Password" /></div>
          <div><h6 style={{color:"#337ab7" , fontWeight:"bold", fontSize:"0.8rem"}}>New Password *</h6>
                  <input id="nwpassword" type="password" class="form-control" name="password" placeholder="Password" /></div>
          <div><h6 style={{color:"#337ab7" , fontWeight:"bold", fontSize:"0.8rem"}}>Confirm New Password *</h6>
          <input id="newpassword" type="password" class="form-control" name="password" placeholder="Password" /></div>
                  <div className="hgt1"></div>
          <div className="passbtn">
          <div>
            <center><button type="submit" className="upti btn-sm" name="savep" onClick={this.show_msg_roomate.bind(this,5,1)}>Save</button></center></div>
            <div className="hgt"></div>
          <div>
          <center>
          <button type="submit" className="uptj btn-sm" name="discardp" onClick={this.show_msg_roomate.bind(this,6,1)} >Discard</button></center></div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className="grid_1"></div>
    </div>
</div>
</div>
    )

 
}
}

export default Acc