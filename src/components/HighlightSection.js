import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Center, Heading } from "@chakra-ui/react";
import Card from "./Card";
import YellowButton from "./YellowButton";

const projects = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
];

const HighlightSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#FFFFFF"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Box
        display="grid"
        gridTemplateColumns="75% 25%" //75 percent for 1st grid item(heading) and 25 percent for button
        //gridGap={8}
        //backgroundColor='rgba(255,0,0,.7)' //for debugging
        width='100%' // to expand grid to 100 percent
        //height='100%'
      >
        <Heading as="h1" id="projects-section" //{/* We are using this id to smart scroll to this section in navbar */}
          color='#333333'
          //backgroundColor= '#555555'
        >
          This Weeks specials!
        </Heading>

        {/* Add Online Menu Button */}
        <YellowButton
          alignSelf='center'
          //backgroundColor= '#555555'
        >
            Online Menu
        </YellowButton>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
        backgroundColor="#FFFFFF"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default HighlightSection;