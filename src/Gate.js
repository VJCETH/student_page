
import React,{Component} from 'react';
import Generator from "./Generator";
import QRCode from 'qrcode';
import Data from './data.json';
import './style_gate.scss'
import gatepass_history from './gatepass_history_data.json'
import imgurl from "./images/preloader/preloader.gif"
import axios from 'axios';
class Gate extends Component{
    constructor(props){
      super(props)
      this.state ={
        present_date:'',
        data:this.props.go,
        imageUrl:"",
        gate_pass_no:"2",
        modal_box_no:"1",
        gate_pass_access_data_history:[],
        gatepass_search_data:{},
        gatepass_table_handler:"0",
        view:"gate_pass_main_page",
        gate_pass_delete_no:-1,
        gatepass_load:false,
        server_response:"wait"
      }
    }
    componentDidMount(){
      function formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    let present_date= formatDate();
    this.setState({present_date:present_date});

    }
 change_view(i){
if(i==1){
      this.setState({gate_pass_no:"1",view:"gate_pass_2_form"})
    
}else{
        this.setState({gate_pass_no:"2",view:"gate_pass_main_page"})
  
}
 }
 show_history(){
  if( document.getElementById("myModal3").style.display = "none"){
    document.getElementById("myModal3").style.display = "block";
  }
 } 
 bt(){
  document.getElementById("myModal3").style.display = "none"
}

download(){

  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(Data.Register_number+"\n"+Data.First_name+" "+Data.Last_name);
         this.setState({imageUrl:response})
    }catch (error) {
      // console.log(error);
    }
  }

  generateQrCode();
}
show_gatepass_history(){
  this.setState({view:"gatepass_history"})
  // NOTE:: insert the axios.get request to fetch the gatepass history data from server.
  setTimeout(()=>{  
    let j=0,k=0,chk={},arr=[];
  for(let i=0;i<gatepass_history["data"].length;i++){
    if(j>9){
      chk[k]=arr;
        arr=[];
        j=-1;
        k=k+1;
    }
      arr.push(gatepass_history["data"][i]);
      j++;
      if(i===gatepass_history["data"].length-1){
        chk[k]=arr;
      }
  }
    this.setState({gate_pass_access_data_history:chk[this.state.gatepass_table_handler],gatepass_load:true,gatepass_search_data:chk})
  

  },2000)
  }  
  gatepass_history_previous(){
    this.setState({gatepass_table_handler:(parseInt(this.state.gatepass_table_handler)-1)+"",gate_pass_access_data_history:this.state.gatepass_search_data[(parseInt(this.state.gatepass_table_handler)-1)+""]})
  }
  gatepass_history_next(){
    this.setState({gatepass_table_handler:(parseInt(this.state.gatepass_table_handler)+1)+"",gate_pass_access_data_history:this.state.gatepass_search_data[(parseInt(this.state.gatepass_table_handler)+1)+""]})
  }
 send_gatepass_request(e){
  e.preventDefault();
  if((document.getElementById('exampleInputLeaveDate').value!="")&&(document.getElementById('vacation').checked===true||document.getElementById('sick').checked===true||document.getElementById('free-time').checked===true||document.getElementById('family_occasion').checked===true||document.getElementById('others').checked===true)){
    this.setState({modal_box_no:"1"})
    document.getElementById("myModal3").style.display = "block"
  }
}

