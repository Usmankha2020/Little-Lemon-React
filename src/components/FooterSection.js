'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const logoCompactImageSrc = require("../logos/Asset 20@4x.png") /* need require to get image from local or else would need to import it https://reactnative.dev/docs/images */


const Logo = (props: any) => {
  return (
     <Image
        src = {logoCompactImageSrc}
        //viewBox="0 0 120 28"
        height={32}
        {...props}
      />
    )
  }

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const FooterSection = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>© 2022 Little Lemon Restaurant. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Box as="a" href={'#'}>
              Home
            </Box>
            <Box as="a" href={'#'}>
              About
            </Box>
            <Box as="a" href={'#'}>
              Menu
            </Box>
            <Box as="a" href={'#'}>
              Reservations
            </Box>
            <Box as="a" href={'#'}>
              Order
            </Box>
            <Box as="a" href={'#'}>
              Login
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About
            </Box>
            <Box as="a" href={'#'}>
              Press
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact
            </Box>
            <Box as="a" href={'#'}>
              Partners
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Twitter
            </Box>
            <Box as="a" href={'#'}>
              Dribbble
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default FooterSection;
