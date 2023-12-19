import * as yup from "yup";

export const addOperatorModalFormSchemas = yup.object().shape({
  name: yup.string().required("FISH kiritilishi shart!"),
  login: yup.number().positive().integer(),
  date_of_birth: yup.string().required("Tug'ilgan sana kiritilishi shart!"),
  Pasport_id: yup
    .string()
    .length(9, "Pasport seriya 9 xonadan iborat bo'lishi kerak."),
  pinfl: yup.string().length(14, "PINFL 14 xonadan iborat bo'lishi kerak."),
  phone_number: yup.string().required("Telefon raqam kiritilishi shart!"),
  address: yup
    .string()
    .min(15, "Yashash manzili to'liqroq kiriting")
    .required("Yashash manzili kiritilishi shart"),
});
