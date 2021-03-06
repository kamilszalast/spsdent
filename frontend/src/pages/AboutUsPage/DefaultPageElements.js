import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-size: ${(props) => (props.primary ? "2em" : "3.5em")};
  letter-spacing: 0.05em;
  color: ${(props) => (props.color ? "#fff" : "#333")};
  line-height: 0.9em;
  padding-top: ${(props) => (props.primary ? "0" : "1em")};
  padding-bottom: ${(props) => (props.primary ? ".2em" : "0")};
  white-space: nowrap;
  font-family: ${(props) => (props.primary ? "poppins" : "bebas neue")};
  padding-left: ${props => props.primary ? "0" : "2em"};
  @media screen and (max-width: 960px) {
    padding-left: ${props => props.primary ? "0" : "1em"};
  }
`;
export const TextContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.primary ? "20em" : "15em")};
  height: ${(props) => (props.primary ? "11em" : "9em")};
  background-color: ${(props) => (props.primary ? "#333" : "#01d4bf")};
  border-radius: ${(props) => (props.primary ? ".6em" : ".4em")};
  position: absolute;
  top: ${(props) => (props.primary ? "22em" : "7em")};
  left: ${(props) => (props.primary ? "17em" : "45em")};
  z-index: 2;
  padding: 1em;
  
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.primary ? "18em" : "10em")};
    height: ${(props) => (props.primary ? "12em" : "14em")};
    left: ${(props) => (props.primary ? "13em" : "42em")};
  }
`;
export const Text = styled(motion.p)`
  font-size: 0.7em;
  font-family: "poppins";
  font-weight: 100;
  color: ${(props) => (props.primary ? "#333" : "#fff")};
  line-height: 1.15em;
`;
export const PictureContainer = styled(motion.div)`
  background-image: url("./aboutus.jpg");
  background-size: cover;
  background-position: bottom;
  width: 55em;
  height: 12em;
  position: absolute;
  top: 18em;
  left: calc(50% + 4.25em);
  transform: translate(-50%, -50%);
  border-radius: 15px;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    width: 50em;
  }
  @media screen and (max-width: 960px) {
    width: 42em;
  }
`;
export const TextWrap = styled(motion.div)`
  position: fixed;
  top: 36em;
  left: 60em;
  width: 30em;
  font-family: "poppins";
  font-size: 0.7em;
  z-index: 2;
  @media screen and (max-width: 960px) {
    width: 23em;
    left: 53em;
  }
`;
