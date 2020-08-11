import React, { Component } from 'react'
import logo from '../assets/Icon-144.png'
import GrayIcon from '../assets/GrayIcon.png'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="/#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <img className="author-img" src={logo} alt="logo" />
              <h1 id="colorlib-logo"><a href="index.html">Popitalk Team</a></h1>
              <span className="email"><i className="icon-mail"></i>about@popitalk.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="/#" data-nav-section="home">Main</a></li>
                  <li><a href="/#" data-nav-section="about">Our Team</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="/#" data-nav-section="timeline">More</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.popitalk.com" target="_blank" rel="noopener noreferrer">
                  <img src={GrayIcon} alt="Popitalk"/>
                </a></li>
                <li><a href="https://web.facebook.com/popitalk" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/PopitalkT" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/popi.talk" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://medium.com/popitalk" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  By Popitalk Team 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
