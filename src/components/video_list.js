import React, { Component } from 'react'
import VideoListItem from './video_list_item'

class VideoList extends Component {
  render() {
    const videos = this.props.videos.map(video => {
      return (
        <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
      )
    })

    return (
      <ul className="col-md-4 list-group">
        {videos}
      </ul>
    )
  }
}

export default VideoList
