import React, { useContext, useEffect } from 'react'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import Summary from '../summary/index'
import Expense from '../expense/index'
import { GlobalContext } from '../../context'

const Main = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransaction
    } = useContext(GlobalContext);

    useEffect(() => {

        let expense = 0;
        let income = 0;

        allTransaction.forEach((item) => {
            item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount)
        });

        setTotalExpense(expense)
        setTotalIncome(income)

    }, [allTransaction])


    return (
        <>
            <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
                <Flex textAlign={'center'} justifyContent={'space-between'} mt={12} mb={12}>
                    <Heading color={'white'} display={['none', 'block', 'block', 'block', 'block']}>
                        Expense Tracker
                    </Heading>
                    <Flex alignItems={'center'}>
                        <Button onClick={onOpen} bg={'white'} color={'black'} ml={'4'}>
                            Add New Transaction
                        </Button>
                    </Flex>
                </Flex>
                <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
                <Flex w='full' alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                    <Expense data={allTransaction.filter(item => item.type === 'income')} type={'income'} />
                    <Expense data={allTransaction.filter(item => item.type === 'expense')} type={'expense'} />
                </Flex>
            </Flex>
        </>
    )
}

export default Main