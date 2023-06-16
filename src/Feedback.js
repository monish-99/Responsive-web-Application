import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index'
import{BrowserRouter ,Route ,Link,NavLink,Swtich, Routes, Outlet, } from 'react-router-dom';
import {FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa';


class Feedback extends React.Component{
    constructor(){
        super();
        this.state={subject:"",body:""}
    }
    validateForm = event =>{
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("body").value;
        window.location.href="mailto:monishram009@gmail.com?subject="+subject+"&body="+body;
        event.preventDefault();
        return false;
    }

    render(){
        return(
            <body>
                <div class="heading">
                    <div class="container-fluid bg-light p-5 text-center" id='heading'>
                        <h1 class="myname">Monish ram.B</h1>
                        <p class="myoccupation">Frontend developer</p>

                        <ul class="nav nav-pills nav-justified" id="vanigation">
                            <li class="nav-item">
                                <a class="nav-link active" href='/'>
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/academic'>
                                    academic
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/project'>
                                project
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/feedback'>
                                feedback
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                    <div class="heading">
                        <h1 style={{textAlign:"center" ,color:"black"}}>Mail Form</h1>
                        <div class="container" id="mailme">
                            <div class="row">
                                <div class="col-sm-8 offset-md-2">
                                    <form class="justify-content-center" onSubmit={this.validateForm} target="_blank" method="GET">
                                    
                                        <div class="form-group form-group-lg">
                                            <label class="skills" for="subject">
                                                <strong>name</strong>
                                            </label>
                                            <input type="text" id="subject" class="form-control" required />
                                        </div>
                                        <div class="form-group form-group-lg">
                                            <label class="skills" for="body">
                                                <strong>Feedback</strong>
                                            </label>
                                            <textarea id="body" class="form-control" row="5" required />
                                            </div>
                                            <br />
                                           
                                            <input type="submit" value="send" id="navigation" class="btn btn-primary"  />
                                        
                                    </form>
                                </div>
                            </div>
                            </div>
                            </div>
                    
                    
                            <div class="container-fluid bg-light p-5 text-center" id="footer">
                                <ul class="nav justify-content-center">
                                    <li class="nav-iterm">
                                    <FaGithub class="icons github"/>  
                                    </li>
                                    <li>
                                   
                                   <FaTwitter class="icons twitter"/>
                                       
                                        
                                    </li>
                                </ul>
                     </div>
                   
                       
                
         </body>

        );
            
        
    }
}
export default Feedback;