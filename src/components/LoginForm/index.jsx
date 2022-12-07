import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../../services/api";
import { StyledForm } from "../../styles/FormStyle";
import { StyledButton } from "../Buttons/style";
import { Input } from "../Inputs";
import { Link } from "../Links";


export const LoginForm = ({setNotify, setMessage}) => {
  const navigate = useNavigate()

  const sharp = yup.object().shape({
    email: yup.string().required("O email é obrigatório"),
    password: yup.string().required("Você deve inserir sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(sharp),
  });

  const sendLogin = async (data) => {
    console.log(data)
    await api.post("/sessions", data)
      .then(resp => {
        window.localStorage.clear()
        window.localStorage.setItem('@KenzieHub:Token', resp.data.token)
        navigate('/dashbord')
      })
      .catch(err => {
        setMessage({text: err.response.data.message[0], type: err.response.data.status})
        setNotify(true)
        setTimeout(() => setNotify(false), 3000)
      })

  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(sendLogin)}>
      <h2>Login</h2>
      <Input
        text={"Email"}
        register={register("email")}
        placeholder={"Seu email aqui..."}
        name={"email"}
        errors={errors}
      />
      <Input
        text={"Senha"}
        register={register("password")}
        placeholder={"Sua senha aqui..."}
        name={"password"}
      />
      {errors.email && <p className="Errors">{errors.email.message}</p>}
      {errors.password && <p className="Errors">{errors.password.message}</p>}
      <StyledButton className="Primary Cem" type="submit">
        Entrar
      </StyledButton>
      <p>Ainda não possui conta?</p>
      <Link link={"/register"} text={"Cadastre-se"} className="Cem" />
    </StyledForm>

  );
};
