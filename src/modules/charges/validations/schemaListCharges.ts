import yup from "../../../validator/configurations";

const listChargesValidationSchema = yup.object().shape({
    customerCpf: yup
    .string()
    .min(11, "CPF must have 11 digits")
    .max(11, "CPF must have 11 digits"),
    description: yup
    .string(),
    chargeStatus: yup
    .string(),
    chargeValue: yup
    .number(),
    chargeDueDate: yup
    .date(),
});

export default listChargesValidationSchema;
