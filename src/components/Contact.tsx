// create a component

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";


const Container = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 5rem;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: white;
      }

      input, textarea {
        padding: 1rem;
        border: 0.1rem solid #fff;
        border-radius: 0.5rem;
        font-size: 1.6rem;
        width: 100%;
        color: white;
        background-color: transparent;

        &:focus {
          outline: none;
          border-color: #3b82f6;
        }
      }

      p {
        color: red;
        margin-top: 0.5rem;
        font-size: 1.4rem;
      }
    }

    button {
      padding: 1rem 2rem;
      background-color: #3b82f6;
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 1.6rem;
      cursor: pointer;
      margin-top: 2rem;

      &:hover {
        background-color: #2563eb;
      }
    }

    textarea {
      height: 10rem;
      resize: none;
      border-color: #fff;
    }
  }

  //rendre responsive pour laterale mobile et tablette 13pouces et 15 pouces et 24 pouces
    @media (min-width: 650px) {
      h1 {
        
      }
        form {
            laber {
                font-size: 2rem;
            }
            input, textarea {
              font-size:1.8rem;
            }
          
        }
      
    }

  @media (min-width: 1000px) {
    h1 {
  font-size: 7rem;
    }
    form {
      
      div{
        width: 25vw;
        
        laber {
          font-size: 2rem;
        }
        input, textarea {
          font-size:1.8rem;

        }
      }
      

    }

  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 10rem;
    }
    form {

      div{
        

        laber {
          font-size: 2.5rem;
        }
        input, textarea {
          font-size:2.3rem;

        }
      }


    }

  }
  @media (min-width: 1615px) {
    h1 {
      font-size: 15rem;
    }
    form {

      div{


        laber {
          font-size: 2.5rem;
        }
        input, textarea {
          font-size:2.3rem;

        }
      }


    }

  }
  
  

`;

type FormInputs = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        emailjs.send(
            "service_u2iqvxg",
            "template_034wm4q",
            {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            "vVY4hYn7QCXtGq0m8"
        );

        console.log("message envoyé");
    };

    return (
        <Container>
            <h1>Contactez-moi</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input
                        {...(register("name"), { required: true })}
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        {...(register("email"), { required: true })}
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message :</label>
                    <textarea
                        {...register("message")}
                        name="message"
                        id="message"
                    />
                </div>
                {errors.email && <p>il manque un email</p>}
                {errors.name && <p>il manque un name</p>}
                <button type="submit">Envoyer</button>
            </form>
        </Container>
    );
};

export default Contact;