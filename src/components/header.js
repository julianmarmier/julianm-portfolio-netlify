import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import ReactDOM from "react-dom"
// import posed, { PoseGroup } from "react-pose"
import Scrollspy from "react-scrollspy"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/*
const ListWrapper = posed.div({
  visible: {
    y: '0'
  },
  hidden: {
    y: '-120',
  },
  transition: {
    y: {duration: 1000, ease: [.175, .885, .32, 1.275]}
  }
});

const Chevron = posed.svg({
  pressable: true,
  init: {rotate: rotationStart},
  press: {rotate: rotationEnd},
  pressEnd: {rotate: rotationEnd},
  transition: {duration: 500, ease: 'linear'}
})
*/


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.clickedButton = this.clickedButton.bind(this);
    this.hoverTitle = this.hoverTitle.bind(this);
    this.headerType = this.props.type;
  }

  clickedButton() {
    document.getElementById("listwrapper").classList.toggle("closed");
    document.getElementById("headerwrapper").classList.toggle("closed");
    document.getElementById("chevronclose").classList.toggle("buttonclosed");
    document.getElementById("openclosebutton").classList.toggle("fa-bars");
    document.getElementById("openclosebutton").classList.toggle("fa-times");
  }

  hoverTitle() {
    document.getElementById("headertitle").classList.toggle("header-title:hover")
  }

  render() {
      return(
        <header className="header">
          <div className="headerwrapper">
            <Link to="/" id="headerwrapper" className="header-top">
              <p id="headertitle" className="header-title">
                {
                  this.headerType === "design" ? "julian marmier design" : "julian marmier"
                }
              </p>
            </Link>
            <div className="header-menu" onClick={this.clickedButton}><FontAwesomeIcon id="openclosebutton" icon={faBars} /></div>
          </div>
          <div id="listwrapper" className="listwrapper">
            <Scrollspy items={['about', 'portfolio', 'contact']} currentClassName="listwrapper-active" className="header-list">
              <li id="item1"><Link to="/#about">about</Link></li>
              <li id="item2"><Link to="/#portfolio">portfolio</Link></li>
              <li id="item3"><Link to="/#contact">contact</Link></li>
            </Scrollspy>
            <svg id="chevronclose" className="chevronclose" onClick={this.clickedButton} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </div>
        </header>
      )
  }
}

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// const clickedButton = () => {
//   document.getElementById("listwrapper").classList.toggle("closed");
//   document.getElementById("chevronclose").classList.toggle("buttonclosed");
//   console.log("clicked!");
// }

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {isVisible: true};
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ isVisible: !this.state.isVisible });
    var rotateTemp = rotationStart;
    rotationStart = rotationEnd;
    rotationEnd = rotationTemp;
  }

  render() {
    const isVisible = this.state;
    return (
      <header className="header">
        <div className="header-top">
          <p className="header-title">julian marmier</p>
        </div>
        <ListWrapper id="listwrapper" className="listwrapper" pose={this.state.isVisible ? 'visible' : 'hidden'}>
          <ul className="header-list">
            <li>about</li>
            <li>contact</li>
            <li>portfolio</li>
          </ul>
          <Chevron id="chevronclose" className="chevronclose" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></Chevron>
        </ListWrapper>
      </header>
    )
  }
}
*/

export default Header
