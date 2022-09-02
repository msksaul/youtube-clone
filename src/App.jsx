import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' ecaxt element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:id' element={<SearchDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>
}

export default App