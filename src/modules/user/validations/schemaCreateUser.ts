import yup from "../../../validator/configurations";

const userValidationSchema = yup.object().shape({
  userName: yup.string()
    .required('O nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  
  email: yup.string()
    .required('O email é obrigatório')
    .email('O email deve ser um endereço de email válido')
    .max(100, 'O email deve ter no máximo 100 caracteres'),

  password: yup.string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .max(30, 'A senha deve ter no máximo 30 caracteres')
    .matches(/[a-zA-Z]/, 'A senha deve conter pelo menos uma letra')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número'),
});

export default userValidationSchema;
