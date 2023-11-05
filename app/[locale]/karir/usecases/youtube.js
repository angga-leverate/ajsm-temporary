import { useState } from 'react';
import { youtubeService } from '../services';

function useYoutube() {
  const [youtubeList, setYoutubeList] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const loadYoutubeList = () => {
    youtubeService.getService().then((value)=>{
      setYoutubeList(value)
    })
  }
  return {
    loadYoutubeList,
    youtubeList,
    setCurrentVideo,
    currentVideo
  };
}
export {
  useYoutube
}
