import yup from "../../../validator/configurations";
import { ChargeStatus } from "../enum/chargeStatus.enum";

const chargeStatusValues = Object.values(ChargeStatus)

const chargeValidationSchema = yup.object().shape({
  customerName: yup.string()
    .required('O nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  
  description: yup.string()
    .required('A descrição é obrigatória')
    .max(100, 'A descrição deve ter no máximo 100 caracteres'),

  chargeStatus: yup
  .string()
  .oneOf(chargeStatusValues, `O status deve ser um dos seguintes: ${chargeStatusValues.join(", ")}`)
  .required("O status é obrigatório"),

  chargeValue: yup
  .number()
  .required("O valor da cobrança é obrigatório"),

  chargeDueDate: yup
  .date()
  .required("A data de vencimento é obrigatória")
});

export default chargeValidationSchema;
