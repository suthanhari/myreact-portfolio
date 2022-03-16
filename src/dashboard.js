import profile from './image/photo.jpg';
import html from './image/html.png';
import css from './image/css.png';
import javascript from './image/javascript.png';
import node from './image/node.jpg';
import rt from './image/react.png'
import git from './image/git.png';
import mdb from './image/mongodb.png';
import exp from './image/expressjs.svg';
import bootstrap from './image/bootstrap.png';
import signin1 from './image/signin.png';
import projimg from './image/projImg.png';
import bgblue from './image/bg-blue.jpg';
import { useFormik } from 'formik';
import axios from 'axios';




function Dasboard() {



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comments: ''
        },
        onSubmit: async values => {
            try {
                await axios.post("https://myportfolio-node-app.herokuapp.com/client/create", values);
                alert("Success  Added");
            } catch (error) {
                console.log(error);
            }

        }


    });





    return (


        <>
            <section id='home'>

                <img src={bgblue} className='bg' alt='bg' />

                <ul class="breadcrumb">
                    <li><a href="#home">HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href="#skill">SKILL</a></li>
                    <li><a href="#project">PROJECT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>


                <div class="container ">



                    <div className='name'>

                        <div class="d-text">
                            <h3 class="heading-1 anime">H</h3>

                            <h3 class="heading-1">a</h3>

                            <h3 class="heading-1">i,</h3>

                        </div>
                        <div class="d-text">
                            <h3 class="heading-1">I'</h3>
                            <h3 class="heading-1">a</h3>
                            <h3 class="heading-1 mr">m</h3>

                            <h3 class="heading-1 anime">H</h3>
                            <h3 class="heading-1">a</h3>
                            <h3 class="heading-1">r</h3>
                            <h3 class="heading-1">i</h3>
                            <h3 class="heading-1 anime">S</h3>
                            <h3 class="heading-1">u</h3>
                            <h3 class="heading-1">t</h3>
                            <h3 class="heading-1">h</h3>
                            <h3 class="heading-1">a</h3>
                            <h3 class="heading-1">n</h3>

                        </div>

                    </div>

                    <div className='scroll'>
                        <a href='#about'>
                            <button className='scroll-btn'><i class="fa-solid fa-angles-down "> Scroll Down</i></button>

                        </a>
                    </div>



                </div>




            </section>


            <section id='about' >




                <div class="container reveal ">
                    <div class="row">

                        <div class="head d-flex justify-content-center">
                            <h1>ABOUT</h1>
                        </div>

                        <div class="col-md-4">

                            <div class="card-profile">

                                <img src={profile} class="img-top" alt="name" Style="width: 100%;" />
                                <div class="card-head">
                                    <h3 class="tit">Hari Suthan</h3>
                                </div>
                                <div class="card-bod">
                                    <div class="card-link" Style="margin: 24px 0;">
                                        <div class="tooltipro" data-tooltip="Github">
                                            <span class="tooltip-profile">GitHub</span>
                                            <a href="https://github.com/suthanhari" target="_blank" rel='noreferrer'><i
                                                class="fab fa-github fa-xl"></i></a>
                                        </div>
                                        <div class="tooltipro ">
                                            <span class="tooltip-profile">LinkedIn</span>
                                            <a href="https://www.linkedin.com/in/hari-suthan-86a238226/" target="_blank" rel='noreferrer'><i
                                                class="fab fa-linkedin-in fa-xl"></i></a>
                                        </div>
                                        <div class="tooltipro ">
                                            <span class="tooltip-profile">Twitter</span>
                                            <a href="https://twitter.com/hari_Suthan4" target="_blank" rel='noreferrer'><i
                                                class="fab fa-twitter fa-xl"></i></a>
                                        </div>
                                        <div class="tooltipro ">
                                            <span class="tooltip-profile">Pintreset</span>
                                            <a href="https://in.pinterest.com/mercedessuthan/_saved/" target="_blank" rel='noreferrer'><i
                                                class="fab fa-pinterest-p fa-xl"></i></a>
                                        </div>
                                    </div>

                                </div>
                                <div class="card-foot">
                                    <a href='#contact'>
                                        <button className='foot-btn'>Let's Connect</button>

                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-8">

                            <div class="color-in">
                                <div class="text-3d">
                                    <p>Whatsup,iam  very junior fullstack developer (MERN) ,who is seeking for a job .</p>


                                    <a href='https://drive.google.com/drive/folders/19SDp65QpqeCNKTHBI5wi_cqu0HUaGZGO' target="_blank" rel="noreferrer">
                                        <button class="color-button"> Resume</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>









            </section>


            <section id='skill'>
                <div class="container reveal ">

                    <div class="row mt-5">

                        <div class="head d-flex justify-content-center ">
                            <h1>SKILL</h1>
                        </div>
                        <div class="col-lg-4">

                            <div class="card-skill">
                                <h2>my skill:</h2>
                                <p>Some projects did by the following skills and click the above button to see.</p>
                                <a href='#project'>
                                    <button><strong>See More</strong></button>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 colorup">
                            <div class="row">


                                <div class="col-md-3">
                                    <div class="card-set">
                                        <p id="tooltip">HTML</p>
                                        <img src={html} alt="htm" />

                                    </div>


                                </div>



                                <div class="col-md-3">
                                    <div class="card-set">
                                        <p id="tooltip">React.js</p>
                                        <img src={rt} alt="react" />



                                    </div>
                                </div>

                                <div class="col-md-3 ">
                                    <div class="card-set">
                                        <p id="tooltip">CSS</p>
                                        <img src={css} alt="css" />



                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="card-set">

                                        <p id="tooltip">JavaScript</p>
                                        <img src={javascript} alt="js" />
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="card-set">

                                        <p id="tooltip">MongoDB</p>
                                        <img src={mdb} alt="mongodb" />


                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="card-set">

                                        <p id="tooltip">Node.js</p>
                                        <img src={node} alt="node" />


                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="card-set">

                                        <p id="tooltip">Express.js</p>
                                        <img src={exp} alt="express" />


                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="card-set">

                                        <p id="tooltip">Bootstrap</p>
                                        <img src={bootstrap} alt="bootstrap" />


                                    </div>
                                </div>


                                <div class="col-md-3">
                                    <div class="card-set">
                                        <p id="tooltip">GitHub</p>
                                        <img src={git} alt="github" />

                                    </div>

                                </div>


                            </div>






                        </div>


                    </div>
                </div>


            </section>

            <section id='project'>

                <div class="container reveal d-lg-flex justify-content-center">



                    <div class="row">

                        <div class="head d-flex justify-content-center ">
                            <h1>PROJECT</h1>
                        </div>
                        <div class="col-md-6">


                            <div class="card-project">
                                <div class="card-content">

                                    <div class="card-tit">
                                        <h5>Event Management</h5>
                                    </div>
                                    <div class="card-bod">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis
                                            molestiae
                                            suscipit laboriosam doloremque cumque consequatur distinctio praesentium debitis
                                            laudantium
                                            maiores, eum libero sed asperiores, nihil hic optio nam delectus.</p>
                                        <div class="card-btn">
                                            <button class="button">GitHub</button>
                                            <button class="button">Live</button>

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div class="col-md-6">
                            <img src={projimg} alt='projImg' className='anime' />
                        </div>


                    </div>
                </div>


            </section >

            <section id='contact'>





                <div class="row reveal">

                    <div class="head d-flex justify-content-center ">
                        <h1>CONTACT</h1>
                    </div>

                    <div class="col-flex col-md-6">
                        <form onSubmit={formik.handleSubmit}>
                            <div class="col-mb">
                                <label for="name" class="label-mb">Name</label><br />
                                <input type="text" class="form" id="name" name="name" placeholder="Enter Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    required
                                />
                            </div>

                            <div class="col-mb">
                                <label for="email" class="label-mb">Email</label><br />
                                <input type="email" class="form" id="email" name="email" placeholder="example@gmail.com"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    required
                                />

                            </div>

                            <div class="col-mb">
                                <label for="comments" class="label-mb">Comments</label><br />
                                <textarea name="comments" class="form" id="comments" cols="50" rows="5"
                                    placeholder="Type your comments"
                                    onChange={formik.handleChange}
                                    value={formik.values.comments}
                                    required
                                ></textarea>

                            </div>
                            <button class="form-btn form-btn-line" type="submit">Sent</button>



                        </form>
                    </div>

                    <div className='col-md-6 signin-img'>
                        <img src={signin1} alt='img' />

                        <div className='scroll-top'>
                            <a href='#home'>
                                <button className='scroll-btn'><i class="fa-solid fa-angles-up"></i> Top</button>

                            </a>
                        </div>
                    </div>






                </div>


            </section>
        </>
    )
}

export default Dasboard;