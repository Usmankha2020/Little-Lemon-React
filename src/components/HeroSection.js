import React from "react";
import { Box, Card, Image, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import YellowButton from "./YellowButton";

const title = "Little Lemon";
const subTitle = "Chicago";
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
const greeting = "Hello, HERO SECTION I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const profileImageUrl = "https://i.pravatar.cc/150?img=7";
const HeroImageSrc = require("../images/dish1.jpg") /* need require to get image from local or else would need to import it https://reactnative.dev/docs/images */
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
const HeroSection = () => (
  <FullScreenSection
    justifyContent="center"  /* up center down */
    alignItems="flex-start"
    isDarkBackground
    backgroundColor="#495E57"
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
    <VStack alignItems='first baseline' > {/* alignItems='first baseline to justify content to left */}
        <Heading as="h1" size='xl' noOfLines={1} color= '#F4CE14' fontSize={64}>
          {title}
        </Heading>
        {/* Added paddingBottom as g of Chicago text is being cut from buttom. Adding margin as per design  */}
        <Heading as="h1" size='xl' noOfLines={1} marginTop='-20px' paddingBottom='2px'>
          {subTitle}
        </Heading>
        <p as="h4" size='md' noOfLines={1}>
          {description}
        </p>
        <Button>Reserve a Table</Button>
        <Button
          size='md'
          height='48px'
          width='200px'
          border='2px'
          borderColor='green.500'
          backgroundColor={'#F4CE14'}
        >
          Reserve a Table
        </Button>
        <YellowButton>Reserve a Table</YellowButton>
    </VStack>
    <VStack alignItems='end'>
    <Box
       // display="grid"
        //gridTemplateColumns="repeat(2,minmax(0,1fr))"
        //gridGap={8}
      >
         <Image
                //float={true}
                //boxSize='30em'
                //width='500px'  /* adjusting the size of nav image */
                objectFit='cover'
                src={require("../images/dish1.jpg")}
                alt='Dan Abramov'
              />
      </Box>
    </VStack>

{/* //TODO 
1. ADJUST HEIGHT OF Hero Section
2. Change location of IMG and img as per design */}


    </HStack>
  </FullScreenSection>
);

export default HeroSection;