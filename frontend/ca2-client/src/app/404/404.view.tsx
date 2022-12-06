/* 
404 Image comes from here: https://www.kapwing.com/404-illustrations
*/

import React from "react";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import PageNotFoundImage from "../../404-image.png";

export const PageNotFoundView: React.FC = () => (
  <Box overflow="hidden" minH={{ base: "40rem", lg: "50rem" }} mt="2rem">
    <Center>
      <Box maxW="20%">
        <Image src={PageNotFoundImage}></Image>
      </Box>
    </Center>
    <Center>
      <Heading>Error 404 - Page Not Found</Heading>
    </Center>
    <Center mt="3rem">
      <Text>Please use the navigation bar to navigate through the site</Text>
    </Center>
    <Center mt="1rem">
      <Text>
        Or you can return to the{" "}
        <a style={{ color: "blue" }} href="/home">
          home page
        </a>
      </Text>
    </Center>
  </Box>
);

export default PageNotFoundView;
