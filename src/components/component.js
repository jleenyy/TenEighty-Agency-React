import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <video
        src={props.video_src}
        loop
        muted
        poster="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoPlay
        className="component-video"
      ></video>
      <div className="component-blur-background"></div>
    </div>
  )
}

AppComponent.defaultProps = {
  video_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

AppComponent.propTypes = {
  video_src: PropTypes.string,
}

export default AppComponent
