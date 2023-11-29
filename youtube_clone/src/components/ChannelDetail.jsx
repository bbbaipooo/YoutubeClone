import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from "./"
import { fetchAPI } from "../utils/fetchAPI"
import { red } from "@mui/material/colors"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(47,0,80,1) 0%, rgba(98,36,159,1) 37%, rgba(255,0,198,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-127px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} styyle={{ backgroundColor: 'blue' }}/>
          
        
        <Videos videos={videos} />
        
      </Box>
    </Box>
  )
}

export default ChannelDetail
