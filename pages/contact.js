import { Container, Spacer } from "@chakra-ui/react"
import Link from "next/link"

export default function contact() {
    return(
        <Container marginTop={'20'}>
        <Link href={'https://twitter.com/shrirajpawar04'}>Shriraj Pawar</Link>
        <Spacer />
        <Link href={'https://twitter.com/mudrankgupta'}>Mudrank Gupta</Link>
        </Container>
    )
}