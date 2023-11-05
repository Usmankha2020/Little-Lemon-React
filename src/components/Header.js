import React, { useEffect, useRef } from "react";
import {Image, Box, HStack } from "@chakra-ui/react";

const logoImageSrc = require("../logos/Asset 16@4x.png") /* need require to get image from local or else would need to import it https://reactnative.dev/docs/images */

const Header = () => {
  const headerRef = useRef(null);

  useEffect (() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#FFFFFF" /* Color of NavBar */
      ref={headerRef}
    >
      <Box color="black" fontWeight="bold" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >

          <nav>
            <HStack spacing={8}>
              {/* LOGO Design */}
              <Image
                boxSize='3em'
                width='180px'  /* adjusting the size of nav image */
                objectFit='cover'
                src={logoImageSrc}
                alt='Dan Abramov'
              />
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Nav Items section */}
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me
              </a>
              <a href="/#projects" onClick={handleClick("projects")}>Projects
              </a>
              <a href="/#home" onClick={handleClick("home")}>Home
              </a>
              <a href="/#about" onClick={handleClick("about")}>About
              </a>
              <a href="/#menu" onClick={handleClick("menu")}>Menu
              </a>
              <a href="/#reservations" onClick={handleClick("reservations")}>Reservations
              </a>
              <a href="/#order-online" onClick={handleClick("#order-online")}>Order Online
              </a>
              <a href="/#login" onClick={handleClick("login")}>Login
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;