import React from 'react'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about.png" alt="About" className="w-75 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who<b>We</b> are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum facilis vel numquam distinctio fugiat, harum ut cumque earum dolores itaque. Velit voluptate cum necessitatibus perferendis maxime. Eligendi ipsum obcaecati impedit quibusdam? Ex adipisci dolorem esse, ab totam neque similique vel. Numquam blanditiis quaerat nobis aperiam minus officia corporis excepturi.</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About