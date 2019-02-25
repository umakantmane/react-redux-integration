import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addArticle, setMenus, addMenu } from '../../store/actions/UserActions';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:""
        }
    }

    setAuthMenu(){
             
        let menu = [
            {
                id:1,
                route:"sign_up",
                displayName:"logout(umakantmaneit@gmail.com)"
            }
        ];

        this.props.initMenu(menu);
    }

    addAuthMenu(){

        let menu = [
            {
                id:1,
                route:"profile",
                displayName:"Profile"
            }
        ];

        this.props.addMenu(menu);

    }
    componentWillMount(){
        
        console.log("Props", this.props);
        let menu = [
            {
                id:1,
                route:"sign_up",
                displayName:"SignUp"
            },
            {
                id:2,
                toute:"login",
                displayName:"Login"
            }
        ];

        this.props.initMenu(menu);
    }
    pushToStore(){
        console.log(this.state.title);
        this.props.addArticle({title:this.state.title});
        this.setState({ title: "" });
    }
    render() {

        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Page 1-1</a></li>
                                    <li><a href="#">Page 1-2</a></li>
                                    <li><a href="#">Page 1-3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Page 2</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            {
                                this.props.menus.map( row =>{
                                    return <li><a href="#"><span class="glyphicon glyphicon-user"></span>{ row.displayName} </a></li>
                                })
                            }
                            {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                        </ul>
                    </div>
                </nav>

                <div class="container">
                   
                   <input 
                   type="text"
                   class="form-control"
                   value={this.state.title}
                   onChange={(e)=>this.setState({title:e.target.value})} 
                   />
                    <button 
                    className="btn btn-defult"
                    onClick={this.pushToStore.bind(this)}
                    > Submit </button>

                    <button 
                    className="btn btn-defult"
                    onClick={this.setAuthMenu.bind(this)}
                    > login? </button>

                    <button 
                    className="btn btn-defult"
                    onClick={this.addAuthMenu.bind(this)}
                    > Add </button>
                  
                  {
                      this.props.articles.map(row=>{
                          return <p>{ row.title }</p>
                      })
                  }
                   
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { articles: state.articles, menus:state.menus};
}

function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticle(article)),
        initMenu:menus=>dispatch(setMenus(menus)),
        addMenu:menu=>dispatch(addMenu(menu))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

