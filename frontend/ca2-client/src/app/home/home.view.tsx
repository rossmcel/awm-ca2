import React from "react";
import { Box } from "@chakra-ui/react";
import { ImageText } from "../../shared/components/image-text";

export const Home: React.FC = () => {
  return (
    <Box overflow="hidden" mb="15rem">
      <Box
        display={{ base: "block", sm: "initial" }}
        width="80%"
        ml="auto"
        mr="auto"
        mt="0.2rem"
        borderBottom="1px solid lightgrey"
      >
        <ImageText
          image="https://i.ibb.co/RjqrpBf/resized.png"
          title="My FYP"
          titleImage="blank.png"
          text1="Short explanation of the app"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          buttonLink="mailto:rossmcelhinney123@gmail.com"
          buttonText="button"
          button2Link="https://github.com/rossmcel"
          button2Text="button"
          button3Link="https://www.linkedin.com/in/ross-mcelhinney/"
          button3Text="button"
        />
      </Box>
    </Box>
  );
};

export default Home;
