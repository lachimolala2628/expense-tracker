import React from 'react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Transaction from '../add-transaction'
import Charts from '../chart'

const Summary = ({ onClose, isOpen, totalExpense, totalIncome }) => {
    return (
        <>
            <Box p='6' overflow={'hidden'} borderRadius={'10'} className='summary'
                display={'flex'} >
                <Flex w='full' justifyContent={'center'} alignItems={'center'} flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                }}>
                    <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'-20'} mr={'2'}>
                        <Heading size={'md'} mb={'4'} color={'white'}>
                            Balance is $ {totalIncome - totalExpense}
                        </Heading>
                        <Flex justifyContent={'space-evenly'} alignItems={'center'} w='full' h='100px'>
                            <Flex flexDirection={'column'}>
                                <Heading color={'white'}>
                                    $ {totalIncome}
                                </Heading>
                                <Text color={'white'}>
                                    Total Income
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex justifyContent={'space-evenly'} alignItems={'center'} w='full' h='100px'>
                            <Flex flexDirection={'column'}>
                                <Heading color={'white'}>
                                    $ {totalExpense}
                                </Heading>
                                <Text color={'white'}>
                                    Total Expense
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box flex={1} mt={'10'} ml={'-90px'} mr={'5'} width={'300px'} height={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Heading>
                            <Charts expense={totalExpense} income={totalIncome} />
                        </Heading>
                    </Box>
                </Flex>
                <Transaction onClose={onClose} isOpen={isOpen} />
            </Box>
        </>
    )
}

export default Summary