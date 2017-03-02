import _ from 'lodash'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import YoutubeSearch from 'youtube-api-search'

// Components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetial from './components/video_detial'

// This is youtube api key
const API_KEY = 'AIzaSyAaMPZZj8Lqf9TXtqzsexgwQt4TyrHbvwU'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [], selectVideo: null }

    this.videoSearch('react')
  }

  videoSearch(term) {
    YoutubeSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos, selectVideo: videos[0] })
    })
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchChange={videoSearch} />
        <VideoDetial video={this.state.selectVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={video => { this.setState({selectVideo: video}) }}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
