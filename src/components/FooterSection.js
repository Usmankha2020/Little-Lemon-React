import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const FooterSection = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>  {/* Using sementic tags instead of div */}
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Little Lemmons • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default FooterSection;
