//
// export enum EFieldType {
//   TEXT = 'text',
//   NUMBER = 'number',
//   DATE = 'date',
//   EMAIL = 'email',
//   PASSWORD = 'password',
//   CHECKBOX = 'checkbox',
//   RADIO = 'radio',
//   TEL = 'tel',
//   TEXTAREA = 'textarea'
// }

type TInputType = 'text' | 'number' | 'date' | 'email' | 'password' | 'checkbox' | 'radio' | 'tel' | 'textarea'

export type TFormField<T> = ({
  type: TInputType
} | {
  type: 'select',
  option: {
    value: string,
    label: string
  }[]
}) & {
  label: string
  required: boolean,
  placeholder?: string,
  name: keyof T,
}
