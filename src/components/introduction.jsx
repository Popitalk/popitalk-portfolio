import React, { Component } from 'react'
import WelcomeVideo from '../assets/popitalkVideo.mp4'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <div className="videoContainer">
              <div className="videoContainer2">
                <video autoPlay muted loop>
                  <source src={WelcomeVideo} type="video/mp4" />
                </video>
                <a href="https://popitalk.com" className="btn btn-primary btn-learn">
                  Go to Popitalk
                </a>
              </div>
            </div>   
            {/* <ul className="slides" style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Watch Together!</h1>
                          <a href="https://popitalk.com" className="btn btn-primary btn-learn">
                            Go to Popitalk
                          </a>                             
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Listen Together!</h1>
                          <a href="https://popitalk.com" className="btn btn-primary btn-learn">
                            Go to Popitalk
                          </a>                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Be Together!</h1>
                          <a href="https://popitalk.com" className="btn btn-primary btn-learn">
                            Go to Popitalk
                          </a>      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul> */}
          </div>
        </section>
      </div>
    )
  }
}
