// create a component

import React from "react";
import styled from "@emotion/styled";
import "../style/components/Presentation.scss";

const Container = styled.section`
    background: white;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
  
    .picture {
        height: 40vh;
    }
    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      height: 100%;
        h1 {
            color: black;
        }
        h3 {
            color: black;
        }
      p {
        margin: 5rem 0;
        height: 0.2rem;
        width: 25%;
        background-color: black;
      }
    }

  //rendre responsive pour laterale mobile et tablette 13pouces et 15 pouces et 24 pouces
    @media (min-width: 650px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .title {
          padding: 0 2rem;
            h1 {
                font-size: 3rem;
              
            }
            h3 {
                font-size: 2rem;
              
            }
          
        }
        .picture {
            height: 60vh;
            width: 40vw;
          
        }
    }
    @media (min-width: 1000px) {
        .title {
            h1 {
                font-size: 7rem;
              
            }
            h3 {
                font-size: 2rem;
              
            }
        }
      
    }
  
    @media (min-width: 1200px) {
        .title {
            h1 {
                font-size: 10rem;
              
            }
            h3 {
                font-size: 2.5rem;
            }
        }
    }
  
    @media (min-width: 1615px) {
        .title {
            h1 {
                font-size: 15rem;
              
            }
            h3 {
                font-size: 2.5rem;
            }
        }
    }
  
`;

const Presentation = () => {
    return (
        <Container>
            <div className="picture"></div>
            <div className="title">
                <h1>Qui suis-je ?</h1>
                <h3>
                    Je suis étudiant en alternance <br />
                    et actuellement en poste en tant <br />
                    qu'administrateur système et réseaux. <br />
                    Parallèlement, je travaille également <br />
                    en tant que développeur web en freelance.
                </h3>
                <p></p>
            </div>
        </Container>
    );
};

export default Presentation;