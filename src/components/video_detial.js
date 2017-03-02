import React, { Component } from 'react'

class VideoDetial extends Component {
  render() {
    const video = this.props.video

    if(!video){
      return <div>Loading...</div>
    }

    const video_url = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={video_url}></iframe>
        </div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    )
  }
}

export default VideoDetial
