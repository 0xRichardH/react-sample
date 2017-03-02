import React, { Component } from 'react'

class VideoListItem extends Component {
  render() {
    const video = this.props.video
    const image = video.snippet.thumbnails.default.url
    return (
      <li className="list-group-item" onClick={() => { this.props.onVideoSelect(video) }}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={image} />
          </div>
          <div className="media-body">{video.snippet.title}</div>
        </div>
      </li>
    )
  }
}

export default VideoListItem
