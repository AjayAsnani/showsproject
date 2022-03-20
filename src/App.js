
import Popular from './components/Popular'
import NowPlaying from './components/NowPlaying'
import Upcoming from './components/Upcoming'
import TopRated from './components/TopRated'
import TvPopular from './components/TvPopular'
import TVAiringToday from './components/TvAiringToday'
import TvOnTv from './components/TvOnTv'
import TvTopRated from './components/TvTopRated'
import PeoplePopular from './components/PeoplePopular'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Spacer,
  Button,
} from '@chakra-ui/react'
//import { ChevronDownIcon } from '@chakra-ui/icons'

function App() {
  return (
    <>
      <BrowserRouter>
        <Box backgroundColor='black' color='white' p='5'>
          <Flex
            alignItems='center'
            justify='space-between'
            maxW='container.xl'
            mx='auto'
          >
            <Heading size='md'>ShowTime</Heading>
            <Flex justify='center'>
              <Button colorScheme='white'>
                <Link to='/'>Home</Link>
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  //rightIcon={<ChevronDownIcon />}
                  colorScheme='blackAlpha'
                >
                  Movies
                </MenuButton>
                <MenuList color='black'>
                  <MenuItem>
                    <Link to='/'>Popular</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/now-playing'>Now Playing</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/Upcoming'>Upcoming</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/TopRated'>Top Rated</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  //rightIcon={<ChevronDownIcon />}
                  colorScheme='blackAlpha'
                >
                  TvShows
                </MenuButton>
                <MenuList color='black'>
                  <MenuItem>
                    <Link to='/TvPopular'>Popular</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/TvOnTv'>On TV</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/TvAiringToday'>Airing Today</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/TvTopRated'>Top Rated</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button colorScheme='White'>
                <Link to='/PeoplePopular'>People</Link>
              </Button>
            </Flex>
          </Flex>
        </Box>
        <div className='text-image'><h1>WELCOME !</h1></div>
        <Container maxW='container.xl'>
          <Image
            src='banner1.png'
            height='450px'
            width='100%'
            borderRadius='10px'
            fit='cover'
          />
        </Container>

        <Routes>
          <Route path='/' element={<Popular />} />
          <Route path='/now-playing' element={<NowPlaying />} />
          <Route path='/Popular' element={<Popular />} />
          <Route path='/PeoplePopular' element={<PeoplePopular />} />
          <Route path='/TopRated' element={<TopRated />} />
          <Route path='/TVAiringToday' element={<TVAiringToday />} />
          <Route path='/TvOnTv' element={<TvOnTv />} />
          <Route path='/TvPopular' element={<TvPopular />} />
          <Route path='/TvTopRated' element={<TvTopRated />} />
          <Route path='/Upcoming' element={<Upcoming />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
