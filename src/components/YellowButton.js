import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const YellowButton = ({ children, isDarkBackground, ...boxProps }) => {
  return (

    <Button
      rounded={'full'}
      size={'lg'}
      fontWeight={'normal'}
      px={6}
      colorScheme={'red'}
      color={'black'}
      bg={'#F4CE14'}
      _hover={{ bg: 'red.500', color: 'white' }}
      {...boxProps}
      >
      {children}
  </Button>

/*   <Button
    rounded={'full'}
    size={'lg'}
    fontWeight={'normal'}
    px={6}
    leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
    How It Works
  </Button> */

/*
        // Button from facebook.com
        <Box
          as='button'
          height='24px'
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          px='8px'
          borderRadius='2px'
          fontSize='14px'
          fontWeight='semibold'
          bg='#f5f6f7'
          borderColor='#ccd0d5'
          color='#4b4f56'
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        //
        backgroundColor={boxProps.backgroundColor}
        //color={isDarkBackground ? "white" : "black"}

        //add props at end so as to apply props by overwritimg if requried
        {...boxProps}
        >
        {/* children for button would be text of button /}
        {children}
        </Box>
 */

  );
};

export default YellowButton;




