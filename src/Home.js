import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index';
import {FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa';
import{BrowserRouter ,Route ,Link,NavLink,Swtich, Routes, Outlet, } from 'react-router-dom';






class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <body >
                <div class="heading" style={{backgroundColor:'black'}}>
                    <div class="container-fluid bg-light p-5 text-center" id='heading'>
                        <h1 class="myname">Monish ram.B </h1>
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
                    <div class="container">
                        <div class="row">
                         <div class="col-sm-6">
                            <div class="rounded-circle">
                                <img 
                                src="https://media.licdn.com/dms/image/D5635AQEPiHPgpXRgoA/profile-framedphoto-shrink_400_400/0/1685964868507?e=1686945600&v=beta&t=EvDeEP4UBpOlEtn4Tqemnl0oS57P1BND6u2423r5Fkc"
                                class="rounded-circle mx-auto d-block"
                                alt="my photo"
                                width="130px"
                                height="150px"
                                />
                            </div>
                            <br />
                            </div>    
                            <div class="col-sm-6">
                                <h2 class="myskills">career objective</h2>
                            <br />
                            <p class="skills">
                            FRONT-END DEVELOPER WITH A STRONG WORK ETHIC AND A PASSION FOR BUILDING INTERACTIVE, USER-FRIENDLY WEBSITES. LOOKING FOR A CHALLENGING ROLE WHERE I CAN USE MY KNOWLEDGE OF HTML, CSS, JAVASCRIPT, AND REACTJS TO CREATE CUTTING-EDGE WEB SOLUTIONS AND SUPPORT AN ORGANIZATION'S GROWTH
                            </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="myskills">Techinal skills</h2>
                                <br/>
                                <ul class="skills">
                                    <li>
                                        Frontend language - HTML ,CSS ,Javascript ,ReactJS
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <h2 class="myskills">certification</h2>
                                <br />
                                <ul class="skills">
                                    <li>
                                        I have done frontend developement in Besant techology 
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div class="col-sm-12">
                                <h2 class="myskills">my project</h2>
                                <br />
                                <table class="table table-dark table-striped">
                                    <thead>
                                    <tr>
                                        <th>project domine</th>
                                        <th>programing languages</th>
                                        <th>Project Title</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Front end developement </td>
                                            <td>HTML,CSS,Java Script,React JS</td>
                                            <td>React JS TODO list Application</td>
                                        </tr>
                                        <tr>
                                            <td>Responsive web Application</td>
                                            <td>HTML,CSS,Java Script,Bootstrap,React JS</td>
                                            <td>Responsive web Design</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div class="col-sm-12">
                                <h2 class="myskills">Education Qulification</h2>
                                <br />
                                <table class="table table-dark table-striped">
                                    <thead>
                                    <tr>
                                        <th>Degree</th>
                                        <th>School/College</th>
                                        <th>YOP</th>
                                        <th>Percentage</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>B-TECH Automobile engnieering  </td>
                                            <td>SRM Institute of Science and Technology</td>
                                            <td>2023</td>
                                            <td>82%</td>
                                        </tr>
                                        <tr>
                                            <td> DME  </td>
                                            <td>SRM Polytechnic College</td>
                                            <td>2018</td>
                                            <td>54%</td>
                                        </tr>
                                        <tr>
                                            <td> 10TH </td>
                                            <td>Keren Matriculation Higher Secondary School</td>
                                            <td>2015</td>
                                            <td>74%</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            </div>
                        
                   
                        </div>
                           
                            <div className='text-center p-5' id="footer" style={{ backgroundColor:  'rgba(0, 0, 0, 0.05)' }}> 
                                <ul class="nav justify-content-center">
                                    <li class="nav-iterm">
                                    <FaGithub class="icons github"/>  
                                   
                                    <FaTwitter class="icons twitter"/>
                                        
                                    </li>
                                </ul>
                            </div>
                        
                        
                </body>          
        );
            
        
    }
}
export default Home;