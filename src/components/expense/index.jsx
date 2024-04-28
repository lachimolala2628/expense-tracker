import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const Expense = ({ type, data }) => {
    return (
        <>
            <Box flex={1} borderRadius={"8"} w='full' mr={'4'} mt={'10'} p={'5'} pb={'4'} className='expense'>
                <Flex justifyContent={'space-between'} alignItems={'center'} >
                    <Heading size={'md'} color={'white'}>
                        {type === 'income' ? 'Income' : 'Expense'}
                    </Heading>
                </Flex>
                {
                    data.map(item => <>
                        <Flex
                            bg={type === "expense" ? "#C40C0C" : "#41B06E"}
                            mt={"4"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            p={"4"}
                            borderRadius={"8"}
                        >
                            <Flex alignItems={"center"} justifyContent={"center"}>
                                <Text ml="3" fontWeight="bold" color="white">
                                    {item.description}
                                </Text>
                            </Flex>
                            <Text color={'white'}>$ {item.amount}</Text>
                        </Flex>
                    </>)
                }
            </Box>
        </>
    )
}

export default Expense