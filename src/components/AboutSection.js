import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "ABOUT SECTION Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const profileImageUrl = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const AboutSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          name='Petes name if no photo loaded'
          src={profileImageUrl}
          size="2xl"
        />
        <Heading as="h4" size='md' noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>

      <VStack spacing={6}>
        <Heading as="h1" size='xl' noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size='xl' noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default AboutSection;
