import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const testimonials = [
  {
    title: "Micheal Caldwell",
    description:
      "This is the best Mediterranean food that I've ever had!",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Alan Chen",
    description:
      "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Casey Lau",
    description:
      "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "John Rosenblum",
    description:
      "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Jim Reynor",
    description:
      "The food here really refreshed me after a late night shift at the local supply depot.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Brian Dean",
    description:
      "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Tyler Tohmine",
    description:
      "The food here was fire!! Everyone should try this place out at least once if they live in Chicago.",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
  {
    title: "Jack Hu",
    description:
      "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!",
    getImageSrc: () => require("../images/testimonials/star.png"),
  },
];

const TestimonialSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#FFFFFF"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={2}
    >
      <Heading as="h1" id="projects-section" alignSelf='center' color='#333333'>  {/* We are using this id to smart scroll to this section in navbar */}
         Testimonials
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.title}
            title={testimonial.title}
            description={testimonial.description}
            //backgroundColor={'#EDEEEF'}//background of box of card as per design
            backgroundColor={'#80ABD7'}
            objectFit='none' //img properties
            boxSize='80px'
            imageSrc={testimonial.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default TestimonialSection;