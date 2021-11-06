import React from 'react';
import axios from 'axios';
//import { Form } from 'antd';


//const FormItem = Form.Item;

class NameForm extends React.Component {

 
    constructor(props) {
      
      super(props);
      this.handleNomChange = this.handleNomChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.res =  JSON.parse(JSON.stringify(Object.assign({},this.getUser())));  
      this.state =({
        nom: ''
      })
    }
    
  
    handleNomChange = event => {this.setState({ nom: event.target.value })}
    
    


    getUser = async () => 
    {

      try {
        const response = await axios.get('http://localhost:8080/posts');
        console.log("getUser : "+response);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const user = {
          nom: this.state.nom
        }
    
        axios.post('http://localhost:8080/create', 
        { user})
        .then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(err => {
          console.log(err, err.response);
        });
      }
      
  
      // post sans formulaire
      sendData = () => {
        axios
          .post(
            'http://localhost:8080/addname',
            {
              nom: 'eve'
              // password: 'pistol'
            },
            {
            
            }
          )
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err, err.response);
          });
      };
    handleChange = event =>{
      this.setState({ nom: event.target.value});
    }
    render() {
   
      return (
        <div>
         
         <form onSubmit = { this.handleSubmit }>
          <label> Person Name:
            <input type = "text" value ={this.state.nom} name={this.state.nom}  onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Add </button>
        </form>
        
          <button onClick={this.sendData}>send</button>
        </div>
        
      );
      
    }
  }

  export default  NameForm;

  /*{this.res.map(item => {
    return <li>{item.title}</li>;
})} */