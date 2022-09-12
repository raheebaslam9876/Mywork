import React from 'react'
import { ReactDOM } from 'react-dom'
import App from './App';

class Searchbar extends React.Component
{
   
        state={
            term:''
        }

    FormSubmit=event=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
render(){
   
    return(
        <>
            <div className='ui container'>
              <div className='ui segment'>
                     <form className='feild' onSubmit={this.FormSubmit}>
                       <label>Enter Input</label>
                       <input type="text" 
                       value={this.state.term}
                        onChange={event=>{this.setState( {term:event.target.value})}}/>
                     </form>
              </div>
            </div>
        </>
    );
}

}

export default Searchbar;