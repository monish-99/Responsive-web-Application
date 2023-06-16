import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index'
import {FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa';


import{BrowserRouter ,Route ,Link,NavLink,Swtich, Routes, Outlet, } from 'react-router-dom';

class Academic extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <body class="Body">
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

                    <div class="container">
                        <div class="row">
                        <div class="col-sm-12">
                            <h2>SRM Institute of Science and techology (2020-2023)</h2>
                        </div>
                     
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVd12FGpjnBx8s53vqMjfx27mFj7m_6ueO68t_1p_gZieVL7XtCbCi9J1e9Js6pqPzGVc&usqp=CAU' 
                                          width="300px"
                                          height="300px"
                                          />
                               
                            </div>
                            <br />
                            <br />
                       
                       
                        <div class="col-sm-8">
                            
                                <h4>Bachelor Degree</h4>
                                <br />
                                <p class="college"> 
                                I pursued my Bachelor's degree in Automobile Engineering from SRM University. With a keen interest in the automotive industry, I embarked on my educational journey to gain comprehensive knowledge and skills in the field. During my time at SRM University, I learned about various aspects of automobile engineering, including vehicle design, manufacturing processes, automotive systems, and maintenance. I engaged in practical projects and hands-on experiences that provided me with a solid foundation in the domain.In B.Tech Automobile Engineering from SRM University not only equipped my technical expertise but also instilled in my strong problem-solving mindset and a passion for innovation in the automotive sector.
                                </p>
                                
                                <h4 class="myskills">Academic</h4>
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
                                        </tbody>
                                        </table>
                        </div>
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <h2>SRM Polytechnic college (2015-2018)</h2>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLc6GNmv6Z4pqPuQgubLVhv_g6EsA3OYuskPgdRtRtTnO36CuICj-bMk3Mlx7FHaUptY&usqp=CAU"
                                     width="300px"
                                     height="300px"></img>
                            </div>
                            <br />
                            <div class="col-sm-8">
                                <h4>Diploma</h4>
                                <br />
                                <p class="diploma">
                                By obtaining a diploma in Mechanical Engineering, I have acquired valuable knowledge and skills in various aspects of the field. This includes mechanical design, manufacturing processes, thermodynamics, fluid mechanics, and other fundamental concepts. With my educational background, I have a solid foundation to pursue a career in the mechanical engineering industry, whether it be in areas such as automotive, aerospace, energy, or any other field that requires expertise in mechanical systems. My diploma from SRM University demonstrates your commitment to learning and your readiness to apply your skills in practical settings.
                                </p>

                                <h4 class="myskills">Academic</h4>
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
                                            <td> DME  </td>
                                            <td>SRM Polytechnic College</td>
                                            <td>2018</td>
                                            <td>54%</td>
                                            
                                        </tr>
                                        </tbody>
                                        </table>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>Keren Matriculation Higher Secondary School</h2>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src="https://www.kerenpublicchk.in/images/Moto.jpeg"
                                     width="300px"
                                     height="300px"></img>
                            </div>
                            <div class="col-sm-8">
                                <h4>School</h4>
                                <p class="school">In my 10th standard, I was exposed to a comprehensive curriculum that covered a wide range of subjects, including mathematics, science, social studies, English, and languages. The school employed highly qualified and dedicated teachers who imparted knowledge and encouraged critical thinking among the students. Their guidance and support were instrumental in helping me grasp complex concepts and develop a strong foundation in each subject.Overall, my 10th standard experience at Keran Matriculation Higher Secondary School was enriching and transformative. It equipped me with the necessary skills and knowledge to excel academically and prepared me for the next phase of my education. I am grateful for the wonderful memories, lifelong friendships, and valuable lessons I gained during my time at the school.</p>

                                <h4 class="myskills">Academic</h4>
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
                    </div>
                    </div>
                     
                    
                            <div class="container-fluid bg-light p-5 text-center" id="footer">
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
export default Academic;