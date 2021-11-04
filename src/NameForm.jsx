import React from 'react';
import axios from 'axios';




const getItems = () => fetch("http://localhost:8080/posts").then(res => res.json());

/*const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);*/ 

class NameForm extends React.Component {

 
    constructor(props) {
      
      super(props);
      //  console.log("get item : "+ this.fetchData());
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.res =  JSON.parse(JSON.stringify(Object.assign({},this.getUser())));  
      this.state =({
        name: ''
      })
    }
    
    

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
  
      axios.post(`http://localhost:8080/addname`, { user })
        .then(res => {
          console.log("res : "+res);
          console.log(res.data);
        })
    }

    

    //récupère les données d'une url avec axios
     fetchData = async () => {
      const { data } = await axios.get('http://localhost:8080/posts')
        this.setState({posts: data, isLoading: false})
        console.log("fetch data "+this.state.posts)
                    
        };


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

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { nom } = this.state;
    
        axios.post('http://localhost:8080/addname', {
          nom: this.state.nom
        })
      }
  
    render() {
      //var stockData = this.fetchData();
      //console.log("type : "+typeof(this.stockData));
      //console.log(this.fetchData());
      
        //var stockData = getItems();
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="nom" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
          
          
          
          
        </div>
        
      );
      
    }
  }

  export default  NameForm;

  /*{this.res.map(item => {
    return <li>{item.title}</li>;
})} */