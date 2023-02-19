import React from "react";
import styled from "@emotion/styled";
import "../style/components/Intro.scss";

const Container = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    
    
    
    .title {
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      
      
        h3 {
          padding: 1rem 2.5rem;
          text-align: center;
          width: 50%;
          border: 1px solid white;
          border-radius: 5rem;
        }
    }

  .pictureIntro {
    height: 40vh;
    
  }
  
  //rendre responsive pour laterale mobile et tablette 13pouces et 15 pouces et 24 pouces
    @media (min-width: 650px) {
      
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .title {
            h1 {
                font-size: 3rem;
            }
            h3 {
                font-size: 1.5rem;
              
            }
          
        }
        .pictureIntro {
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
        .pictureIntro {
            height: 80vh;
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
const Intro = () => {
    return (
        <Container>
            <div className="title">
                <h1>
                    Bienvenue sur <br />
                    mon porfolio <br />
                    en ligne
                </h1>
                <h3>Pierre Parfaite /  Développeur Web / pentester</h3>
            </div>
            <div className="pictureIntro"></div>
        </Container>

    );
};

export default Intro;