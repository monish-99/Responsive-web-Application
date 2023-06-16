import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index'
import{BrowserRouter ,Route ,Link,NavLink,Swtich, Routes, Outlet, } from 'react-router-dom';
import {FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa';



class Project extends React.Component{
    constructor(){
        super();
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

                    

                      


                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3>Responsive web Design</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src="https://uizard.io/static/67a304587bb3f1fcf583be4add5d2f41/d9bdf/marketplace-website-cover.png"
                                width="400px"
                                height="300px" />
                 
                            </div>
                            <div class="col-sm-6">
                                <strong>"A Responsive Web Design Portfolio Built with HTML, CSS, Bootstrap, JavaScript and React JS"</strong>
                                <p>1.The goal of this project is to develop a responsive web design portfolio that showcases my skills, projects, and experiences. The portfolio will be built using popular web development technologies such as HTML, CSS, Bootstrap, JavaScript, and ReactJS. The resulting portfolio website will adapt to different screen sizes and devices, ensuring an optimal user experience for visitors across desktops, tablets, and mobile devices.</p>
                                <p>2.By combining these technologies and implementing the mentioned features, my Responsive Web Design portfolio will be visually appealing, user-friendly, and accessible across various devices. It will effectively showcase my projects and skills to potential clients or employers, while also demonstrating my proficiency in web development.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h3>React JS TODO list Application</h3>
                        </div>
                        </div>
                        </div>     
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src="https://novu.co/static/32fae314e03e223d20dc22600614320f/9585e/cover-building-a-live-todolist-with-websockets-1.jpg"
                                width="400px"
                                height="300px" />
                 
                            </div>
                            <div class="col-sm-6">
                                <strong>"ReactTodo: Developing a Dynamic Task Management Application"</strong>
                                <p>1.The ReactJS Todo List application is a web-based task management tool that allows users to create, manage, and organize their to-do items in a convenient and interactive way. The application leverages the power of ReactJS to provide a responsive and dynamic user interface. </p>
                                 <p>2.By implementing these features and utilizing the power of ReactJS, the Todo List application will provide users with a seamless and intuitive task management experience. Users can easily create, update, and organize their tasks, while the application dynamically updates the UI to reflect the changes. The local storage integration ensures that task data persists, allowing users to resume task management even after closing and reopening the application.</p>
                                
                            </div>
                            </div>
                            </div>


                            <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h3> PBAT</h3>
                        </div>
                        </div>
                        </div>   
                        <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYDZ9tXPV6yfVg8CptQ0Zk03iYhh237dlKg&usqp=CAU"
                                width="400px"
                                height="300px" />
                 
                            </div>
                            <div class="col-sm-6">
                                <strong>"Study of mechanical and barrier properties of 3D printed PBAT based hybrid composites using Coconut shell powder and nanoclay filler for packaging applications"</strong>
                               <p>1.This project aims to investigate the mechanical and barrier properties of 3D printed composites for packaging applications. The composites will be based on PBAT (polybutylene adipate terephthalate), a biodegradable polymer known for its environmental friendliness. To enhance the properties of PBAT, two additives will be incorporated: coconut shell powder and nanoclay filler. The project will focus on studying the effects of these additives on the mechanical strength and barrier properties of the composites.</p>
                               <p> 2.he project aims to provide valuable insights into the mechanical strength and barrier properties of 3D printed PBAT-based hybrid composites. The incorporation of coconut shell powder and nanoclay filler has the potential to enhance the material's performance and expand its applications in sustainable packaging. The project's findings can contribute to the development of eco-friendly packaging materials that offer improved mechanical strength and effective barrier protection for various products.</p>
                            </div>
                            </div>
                            </div>



                            <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h3> TIG Welded AISI 304L</h3>
                        </div>
                        </div>
                        </div>   


                            <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJFweSfd6JWKm9qRBqa3BCfiDpD6tcsjOdg&usqp=CAU"
                                width="400px"
                                height="300px" />
                 
                            </div>
                            <div class="col-sm-6">
                              <strong> "Study on Microstructure and mechanical properties of TIG Welded AISI 304L."</strong>
                              <p>1.This project focuses on investigating the microstructure and mechanical properties of Tungsten Inert Gas (TIG) welded AISI 304L stainless steel. TIG welding is a commonly used technique for joining metals, and AISI 304L is a popular stainless steel grade known for its corrosion resistance and mechanical properties. The objective of this project is to understand the effects of TIG welding on the microstructure and mechanical behavior of AISI 304L, providing valuable insights for welding process optimization and structural design considerations.</p>
                              <p>2. the project aims to gain a comprehensive understanding of the microstructure and mechanical properties of TIG welded AISI 304L stainless steel. The findings will contribute to process optimization, quality control, and structural design considerations in industries where TIG welding of AISI 304L is employed, such as automotive, aerospace, and construction. The project's outcomes will facilitate the selection of appropriate welding parameters and ensure the integrity and reliability of welded AISI 304L structures.</p>

                            </div>
                            </div>
                            </div>
                   
                            
                    
                            <div class="container-fluid bg-light p-5 text-center" id="footer">
                                <ul class="nav justify-content-center">
                                    <li class="nav-iterm">

                                   
                                  <FaGithub class="icons github"/>
                                
                                      
                                  
                                   
                                   
                                       
                                        
                                    </li>
                                    <li class="nav-iterm">
                                    <FaTwitter class="icons twitter" />
                                    
                                   
                                    </li>
                                </ul>
                            </div>
                       

                </body>
            

        );
            
        
    }
}
export default Project;