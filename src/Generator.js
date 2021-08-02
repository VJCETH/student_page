import React, {Component} from 'react';
import QRCode from 'qrcode';
import Data from './data.json';

class Generator extends Component{
  constructor(props){
    super(props)
    this.state ={
    imageUrl:""
    }
  }

  componentDidMount(){
    const generateQrCode = async () => {
      try {
        var msg="{\"Register Number\":"+Data.Register_number+",\"Name\":"+Data.First_name+" "+Data.Last_name+"}";
        console.log(msg)
            const response = await QRCode.toDataURL(msg);
           this.setState({imageUrl:response})
      }catch (error) {
        console.log(error);
      }
    }

    generateQrCode();
  }

  render(){

    return(

      
      <div>
            
              {this.state.imageUrl ? (
                <a href={this.state.imageUrl} download>
                    <img src={this.state.imageUrl} alt="img"/>
                </a>) : null}

                </div>
      
      
    )
  }
}
export default Generator