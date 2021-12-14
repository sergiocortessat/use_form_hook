import React, { ChangeEvent, ReactEventHandler } from "react";
import "./style.css";
import { useForm } from "react-hook-form";

type IForm = {
  Email: string;
  Password: string;
};

const FormValidation = () => {
  const {
    register,
    handleSubmit,
  } = useForm<IForm>();

  const handleFormSubmit = (data: IForm) => {
    console.log(data);
  };

  const labelSpan = (word: string) =>
    word.split("").map((letter, index) => {
      return (
        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
          {letter}
        </span>
      );
    });

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-control">
          <input
            type="text"
            {...register("Email", { required: true })}
            required
            onInvalid={(e: ChangeEvent<HTMLInputElement>) =>
              e.target.setCustomValidity("Email is required")
            }
          />
          <label>{labelSpan("Email")}</label>
        </div>

        <div className="form-control">
          <input
            type="password"
            {...register("Password", { required: true })}
            required
            onInvalid={(e: ChangeEvent<HTMLInputElement>) =>
              e.target.setCustomValidity("Password is required")
            }
          />

          <label>{labelSpan("Password")}</label>
        </div>

        <button type="submit" className="btn">
          Login
        </button>
        <p className="text">
          Dont have an account?
          <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default FormValidation;
