import {
  Heading,
  Image,
  SimpleGrid,
  Flex,
  Button,
  Badge,
  Link,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'

export default function PeoplePopular() {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  async function getMoviesFromAPI() {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`
    )
    const data = await res.json()
    console.log(data.results)
    setMovies([...movies, ...data.results])
  }

  useEffect(() => {
    getMoviesFromAPI()
  }, [currentPage])

  return (
    <div>
    
    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Flex
        direction='column'
        maxWidth='container.lg'
        mx='auto'
        justify='center'
        align='center'
        margin-top='1000px'
      >
        <SimpleGrid columns={4} spacing={10}>
          {movies.map((movieinfo) => {
            return (
              <Flex
                direction='column'
                shadow='xl'
                _hover={{ shadow: '2xl' }}
                // border='1px solid'
                // borderColor='gray.400'
                rounded='lg'
                key={movieinfo.id}
              >
                <Image
                  src={
                    movieinfo.backdrop_path !== 'null'
                      ? `http://image.tmdb.org/t/p/w500/${movieinfo.profile_path}`
                      : './placeholder.png'
                  }
                  alt={movieinfo.name}
                  objectFit='cover'
                />
                <Flex justify='space-between' p={4} align='center'>
                  <Flex
                    direction='column'
                    align='start'
                    experimental_spaceY={2}
                  >
                    <Heading size='md'>{movieinfo.name}</Heading>
                    <p>{movieinfo.known_for.original_title}</p>
                  </Flex>
                  <p>{movieinfo.known_for.original_title}</p>
                </Flex>
              </Flex>
            )
          })}
        </SimpleGrid>
        <Button
          colorScheme='blue'
          margin={5}
          onClick={() => {
            setCurrentPage(currentPage + 1)
          }}
        >
          Load More
        </Button>
      </Flex>
    </div>
  )
}
