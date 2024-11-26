import yup from "../../../validator/configurations";

const schemaLogin = yup.object().shape({
    password: yup
    .string()
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])[a-zA-Z\d!@#$%^&*()\-_=+{};:,<.>.]{8,}$/,
        {
          message:
            'Password must have a minimum of 8 characters, a capital letter, a number and a symbol',
        },
      )
    .required("The field 'password' is required")
    .trim(),

    email: yup
    .string()
    .required("The field 'email' is required")
    .email()
    .trim(),
});

export default schemaLogin;