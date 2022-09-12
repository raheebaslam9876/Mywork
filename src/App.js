import logo from './logo.svg';
import './App.css';
import Usergreeting from './Usergreeting';
import Listrendering from './Listrendering';
import Form from './Form';
import Ref from './Ref';
import FRParent from './FRParent';
import About from './About';
import Searchbar from './Searchbar'
import  React from 'react';
import axios from 'axios';
class App extends React.Component {
  Submitform(term)
  {
    axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query:term
      },
      headers:{
        Authorization : 'Client-ID 12mh9WFZ9SBy1TkzsF3At0iieHfjmQxIEMwcROmnX5w'
      }
    });
  }
  render(){
  return (
 
      <Searchbar onSubmit={this.Submitform}/>
   
  );
  }
}

export default App;
