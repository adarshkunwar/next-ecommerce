import { TFormField, } from "@/types/form-field";
import { z } from "zod";

export const signInFormSchema = z.object({
	email: z.string().email({ message: 'Please enter valid Email' }),
	password: z.string().min(1, { message: 'Please enter password' })
})

export type TSignInFormSchema = z.infer<typeof signInFormSchema>

export const SignInFormDefaultValues: Partial<TSignInFormSchema> = {
	email: '',
	password: ''
}

export const SignInFormField: TFormField<TSignInFormSchema>[] = [
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Eg. johndoe@gmail.com',
		required: true,
	},
	{
		label: 'Password',
		type: 'password',
		placeholder: '********',
		name: 'password',
		required: true
	}
]
