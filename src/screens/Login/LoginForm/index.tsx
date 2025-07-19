import { useForm } from "react-hook-form";
import { AppInput } from "../../../components/AppInput";

export interface FormLoginParams {
    email: string
    password: string
}

export function LoginForm() {
    const { control, handleSubmit, formState: { isSubmitting }} = useForm<FormLoginParams>()

    return (
        <>
            <AppInput
              control={control}  
              name="email"  
              label="EMAIL"  
              placeholder="mail@example.br"
              leftIconName="mail-outline"
            />

            <AppInput
              control={control}  
              name="password"  
              label="SENHA"  
              placeholder="Sua senha"
              leftIconName="lock-outline"
              secureTextEntry
            />
        </>
    )
}