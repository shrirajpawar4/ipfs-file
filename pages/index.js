


import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  SunIcon,
  IconButton,
  createIcon,
  IconProps,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

//import '../assets/ipfs.png';
import Navbar from '../components/Navbar';

import { IoSunnyOutline } from 'react-icons/io5';

import { useRouter } from 'next/router';

export default function CallToActionWithVideo() {

  const {colorMode, toggleColorMode} = useColorMode();

  const {isOpen, onOpen, onClose} = useDisclosure();

  const router = useRouter();

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              FileNode,
            </Text>
            <br />
            <Text as={'span'} color={'#B980F0'}>
            Safe. Free. Decentralized
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Filenode is an IPFS peer that runs on your computer, so you can share files or folders, instantly. 
          Just drag and drop the files you want to share! 
          Whether you are looking to collaborate with friends on computing homework, backup some sensitive files on a decentralized network, 
          or reduce your carbon footprint by hosting everything locally - Filenode is your solution.
          </Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={() => router.push('./home')}
              bg={'#B980F0'}
              _hover={{ bg: '#8928e6' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={onOpen}
              >
              How It Works
            </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
           <ModalContent>
           <ModalHeader fontSize={25}>How it works</ModalHeader>
           <ModalCloseButton />
           <ModalBody padding={18} >
           <Text lineHeight={8} fontSize={17}>
           When you add a file to IPFS, your file is split into smaller chunks, 
           cryptographically hashed, and given a unique fingerprint called a content identifier (CID).
           When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, a
           nd given a unique fingerprint called a content identifier (CID).
           If you add a new version of your file to IPFS, its cryptographic hash is different, and so it gets a new CID. 
           This means files stored on IPFS are resistant to tampering and censorship
           </Text>
           </ModalBody>       
           </ModalContent>
           </Modal>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'ipfs.png'}
            />
          </Box>

        </Flex>
      </Stack>
    </Container>
  );
}