delete_gate_pass_pending(){
  let arr = this.state.gate_pass_access_data_history;
  arr.splice(this.state.gate_pass_delete_no,1)
  this.setState({gate_pass_access_data_history:arr})
  document.getElementById("myModal3").style.display = "none";
}
show_delete_confirmation(j){
  this.setState({gate_pass_delete_no:j,modal_box_no:"2"})
  document.getElementById("myModal3").style.display = "block";
}
exit_show_gatepass_history(){
  this.setState({
    view:"gate_pass_main_page"
  })
}
show_hostel_contact(){
  this.setState({modal_box_no:"3"});
  document.getElementById("myModal3").style.display = "block";
}
async send_gatepass_request_confirmation(){
  let reason = ""+(document.getElementById('vacation').checked?"Vacation, ":"")+(document.getElementById('sick').checked?"Sick, ":"")+(document.getElementById('free-time').checked?"Free time, ":"")+(document.getElementById('family_occasion').checked?"Family Occasion":"")+(document.getElementById('others').checked?"Others":"");
  reason=reason.slice(0,reason.length-1);
  let msg = document.getElementById('reason').value
this.setState({modal_box_no:"4",server_response:"wait"})
document.getElementById("myModal3").style.display = "block";
  try {
    console.log( document.getElementById('exampleInputLeaveDate').value)
     await axios.post('http://localhost:5000/gatepass', {
      Regnum:this.props.go["Register_number"],
      name:this.props.go["First_name"]+" "+this.props.go["Last_name"],
      date: document.getElementById('exampleInputLeaveDate').value,
      Reason:reason,
      msg:msg,
      Batch:this.props.go["Batch"],
      img:this.props.go["img"],
      College_id:this.props.go["College_id"]
    }).then((response)=>{
      console.log(response)
this.setState({server_response:response.data["data"]})
  document.getElementById('exampleInputLeaveDate').value="";
  document.getElementById('vacation').checked=false;
  document.getElementById('sick').checked=false;
  document.getElementById('free-time').checked=false;
  document.getElementById('family_occasion').checked=false;
  document.getElementById('others').checked=false;
  document.getElementById('reason').value="";
    })
  } catch (error) {
this.setState({server_response:"fail"})
    console.error(error);
  }
  
  // insert the function to create a gatepass request in the backend work
}
render(){
  let dim = {
    "opacity": 0.8,
    "font-weight": 520,
   " border-bottom": "1px solid #b6b6b6"
  }
  let i=0,j=0;
    return(
        <div className='gte'>

           {/* <!-- Modal box  -->  */}
          <div id="myModal3" className="modal">
{this.state.modal_box_no==="1"?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to send gatepass request.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary"  name="save" style={{background:"#337ab7"}} onClick={this.send_gatepass_request_confirmation.bind(this)}>Confirm</button>
</div>
</div> 
</div>:this.state.modal_box_no==="2"?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to delete the pending gatepass request.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" name="save" style={{background:"#337ab7"}} onClick={this.delete_gate_pass_pending.bind(this)}>Confirm</button>
</div>
</div> 
</div>:this.state.modal_box_no==="3"?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>VJCETH Contact Details.</center>
    <center><p>Warden:{this.props.go["Hostel_contact_info"]["Warden"]}</p></center>
    <center><p>Adimistrator:{this.props.go["Hostel_contact_info"]["Admin"]}</p></center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this,0)} style={{background:"#337ab7"}}>Close</button>
</div>
</div> 
</div>:<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>
{this.state.server_response==="wait"?<div className="profile">

<center>Waiting for Server Response....</center>

<div className="submit-part" style={{minHeight:"100px"}}>
</div>
</div>:this.state.server_response==="success"?<div className="profile">

<center>Request Submitted Successsfully.</center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
</div>
</div>:<div className="profile">

<center>Error 408. Please try Again.</center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
</div>
</div>}
 
</div>}


</div>
 {/* <!-- Modal box  -->  */}

        {/* <!-- .Main Content  -->  */}
