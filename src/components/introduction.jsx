import React, { Component } from 'react'
export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <a href="https://popitalk.com" className="btn">
              Visit Popitalk
            </a>
            <div className="videoContainer">
              <video autoPlay muted loop>
                <source src={"https://popitalk-s3.s3.us-east-2.amazonaws.com/popitalkvideo-88btdo7q-lsr1_EaKU776R.compressed.mp4"} type="video/mp4" alt="as"/>
              </video>
            </div>   
          </div>
        </section>
      </div>
    )
  }
}
