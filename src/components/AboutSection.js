import React from "react";
import { Box, Text, Card, Image, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import YellowButton from "./YellowButton";

const title = "Little Lemon";
const subTitle = "Chicago";
const description = "Little Lemon opened in 1095 by two italian brothers. Adrain and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.";
const AboutImageSrc = require("../images/dish1.jpg") /* need require to get image from local or else would need to import it https://reactnative.dev/docs/images */
const projects = [
  {
    title: "Display Dish",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/dish1.jpg"),
  },
]


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const AboutSection = () => (
  <FullScreenSection
    justifyContent="center"  /* up center down */
    alignItems="flex-start"
    isDarkBackground
    backgroundColor="#F4CE14"
    //border="2px"
    //borderColor = "red"
    //borderWidth = '2px'
    //spacing={8} //Speacing between Hero Section and other sections (FullScreenSection is a Vstack)
    //p={8} //padding https://chakra-ui.com/docs/styled-system/style-props

    //backgroundColor="#14532d"
    //isDarkBackground
    //p={8}
    //alignItems="flex-start"
    //spacing={8}
  >

    <HStack> {/* We are dividing the hero section into a Vstack and pic arraged in a Hstack */}

    {/* VStack for Title, subTitle description and Reserver a table button */}
    <VStack alignItems='first baseline'  > {/* alignItems='first baseline to justify content to left */}
        <Heading as="h1" size='xl' noOfLines={1} color='#333333' fontSize={64}>
          {title}
        </Heading>
        {/* Added paddingBottom as g of Chicago text is being cut from buttom. Adding margin as per design  */}
        <Heading as="h1" size='xl' noOfLines={1} color='#333333'  marginTop='-20px' paddingBottom='2px'>
          {subTitle}
        </Heading>
        <Text as="h4" size='md' noOfLines={5}  color="#000000" >  {/* Text renders a paragraph in html */}
          {description}
        </Text>
    </VStack>
    {/* <VStack alignItems='end'> */}
    <Box
         display="inline"
         //gridTemplateColumns="repeat(2,minmax(0,1fr))"
         //gridGap={8}
         maxHeight= "18rem"
         position= "relative"
         top= "4rem"
         left= "2rem"
      >
         <Image
                width= '60%'
                height= '100%'
                objectFit= 'cover'
                //float={true}
                //boxSize='30em'
                //width='500px'  /* adjusting the size of nav image */
                //objectFit='cover'
                src={require("../images/dish1.jpg")}
                alt='Dan Abramov'
              />
              {/* TODO add a new floating image above 1st one */}
      </Box>
    {/* </VStack> */}

    </HStack>
  </FullScreenSection>
);

export default AboutSection;
