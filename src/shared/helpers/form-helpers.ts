import { ValidateMessages } from "rc-field-form/lib/interface";

export const validateMessages: ValidateMessages = {
  required: 'Поле обязательно для заполнения',
  string: {
    min: 'Минимум ${min} символов',
    max: 'Максимум ${max} символов',
  },
  types: {
    number: 'Должно быть числом',
    string: 'Должно быть строкой'
  },
} 