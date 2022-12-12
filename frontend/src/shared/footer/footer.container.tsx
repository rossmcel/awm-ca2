import React from "react";
import FooterView from "./footer.view";

interface FooterProps {
  topText: string;
  bottomText: string;
}

export const Footer: React.FC<FooterProps> = ({ topText, bottomText }) => {
  return <FooterView topText={topText} bottomText={bottomText} />;
};

export default Footer;
