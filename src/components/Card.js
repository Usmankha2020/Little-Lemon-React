import { Box, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, backgroundColor,  ...imgProps }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box
      bg='white'
      w='100%'
      color='black'
      borderRadius='lg'
      backgroundColor={backgroundColor}
      //backgroundColor='#EDEEEF'
      >
      <VStack alignItems="left" alignContent='left'>
        <Image
          borderRadius='lg'
    /*    boxSize='150px'
          objectFit='cover' */
          //objectFit='fill' This is default.
          src= {imageSrc}
          alt={title}
          {...imgProps}
        />
        <VStack alignItems="left" padding='10px'>
          <Heading as="h4" size='md' noOfLines={1}>
            {title}
          </Heading>
          <Text>
            {description}
          </Text>
          <div>
            <a href={title}>
                <b>See more</b> {' '}
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </a>
          </div>
        </VStack>
      </VStack>
    </Box>

  );
};

export default Card;
