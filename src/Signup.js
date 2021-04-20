import {Component} from "react"
class Signup extends Component{
    constructor(){
        super()
        this.state ={
          
        }
    }
    user = {}

    getEmail =(event)=>{
        this.user.email = event.target.value
    }
    getPassword = (event)=>{
        this.user.password = event.target.value
    }
    register = ()=>{
        if(!this.user.email || !this.user.password){
            this.setState({
                errorMessage:"Please Fill Details"
            })
        }
        else{
           this.setState({
               errorMessage:null
           })
        }
        console.log("...... user details" , this.user)
       
    }
    render(){
        return(
            <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
              <button className="btn btn-primary" onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Signup