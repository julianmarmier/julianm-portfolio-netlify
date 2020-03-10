import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import './layout.css';

var opened = false;

class ImagePointer extends React.Component {
  constructor(props) {
    super(props);
    this.expandContainer = this.expandContainer.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
    this.mainimg = React.createRef();
  }
  expandContainer() {
    document.getElementById('expandText').classList.toggle('image-expand-icon-closed');
    document.getElementById('imgExpand').classList.toggle('image-hover-active');
  }
  toggleImage() {
    if (opened) {
      this.mainimg.current.className = 'mainimg-closed';
    } else {
      this.mainimg.current.className = 'mainimg-open';
    }
    opened = opened ? false : true;
    document.getElementById('expandText').textContent = opened ? "Click to minimize image." : "Click to expand image.";
  }
  render() {
    return (
      <div>
        <div id="mainimg" ref={this.mainimg} className="mainimg-closed" onClick={this.toggleImage} onMouseOver={this.expandContainer} onMouseOut={this.expandContainer}>
          <img className="blog-img" src={this.props.imageFluid} />
        </div>
        <div id="imgExpand" className="image-expand" onMouseOver={this.expandContainer} onMouseOut={this.expandContainer} onClick={this.toggleImage}>
            <div className="image-expand-icon"> <FontAwesomeIcon icon={faMousePointer} /> </div>
            <div id="expandText" className="image-expand-icon-closed"><p>Click to expand image.</p></div>
        </div>
      </div>
  )};
}

export default ImagePointer
