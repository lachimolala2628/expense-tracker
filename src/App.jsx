import React from 'react'
import Main from './components/main/index'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <Container backgroundImage="url('https://i.pinimg.com/736x/2b/ac/38/2bac38a35adb674c9efce30a33597d8f.jpg')" backgroundPosition="center" backgroundSize='cover' backgroundRepeat="no-repeat" maxW={'Container.3xl'} height={'100vh'} p={'0'}>
        <Flex height={'full'}>
          <Box height={'full'} flex={5} w={['20%', '30%', '20%', '50%', '60%']}>
            <Main />
          </Box>
        </Flex>
      </Container>
    </>
  )
};

export default App