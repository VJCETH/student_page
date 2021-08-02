
import React,{Component} from 'react';
import './style_food_corner.scss'
class FoodCorner extends Component{
    constructor(props){
      super(props)
      this.state ={
        data:this.props.go,
        modal_box_no:"1",
        quality_feedback:"",
        service_feedback:"",
        feedback_message:"",
        server_response:"wait"
      }
    }
    send_request(msg){
      if(msg===1){
        // NOTE:: insert the server request for food_feedback
        this.setState({server_response:"wait",modal_box_no:"3"})
        setTimeout(()=>{
          this.setState({server_response:"success"})
        },2000)
      }else if(msg===2){
        // NOTE:: insert the server request for medical request
        this.setState({server_response:"wait",modal_box_no:"3"})
        setTimeout(()=>{
          this.setState({server_response:"success"})
        },2000)
      }
    }
    response(i){
      if(i==1){
        if(document.getElementById('food_comments').value!="" ){
          if(document.getElementById('quality_feedback_excellent').checked){
            this.setState({quality_feedback:"Excellent"})
          }else if(document.getElementById('quality_feedback_good').checked){
            this.setState({quality_feedback:"Good"})
          }else if(document.getElementById('quality_feedback_bad').checked){
            this.setState({quality_feedback:"Bad"})
          }
          if(document.getElementById('service_feedback_excellent').checked){
            this.setState({service_feedback:"Excellent"})
          }else if(document.getElementById('service_feedback_good').checked){
            this.setState({service_feedback:"Good"})
          }else if(document.getElementById('service_feedback_bad').checked){
            this.setState({service_feedback:"Bad"})
          }
          this.setState({feedback_message:document.getElementById('food_comments').value,modal_box_no:"2"});
          
        document.getElementById("myModal4").style.display = "block";
      
        }}else{
        if(document.getElementById("aller").value!=""&&document.getElementById("med").value!=""&&document.getElementById("fod").value!=""){
          this.setState({modal_box_no:"1"})
          document.getElementById("myModal4").style.display = "block";
        }
      }
    }
    bt(){
      document.getElementById("aller").value="";
      document.getElementById("med").value="";
      document.getElementById("fod").value="";
      document.getElementById('food_comments').value="";
  document.getElementById("myModal4").style.display = "none";
    }
render(){
    return(
        <div className='food_corner'>
          <div id="myModal4" className="modal">
{this.state.modal_box_no==="1"?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to send your medical information.</center>
    
<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" name="save" style={{background:"#337ab7"}}  onClick={this.send_request.bind(this,2)}>Confirm</button>
</div>
</div> 
</div>:this.state.modal_box_no==="2"?<div className="modal-content">
<div className="modal-header">
<h2 style={{color:"white"}}>Message Box</h2>
<span className="close" id='cls' onClick={this.bt.bind(this)}>&times;</span>

</div>

<div className="profile">

    <center>Confirm to send the following feedback.</center>
    <center><p>Food Feedback:{this.state.quality_feedback}</p></center>
    <center><p>Service Feedback:{this.state.service_feedback}</p></center>
    <center><p>Message: {this.state.feedback_message}</p></center>

<div className="submit-part">
<button type="submit" className="btn btn-primary" onClick={this.bt.bind(this)} style={{background:"#337ab7"}}>Close</button>
<button type="submit" className="btn btn-primary" onClick={this.send_request.bind(this,1)} style={{background:"#337ab7"}}>Confirm</button>
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
 
</div>}


</div>
            {/* <!-- .Main Content  -->  */}
<div className="mbox">                       
    <div  className=" col1">
      <h1>Food Corner</h1> 
    </div>
    <div className="main-grid">

      <div className="grid1">

    <div className="p1">
      <div className="inst">
        <center><h5 className="he-i">Hostel Menu</h5></center>
        <div className="row" style={{margin:"0",overflowY:"hidden",overflowX:"scroll",width:"100%",height:"55h",marginBottom:"5vh",marginTop:"6vh"}}>

<table class="table table-fixed">
                        <thead className="thead-dark form_font">
                            
                              <tr>
                              <th className="col-2" style={{fontWeight:"0.7rem"}}>Days</th>
                              <th className="col-3" style={{fontWeight:"0.7rem"}}>Breakfast</th>
                              <th className="col-3" style={{fontWeight:"0.7rem"}}>Lunch</th>
                              <th className="col-2" style={{fontWeight:"0.7rem"}}>Snacks</th>
                              <th className="col-2" style={{fontWeight:"0.7rem"}}>Dinner</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                        <td className="col-2 dark">Monday</td>
            <td className="col-3">Vada + Masala curry, (or Upma
              + Banana small + Pappadam),
              Coffee/ Tea/ Milk (or Juice)
              </td>
            <td className="col-3">Boiled Rice/ Raw Rice, Fish curry, Sambar,
              Daal, Upperi, Pappadam, Pickle, Curd, Sweet
              </td>
            <td className="col-2">Banana Fry/ Samosa
              Tea/Coffee</td>
            <td className="col-2">Ghee rice, Chicken curry/ Veg. Curry/
              Sweets, Salad, Pickle
              </td>
             </tr> 
             <tr>
              <td className="col-2 dark">Tuesday</td>
              <td className="col-3">Idly + Vada, Sambar, Chutney,
                Boiled egg,
                Coffee/Tea/Milk</td>
              <td className="col-3">Boiled Rice/Raw Rice, Fish Fry or Sweets, Fish
                curry, Kalan, Pickle, Butter milk, Thoran,
                Pappadam, Rasam, Sambar, Daal
                </td>
              <td className="col-2">Puffs (Egg or Veg.),
                Tea/Coffee
                </td>
              <td className="col-2">Vellappam, Chicken Fry/ Gobi
                Manjurian,Veg curry, Fruit salad
                </td>
               </tr> 
               <tr >
                <td className="col-2 dark">Wednesday</td>
                <td className="col-3">Puttu + Kadala / Cherupayar
                  curry/Small Banana + Pappadam,
                  Coffee/ Tea/ Milk</td>
                <td className="col-3">Boiled Rice/Raw Rice, Fish Fry or Sweets,
                  Sambar, Fish curry, Thoran, Pulienchi,
                  Pappadam, Curd, Daal, Pickle
                  </td>
                <td className="col-2">Uzhunnuvada/
                  Kachhori,
                  Tea/Coffee
                  </td>
                <td className="col-2">Chappathi, Chicken/ Veg curry or
                  Cashew Nut Paneer, Sweet.
                  </td>
                 </tr> 
                 <tr >
                  <td className="col-2 dark">Thursday</td>
                  <td className="col-3">Vellappam, Stew curry/ Bhaji
                    curry,
                    Coffee/Tea/Milk(or Juice)</td>
                  <td className="col-3">Boiled Rice/Raw Rice, Fish Fry or Sweets,
                    Erashery, Sambar, Daal, Pappadam, Pachadi,
                    Butter milk, Pickle.
                    </td>
                  <td className="col-2">Alu Bonda/ Ela Ada,
                    Tea/ Coffee
                    </td>
                  <td className="col-2">Pathiri, Chicken chilly, Veg.curry,
                    Gulab Jam</td>
                   </tr> 
                   <tr >
                    <td className="col-2 dark">Friday</td>
                    <td className="col-3">Masala Dosa, Sambar, Chutney
                      Coffee/ Tea/Milk
                      </td>
                    <td className="col-3">Ghee rice, Chicken Fry, Salad, Pickle,
                      Veg.curry, Pappadam</td>
                    <td className="col-2">Pakkavada/
                      Parippuvada, Tea/
                      Coffee
                      </td>
                    <td className="col-2">Boiled Rice/ Raw Rice, Sambar,
                      Upperi, Fish curry, Omelet, Rasam,
                      Pappadam, Pickle, Milk/Juice
                      </td>
                     </tr> 
                     <tr >
                      <td className="col-2 dark">Saturday</td>
                      <td className="col-3">Noolputtu, Kadala/ Cherupayar
                        curry,
                        Coffee/Tea/Milk</td>
                      <td className="col-3">Boiled Rice/ Raw Rice, Sambar, Payasam,
                        Pickle, Koottu curry, Kondattam Fry, Butter
                        milk, Pappadam, Rasam
                        </td>
                      <td className="col-2">Neyyappam/
                        Unniappam,
                        Tea/Coffee
                        </td>
                      <td className="col-2">Kappa, Fish curry (Chilly) or Boiled
                        Rice/Raw Rice, Thoran, Sambar, Butter
                        milk, Pappadam, Pickle, Fruit salad</td>
                       </tr> 
                       <tr >
                        <td className="col-2 dark">Sunday</td>
                        <td className="col-3">Uthappam, Chutney, Coffee /Tea /
                          Milk
                          </td>
                        <td className="col-3">Chicken Biriyani, Chutney, Pickle, Salad,
                          Banana fruit 
                          </td>
                        <td className="col-2">Plum
                          Cake/Kayappam,
                          Tea/Coffee(or juice)
                          </td>
                        <td className="col-2">Boiled Rice/Raw Rice, Sambar, Thoran,
                          Pappadam, Pickle, Chutney, Pulishery.</td>
                         </tr> 
                        
                       </tbody>   
                    </table>
                    
                    </div>
      </div>

    </div>
  </div>
      <div className="grid2" style={{"overflowX":"hidden"}}>
      <div className="container-fluid">
        <div className="row" style={{borderBottom:"1px solid rgb(163, 163, 163)",paddingLeft:"3vw"}}>
        <center><u><div className="b1-he">Comment/Food Feedback Box</div></u></center>
            
        <div className="b1-con">
              <div>Quality of Food:</div>
              <div className="lf">
                <p style={{fontSize:"0.8rem"}}>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio" name="Quality"  value="excellent" defaultChecked id="quality_feedback_excellent"/>Excellent</label>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio" name="Quality"  value="good" id="quality_feedback_good"/>Good</label>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio"name="Quality" value="bad" id="quality_feedback_bad"/>Bad</label>
              </p>
              </div>
              <div>Service:</div>
              <div className="lf">
                <p style={{fontSize:"0.8rem"}}>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio" name="Service"  value="excellent" defaultChecked id="service_feedback_excellent"/>Excellent</label>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio" name="Service"  value="good" id="service_feedback_good"/>Good</label>
                <label class="radio-inline" style={{marginRight:"1vw",color:"black" , fontWeight:"bold"}}><input type="radio"name="Service" value="bad" id="service_feedback_bad"/>Bad</label>
              </p>
              </div>
              <div>Comments:</div>
              <div className="txt-ar">
                <textarea className="text-ar form-control" type="textarea" name="comments"  placeholder="Your Comments" id="food_comments" ></textarea>
              </div>
              <div className="br" >
              <input type="submit" name="sub" className="btn btn-primary btn-sm fesub" onClick={this.response.bind(this,1)} disabled={!this.state.data.Food_Survey}/>
            </div>
            </div>
            
        </div>
        <div className="row" style={{paddingLeft:"3vw"}}>
        <center><u><div className="b1-he">Food Preference Box(Medical)</div></u></center>
            <div className="b1-con">
              <div>Type of illness/Allergies*:</div>
              <div className="lf">
                <input type="text" name="illness" id="aller" className="clr form-control" required/>
              </div>
              <div>Medicine which is using*:</div>
              <div className="lf">
                <input type="text" name="illness" id="med" className="clr form-control" required/>
              </div>
              <div>Food Prefered*:</div>
              <div className="lf">
                <input type="text" name="illness" id="fod" className="clr form-control" required/>
              </div>
              <div>
              <div className="br" >
              <input type="submit" name="sub" className="btn btn-primary btn-sm fesub" onClick={this.response.bind(this,2)}/>
            </div>
            </div>
            </div>
            
        </div>
        </div>
        


      </div>
      </div>
</div>
{/* <!-- ./Main Content  -->  */}
  </div>
 
    )
}
}

export default FoodCorner