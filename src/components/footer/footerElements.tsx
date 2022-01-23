import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const Footer = styled.footer`
    background: white;
    height: 50px;
`

export const Phrases = styled.h4`
  padding-top: 10px;
  
`

export const SnsBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 55vw;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SnsBtnLink = styled.a`
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: #010606;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 3px;
  
`