import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, FormField } from "../";
import StyledForm from "./styles";

const HookForm = ({
  schema,
  fields,
  onSubmit,
  exclude = [],
  buttonDisabled,
  buttonTitle = "Submeter",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const action = ({ ...all }) => {
    const data = { ...all };

    if (exclude.length) {
      for (const item of exclude) {
        delete data[item];
      }
    }
    onSubmit(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(action)}>
      {fields &&
        fields.map((item, index) => (
          <FormField
            label={item.label}
            error={errors[item.name]?.message}
            name={item.name}
            key={index}
            fieldType={item.fieldType}
            type={item.type}
            placeholder={item.placeholder}
            register={register}
            options={item.options}
            onChange={item.onChange}
            value={item.value}
          />
        ))}

      <div>
        <Button
          variant="confirm"
          title={buttonTitle}
          type="submit"
          disabled={buttonDisabled}
        />
      </div>
    </StyledForm>
  );
};

export default HookForm;

//! Exemplos de props

// const schema = yup.object().shape({
//   username: yup
//     .string()
//     .length(11, "Esse não é um CPF válido")
//     .required("CPF Necessário"),
//   name: yup.string().required("Nome Necessário"),
//   password: yup.string().required("Senha é necessária"),
//   confirmPassword: yup
//     .string()
//     .required("Necessário confirmar")
//     .oneOf([yup.ref("password")], "Você não digitou a mesma senha"),
//   persona: yup.number().required("Interesse é obrigatório"),
//   telefone: yup.string().required("Telefone é necessário"),
//   email: yup
//     .string()
//     .email("Não é um formato de e-mail válido")
//     .required("E-mail é necessário"),
// });

// const fields = [
//   { name: "username", label: "CPF", placeholder: "Digite o CPF" },
//   { name: "name", label: "Nome", placeholder: "Digite o Nome" },
//   {
//     name: "password",
//     label: "Senha",
//     placeholder: "Digite a senha",
//     type: "password",
//   },
//   {
//     name: "confirmPassword",
//     label: "Confirme a senha",
//     placeholder: "Confirme sua senha",
//     type: "password",
//   },
//   { name: "telefone", label: "Telefone", placeholder: "Digite o telefone" },
//   { name: "email", label: "E-mail", placeholder: "Digite o email" },
//   {
//     name: "persona",
//     label: "Interesse",
//     fieldType: "select",
//     options: personas,
//   },
// ];

// const onSubmit = (data) => {
//   signupUser(data);
//   setIsLogin(true);
// };
