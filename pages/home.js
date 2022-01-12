import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ethers } from 'ethers'
import 
{ Button, 
  useDisclosure,
  Flex,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'


import Navbar from '../components/Navbar'

//import BiWallet from 'react-icons/bi'

import Link from 'next/link'

export default function Home() {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const share = () => {}


  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.100', 'gray.800')}
  >
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
      <Navbar />
        <Heading fontSize={'4xl'}>
          Upload your file 📂
        </Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="file">
            <FormLabel fontFamily="Poppins" textAlign="center" pt={3}>
              Upload your file here. Click on the Show info button to get info
              regarding upload.
            </FormLabel>
            <Input type="file" onChange={e => setFile(e.target.files[0])} />
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={'#B980F0'}
              color={'white'}
              _hover={{
                bg: '#B980F0'
              }}
              onClick={share}
              fontFamily="Poppins"
              variant="outline"
            >
              Upload
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}




