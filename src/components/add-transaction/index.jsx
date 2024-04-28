import React, { useContext } from 'react'
import {
    Modal,
    ModalCloseButton,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    ModalFooter,
    ModalContent,
    Input,
    Button
} from '@chakra-ui/react'
import { GlobalContext } from '../../context';

const Transaction = ({ onClose, isOpen }) => {

    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData);
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleSubmit}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add New Transaction</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Enter Description</FormLabel>
                                <Input
                                    placeholder="Enter Transaction description"
                                    name="description"
                                    type="text"
                                    onChange={handleFormChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Enter Amount</FormLabel>
                                <Input
                                    placeholder="Enter Transaction amount"
                                    name="amount"
                                    type="number"
                                    onChange={handleFormChange}
                                />
                            </FormControl>
                            <RadioGroup mt="5" value={value} onChange={setValue}>
                                <Radio
                                    checked={formData.type === "income"}
                                    value="income"
                                    colorScheme="green"
                                    name="type"
                                    onChange={handleFormChange}
                                    mr={'5'}
                                >
                                    Income
                                </Radio>
                                <Radio
                                    checked={formData.type === "expense"}
                                    value="expense"
                                    colorScheme="red"
                                    name="type"
                                    onChange={handleFormChange}
                                >
                                    Expense
                                </Radio>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button mr={"4"} onClick={onClose} bg={'#C40C0C'} color={'white'}>
                                Cancel
                            </Button>
                            <Button onClick={onClose} type="submit" bg={'#41B06E'} color={'white'}>
                                Add
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default Transaction