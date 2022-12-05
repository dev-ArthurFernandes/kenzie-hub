import { useForm } from "react-hook-form";
import * as yup from "yup";
import { StyledForm } from "../../styles/FormStyle.js"
import { Input } from "../Inputs"
import { Select } from "../Selects"
import { StyledButton } from "../Buttons/style.js"
import { StyledErrorMensage } from "../../styles/ErrorMessage.js"
import { BiErrorAlt } from "react-icons/bi"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api.js"


export const RegisterForm = () => {

  const RegisterSharp = yup.object().shape({
    email: yup.string().required("O email é obrigatóiro").email("Você deve passar um email valido"),
    password: yup.string().required("A senha é obrigatória").min(6, "Sua senha deve conter no minímo 6 caracteres"),
    name: yup.string().required("O nome é obrigatório").min(3, "Seu nome deve contar no minímo 3 caracteres"),
    bio: yup.string().required("Você precisa inserir uma Bio").min(10, 'Sua bio deve conter no minímo 10 caracteres'),
    contact: yup.string().required('Insira um meio de contato')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(RegisterSharp),
  });

  const submit = async (data) => {
    console.log(data)

    await api.post("/users", data).then(resp => {
      if (resp.status !== 404) {
        alert('Cadastro feito com sucesso!')
      }
    }).catch(error => console.error(error))

  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Cadastro</h2>
      <Input
        name={"email"}
        text={"Email"}
        register={register("email")}
        placeholder={"Digite seu email"}
      />
      <Input
        name={"password"}
        text={"Senha"}
        register={register("password")}
        placeholder={"Digite sua senha"}

      />

      <Input
        name={"name"}
        text={"Nome"}
        register={register("name")}
        placeholder={"Digite seu nome"}
      />

      <Input
        name={"bio"}
        text={"Bio"}
        register={register("bio")}
        placeholder={"Crie uma bio"}
      />
      <Input
        name={"contact"}
        text={"Contato"}
        register={register("contact")}
        placeholder={"LinkedIn/GitHub/Instagram/"}
      />
      <Select name={"course_module"} register={register("course_module")} text={"Modúlo do Curso"}>
        <option>Modulo 1</option>
        <option>Modulo 2</option>
        <option>Modulo 3</option>
        <option>Modulo 4</option>
        <option>Modulo 5</option>
        <option>Modulo 6</option>
      </Select>
      <StyledButton className="Primary Cem">Cadastrar</StyledButton>
      {
        errors.email || errors.name || errors.password ? <StyledErrorMensage>
          <BiErrorAlt />
          {errors.email && <p>{errors.email.message}</p>}
          {errors.name && <p>{errors.name.message}</p>}
          {errors.password && <p>{errors.password.message}</p>}
        </StyledErrorMensage> : <></>
      }
    </StyledForm>
  );
};
