import React from 'react';

export default class ColorBox extends React.Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {this.props.opacity >=0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/>:null}
      </div>
    )
  }



}