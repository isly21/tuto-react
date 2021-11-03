import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';



const getItems = () => fetch("http://localhost:8080/posts").then(res => res.json());

/*const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);*/ 

class NameForm extends React.Component {

 
    constructor(props) {
      
      super(props);
     
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
    
    //récupère les données d'une url avec axios
    fetchData = () => {
        return axios
                    .get(`http://localhost:8080/posts`,{ crossdomain: true })
                    .then( (result) =>{
                      this.setState({
                        json: result.data   // ***
                    });
      })};
    
     

   
      


      /*stockData = [
        {
          company: "Twitter Inc",
          ticker: "TWTR",
          stockPrice: "22.76 USD",
          timeElapsed: "5 sec ago",
        },
        {
          company: "Square Inc",
          ticker: "SQ",
          stockPrice: "45.28 USD",
          timeElapsed: "10 sec ago",
        }
      ]*/


      
  
    render() {
      //var stockData = this.fetchData();
      //console.log("type : "+typeof(this.stockData));
        //var data = { a: 1, b: 2 };
        console.log("get item : "+getItems());
        var stockData = getItems();
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nom :
              
            </label>
            <input type="submit" value="Envoyer" />   
          </form>
          
          
          
        </div>
        
      );
    }
  }

  export default  NameForm;

  function GetData(){

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      try {
        const data = await fetch("http://localhost:8080/posts");
        const items = await data.json();
        // console.log("HELLO FROM INSIDE OF FETCHITEMS", items);
        setItems(items);
        console.log("getData : "+items);
      } catch (error) {
        console.error(error);
      }
      
        return 
        (
          <div>
            
            {items.map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        );
      

  };

  }