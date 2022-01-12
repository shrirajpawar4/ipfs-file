import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletConnected = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
         console.log("Install metamask");
        } else {
        console.log("ethereum object found", ethereum);
        }
  
        const accounts = await ethereum.request({ method: "eth_accounts" });
  
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account)
        } else {
          console.log("No authorized account found")
        }
      } catch (error) {
        console.log(error);
      }
    }

    const connectWallet = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      checkIfWalletConnected();
    }, [])
    
    return (
        <Box>
          <Flex position={'relative'} alignItems={'flex-end'}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
               <Link href='/contact'>Contact</Link>
               <Link href='/about'>About</Link>
              </HStack>
          </Flex>
        </Box>
        )
  }

  // {!currentAccount && (
  //   <Button colorScheme={'purple'} variant={'outline'} onClick={connectWallet}>
  //      Connect Wallet
  //   </Button>
  // )}