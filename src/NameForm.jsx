import React from 'react';
import axios from 'axios';
import useFetch from 'react-fetch-hook';


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
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
        return axios.get("https://randomuser.me/api/")
              .then((response) => console.log(response.data));}

    /*getData(){
        var data = useFetch("https://randomuser.me/api/");
        return data;
        //console.log(data);
    }*/
    render() {
        //this.fetchData();
        //var data = { a: 1, b: 2 };
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />   
          <div><pre>{JSON.stringify(this.getData()) }</pre></div>
        </form>
      );
    }
  }

  export default  NameForm;