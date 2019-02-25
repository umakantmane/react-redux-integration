import React, { Component } from 'react';
import Layout from './src/components/layouts/Layout'
import { connect } from 'react-redux';

class App extends Component{
   render(){
      return(
         <div> 
            <Layout />          
         </div>
      );
   }
}
export default connect()(App);