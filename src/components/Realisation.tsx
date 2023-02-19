// create a component

import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import "../style/components/Realisation.scss";

const Container = styled.section`
    background: white;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: black;
      
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          margin-bottom: 2rem;
          width: 50vw;
          text-align: center;
            h3 {
              color: black;
            }
            
          div{
            width: 50vw;
            height: 30vh;
            border-top-left-radius: 15rem;
            border-top-right-radius: 15rem;
            margin-bottom: 1rem;
          }
        }
    }

  //rendre responsive pour laterale mobile et tablette 13pouces et 15 pouces et 24 pouces
    @media (min-width: 650px) {
        h1{
            
        }
        ul {
          
            li {
                
                h3 {
                    
                }
            }
        }
    }
  @media (min-width: 1000px) {
    h1{
      font-size: 7rem;
    }
    ul {
        flex-direction: row;
        flex-wrap: wrap;
      li {
        width: 30vw;
        margin: 0 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 2rem;
        }
        div{
            width: 30vw;
            height: 40vh;
        };
      }
    }
  }

  @media (min-width: 1200px) {
    h1{
      font-size: 10rem;
    }
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: 25vw;
        margin: 2rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 2.5rem;
        }
        div{
          width: 25vw;
          height: 40vh;
        };
      }
    }
  }
  @media (min-width: 1615px) {
    height: 100vh;
    h1{
      font-size: 15rem;
    }
    ul {
        display: flex;
      justify-content: center;
        align-items: center;
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 15vw;
        height: 55vh;
        
        h3 {
          font-size: 2.5rem;
        }
        div{
          width: 15vw;
          height: 35vh;
        }
      }
    }
  }
`;


const Realisation = () => {
    return (
            <Container>
                <h1>Mes réalisations</h1>
                <ul>
                    <li>
                        <Link href="https://www.awwwards.com/">
                            <div className="pictureSite"></div>
                            <h3>
                                J'ai créé plusieurs sites web, que vous pouvez
                                découvrir
                            </h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.apple.com/">
                            <div className="pictureApp"></div>
                            <h3>
                                J'ai également développé plusieurs applications que
                                j'ai rendues disponibles sur GitHub.
                            </h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://coinmarketcap.com/fr/currencies/digibyte/">
                            <div className="pictureBlockChain"></div>
                            <h3>
                                Découvrez le fonctionnement de la blockchain
                                Digibyte, que j'ai créée avec des collaborateurs.
                            </h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://openai.com/dall-e-2/">
                            <div className="pictureIA"></div>
                            <h3>
                                J'ai exploré les possibilités de l'IA en créant
                                plusieurs projets intéressants.
                            </h3>
                        </Link>
                    </li>
                </ul>
            </Container>
            );
};

export default Realisation;