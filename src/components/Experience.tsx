// create a component

import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
       
    
        section{
            width: 0vw;
            
        }
        aside{
          
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
          ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
              padding: 2rem 3rem;
              font-size: 1.5rem;
            }
          }
        }
    }

  //rendre responsive pour laterale mobile et tablette 13pouces et 15 pouces et 24 pouces
    @media (min-width: 650px) {
      h1{
        font-size: 3rem;
      }
        div{
            section{
                width: 50vw;
            }
            aside{
                width: 50vw;
              h2{
                font-size: 3rem;
              }
              ul{
                li{
                    font-size: 2rem;
                }
              }
            }
        }
    }
  @media (min-width: 1000px) {
    h1{
      font-size: 7rem;
    }
    div{
      
      aside{
        width: 50vw;
        h2{
          font-size: 3.5rem;
        }
        ul{
          li{
            font-size: 2rem;
          }
        }
      }
    }
  }
  @media (min-width: 1000px) {
    h1{
      font-size: 10rem;
    }
    
  }
  @media (min-width: 1615px) {
    h1{
      font-size: 15rem;
    }

  }
   
      
  `;

const Experience = () => {
    return (
        <Container>
            <h1>Mon expérience</h1>
            <div>
                <section></section>
                <aside>
                    <h2>Scolarité :</h2>
                    <ul>
                        <li>

                            - Diplôme de baccalauréat en architecture et
                            construction.
                        </li>
                        <li>
                            - Diplôme de Bachelor en cybersécurité, avec 2
                            années d'études.
                        </li>
                    </ul>
                    <h2>Expérience professionelle :</h2>
                    <ul>
                        <li>
                            - Stage de création d'applications pour les
                            collectivités locales.
                        </li>
                        <li>
                            - Expérience en alternance en systèmes et réseaux
                            pour une entreprise d'assurance.
                        </li>
                        <li>

                            - Expérience en tant que développeur web freelance.
                        </li>
                    </ul>
                </aside>
            </div>
        </Container>
    );
};

export default Experience;
