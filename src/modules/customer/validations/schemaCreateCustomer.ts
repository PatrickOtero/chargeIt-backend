import yup from "../../../validator/configurations";

const createCustomerValidationSchema = yup.object().shape({
  customerName: yup.string()
    .required('O nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  
  customerEmail: yup.string()
    .required('O email é obrigatório')
    .email('O email deve ser um endereço de email válido')
    .max(100, 'O email deve ter no máximo 100 caracteres'),

    customerCpf: yup.string()
    .required('O cpf é obrigatório')
    .min(11, 'Insira um cpf válido')
    .max(11, 'Insira um cpf válido'),

    customerPhone: yup.string()
    .required('O telefone é obrigatório')
    .min(9, 'Insira um número de telefone válido')
    .max(9, 'Insira um número de telefone válido'),
});

export default createCustomerValidationSchema;
