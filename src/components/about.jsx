import React, { Component } from 'react'
import andrew from '../assets/andrewjang.jpg'
import emily from '../assets/emilypalimery.jpg'
import michael from '../assets/michaelxie.jpg'
import simon from '../assets/skaralius.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        {/* About Us */}
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Us</span>
                        <h2 className="colorlib-heading">Mission</h2>
                        <p>Our global team has a mission to make this small world even smaller. We want to bring back the 'living room' experience where friends and family watch TV together and talk, laugh, cry and enjoy their time together. Popitalk's innovative features and the smooth user experience will eat watch2gether for breakfast and won't stop there. Our details in design, code, and features will allow our users to realize the potential of watching together.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* Our Team */}
        <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading">Our Team</h2>
                    </div>
                    </div>
                    <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <img src={andrew} alt="" />
                        <div className="desc">
                            <h3>Andrew</h3>
                            <p>placeholder: I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <img src={emily} alt="" />
                            <div className="desc">
                                <h3>Emily</h3>
                                <p>placeholder: As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                            <img src={michael} alt="" />
                            <div className="desc">
                                <h3>Michael</h3>
                                <p>placeholder: I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-4">
                            <img src={simon} alt="" />
                            <div className="desc">
                                <h3>Simon</h3>
                                <p>placeholder: I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <img src={"https://deshmukh.ml/images/popitalk_dp.jpg"} alt="" />
                            <div className="desc">
                                <h3>Abhishek</h3>
                                <p>placeholder: I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}