<div className="mbox">                       
    <div  className=" col1">
      <h1>Gate Pass</h1> 
    </div>
    <div className="main-grid">
      <div className="grid0">
        <button type="button" className ="sec n2" id="N2" onClick={this.change_view.bind(this,0)}  style={this.state.gate_pass_no==="1"?null:dim}>Pass-I</button>
        <button type="button" className ="sec n1 " id="N1" onClick={this.change_view.bind(this,1)} style={this.state.gate_pass_no==="2"?null:dim}>Pass-II</button>
      </div>
      <div className="grid1">
      <div className="he" >
          <div className="head">
            <div> <h5 ><b>Student Gate Pass Request</b></h5></div>
          </div>
          <div style={{paddingTop:"1.5vh", marginRight:"1vw"}}> 
          {this.state.view!="gatepass_history"?<a href="#"><input type="submit" className="btn btn-info btn-sm" value="History" style={{ color:"white",background:"#337ab7",fontSize:"small",float:"right"}} onClick={this.show_gatepass_history.bind(this)}></input></a>:<a href="#"><input type="submit" className="btn btn-info btn-sm" value="Go Back" style={{ color:"white",background:"#337ab7",fontSize:"small",float:"right"}} onClick={this.exit_show_gatepass_history.bind(this)}></input></a>}
          
           </div>
       
        </div>
        {this.state.view==="gate_pass_2_form"?<div className="p1" id="P1">
      <div>
        <center><p className="intro">*Please fill in this form with all the required information. An E-mail with a pin-code will be delivered  shortly after the leave request has been approved by authorities*<br/>Note:: if the date specified is 06/20/2021, the gatepass after authority authentication will be from 06/20/2021 6:30pm to 06/21/2021 7:30am.<br/>Note:: The response from the authorities for gatepass request will be either confirm or decline or meet me. </p></center>
      </div>
      <div className="filter_box">
            <div className="row" style={{margin:"0",paddingTop:"1vh",paddingLeft:"2vw"}}><h6><b>Gate Pass II Request Form</b></h6></div>
            <form>   
            <div className="row" style={{margin:"0",paddingTop:"1vh",paddingLeft:"5vw"}}>
              <div className="form-group form_width3" style={{marginRight:"5%"}}>
    <label for="exampleInputUsernaem"><b>Date for Gate pass II*: </b></label>
    <input type="date" className="form-control" id="exampleInputLeaveDate" min={this.state.present_date} required/>
  </div>
            </div>
            <div className="row" style={{margin:"0",paddingTop:"1vh",paddingLeft:"5vw"}}>
              <div className="form-group form_width2" style={{marginRight:"5%"}}>
    <label for="exampleInputReason"><b>Reason for Leave*: </b></label>
    <div className="g2">

          <div className="ck" style={{flexDirection:"row"}}>
  <label style={{marginRight:"10px"}}><input type="checkbox" id="vacation"/> Vacation</label>
  <label style={{marginRight:"10px"}}><input type="checkbox" id="sick"/> Sick</label>
  <label style={{marginRight:"10px"}}><input type="checkbox" id="free-time"/> Free-time</label>
  <label style={{marginRight:"10px"}}><input type="checkbox" id="family_occasion"/> Family Occasion</label>
  <label style={{marginRight:"10px"}}><input type="checkbox" id="others"/> Others(please specify below)</label>
        </div>
      </div>
  </div>
            </div>
            <div className="row" style={{margin:"0",paddingTop:"1vh",paddingLeft:"5vw"}}>
              <div className="form-group form_width3" style={{marginRight:"5%"}}>
    <label for="exampleInputReason"><b>Comments: </b></label>
  <textarea class="form-control" rows="3" id="reason" placeholder="Comments"></textarea>
  </div>
            </div>
            <div className="row" style={{margin:"0",paddingTop:"1vh",paddingLeft:"5vw",paddingBottom:"4vh"}}>
    
  <button type="submit" class="btn btn-primary" style={{backgroundColor:"#337ab7",marginRight:"3vw",marginTop:"2vh"}} onClick={this.send_gatepass_request.bind(this)}>Send Request</button>
  <button type="button" class="btn btn-primary" style={{backgroundColor:"#337ab7",marginRight:"3vw",marginTop:"2vh"}} >Discard</button>
  </div>
            </form></div>
      
    </div>:this.state.view==="gate_pass_main_page"? <div className="p2 " id="P2" style={{flexDirection:"row"}}>
      <div className="inst">
        <center><h5 className="he-i"><u>Read the Instructions</u></h5></center>
        <div className="intcn" >
          <p style={{color:"black",fontSize:"0.8rem"}}>1.Students who want to pass the gate between 6:30 pm and 7:30 am should acquire Gate Pass -II by completing the Pass-II form(select the Pass-II option above). </p>
          <p style={{color:"black",fontSize:"0.8rem"}}>2.Students who want to pass the gate between 7:30 am and 6:30 pm on holidays, only need to show your corresponding QR code(either the qr code from college or from the hostel profile) in the qr scanner </p>
          <p style={{color:"black",fontSize:"0.8rem"}}>3.You can save your hostel profile qr code by selecting the 'Download my QR' shown on this window.</p>
          <p style={{color:"black",fontSize:"0.8rem"}}>4.You can get your paper QR code by consulting your respective authorities in the hostel.</p>
          <p style={{color:"black",fontSize:"0.8rem"}}>5.The Gate Pass-II confirmation mail will only be delivered after the confirmation from the authorities. </p>
          <p style={{color:"black",fontSize:"0.8rem"}}>6.In case of emergency, contact:- Click <a href="#!" onClick={this.show_hostel_contact.bind(this)}>here</a> to access warden contact info. </p>
        </div>
      </div>
      <div className="qr">
        
         <center><Generator />
                <div className="down">
                  <div className="info-q">
                    <button className ="bq">{this.state.data.First_name[0]}</button>
                    {this.state.data.First_name} {this.state.data.Last_name}
                  </div>
                  <h6 style={{fontWeight:"bold"}}>Reg no  : {this.state.data.Register_number}</h6>
                  <button className="dow btn btn-primary" onClick={this.download.bind(this)}>
                  <a href={this.state.imageUrl} download="Qrcode">Download My QR Code</a>
                  </button>
                </div>
        </center>
        </div>
    </div>:<div className="p3 " id="P3" style={{flexDirection:"row"}}>
    <div>
           
          <div className="gatepass_history" style={{marginBottom:"1vh"}}>
          <div className="row" style={{margin:"0",overflowY:"hidden",overflowX:"scroll",width:"100%",height:"55h",marginBottom:"5vh",marginTop:"6vh"}}>

<table class="table table-fixed">
                        <thead className="thead-dark form_font">
                            
                              <tr>
                              <th scope="col" class="col-1">#</th>
                                <th scope="col" class="col-3">Date</th>
                                <th scope="col" class="col-3">Reason</th>
                                <th scope="col" class="col-3">Status</th>
                                <th scope="col" class="col-1">Action</th>
                                
                            </tr>
                        </thead>
                        {this.state.gatepass_load?<tbody>
                       {this.state.gate_pass_access_data_history.map(dt=>{
                     j=j+1;
                       return(
               <tr  key={j}>  
               <th scope="row" class="col-1">{j}</th>
               <td class="col-2">{dt.date}</td>
                <td class="col-4">{dt.Reason} </td>
                <td class="col-3">{dt.Status} </td>
                <td class="col-1"> <a href="#!">
<button type="button" class="btn btn-danger btn-sm" disabled={dt.Status!=="Pending"} onClick={this.show_delete_confirmation.bind(this,j-1)}>Delete</button></a></td>
                 </tr> 
                       )
                   })}
                          
                       </tbody>:<tbody><tr  >  
               <th scope="row" class="col-1"></th>
               <td class="col-3"></td>
                <td class="col-3"><div className="preloader2"></div></td>
                <td class="col-3"></td>
                <td class="col-1"> </td>
                 </tr> </tbody>}      
                    </table>
                    
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}}>
                      <div style={{width:"80%"}}></div>
                    <div style={{paddingTop:"0.5vh"}}> <a href="#!"><input type="submit" className="btn btn-info btn-sm" value="Previous" style={{ color:"white",background:"#337ab7",fontSize:"small",float:"right",marginLeft:"2vw"}} onClick={this.gatepass_history_previous.bind(this)} disabled={ this.state.gatepass_table_handler==="0"||!this.state.gatepass_search_data["0"]}></input></a></div>
                    <div style={{paddingTop:"0.5vh" }}> <a href="#!"><input type="submit" className="btn btn-info btn-sm" value="Next" style={{ color:"white",background:"#337ab7",fontSize:"small",float:"right",marginLeft:"1vw"}} onClick={this.gatepass_history_next.bind(this)} disabled={this.state.gatepass_table_handler===Object.keys(this.state.gatepass_search_data).pop()|| !this.state.gatepass_search_data["0"]}></input></a></div>
                    </div>
          </div>
             </div>
    </div>}
      
   
    
  </div>
      <div className="grid2"></div>
    </div>
</div>
{/* <!-- ./Main Content  -->  */}
  </div>
 
    )
}
}

export default Gate