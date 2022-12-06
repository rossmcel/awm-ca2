import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

interface FooterViewProps {
  topText: string;
  bottomText: string;
}

export const FooterView: React.FC<FooterViewProps> = ({
  topText,
  bottomText,
}) => {
  return (
    <Box
      mt={{
        base: "2rem",
        sm: "5rem",
        md: "0rem",
      }}
      mb="0rem"
      w="100%"
      minH="0rem"
      backgroundColor="#00072b"
      pt="2rem"
      pb="2rem"
    >
      <Text as="h3" textAlign="center" color="white">
        {topText}
      </Text>
      <Text as="h3" textAlign="center" color="white" mt="4rem">
        {bottomText}
      </Text>
      <Text as="h3" textAlign="center" color="white" mt="1rem">
        Ross McElhinney - 2022
      </Text>
    </Box>
  );
};

export default FooterView;
