"use client";
import React from "react";
import styled from "@emotion/styled";

//imports components
import Intro from "../components/Intro";
import Presentation from "../components/Presentation";
import Experience from "../components/Experience";
import Realisation from "../components/Realisation";
import Contact from "../components/Contact";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100vw;
    
  
    
`;

export default function Home() {
  return (
      <Container>
            <Intro />
            <Presentation />
            <Experience />
            <Realisation />
            <Contact />
      </Container>
  );
}
