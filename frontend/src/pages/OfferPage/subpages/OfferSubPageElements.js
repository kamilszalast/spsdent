import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

export const SubPageContainer = styled(motion.div)`
  width: 75%;
  /* background-color: #aaa; */
  margin-top: 11em;
  font-size: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
export const HeaderImage = styled(motion.div)`
  /* background-color: cadetblue; */
  position: absolute;
  left: 10%;
  top: 100px;
  width: 90%;
  height: 7.9em;
  z-index: -1;
  background-image:${props => props.image ? props.image : null};
  background-size: cover;
  @media screen and (max-width: 768px) {
    left: 0%;
    width: 100%;
  }
`;
export const PageTitle = styled.h1`
  font-size: 4em;
  letter-spacing: 0.1em;
  color: #333;
`;
export const PageText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #333;
  @media screen and (max-width: 768px) {
   flex-direction: column;
   align-items: center;
  }
`;
export const PageTextColumn = styled.ul`
  width: 45%;
  font-family: "montserrat";
  font-size: 0.8em;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const ComeBackButton = styled(Link)`
text-decoration: none;
  display: block;
  margin: 2em auto;
  border-style: none;
  outline: none;
  background-color: #333;
  color: #fff;
  font-family: "bebas neue";
  letter-spacing: 0.1em;
  font-size: 1em;
  padding: 0.5em;
  transition: 0.2s ease;
  border-radius: 10px;

  &:hover {
    background-color: #01d4bf;
  }
`;

export const List = styled.ul`
  list-style: disc;
  padding: 1em;
`;
export const ListText = styled.li`
  padding-bottom: 0.1em;
`;
