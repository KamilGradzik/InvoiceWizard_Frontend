import { ReactElement } from "react";
import TextField from '@mui/material/TextField';
import "../assets/styles/auth-view.scss";
import logoDark from "../assets/images/logo_dark.svg";
import { FormControl } from "@mui/base";
import { Button, Typography, Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import IRegister from "../models/register-form";

const RegisterView:React.FC = ():ReactElement => {
    const { control, handleSubmit, formState:{errors }, getValues } = useForm<IRegister>()
    const validateRepeatedEmail = (value: string) => {
        const email = getValues('email');
        console.log(value === email);
        return value === email || 'E-maile nie są identyczne!';
    };
    const validateRepeatedPassword = (value: string) => {
        const password = getValues('password');
        console.log(value === password)
        return value === password || 'Hasła nie są identyczne!';
    };
    const SubmitRegister = (data: IRegister) => {
        console.log(data)
    }
    return(
        <div className="AuthView-wrapper">
            <div className="AuthView">
                <div className="AuthView-logo">
                    <img src={logoDark} className="AuthView-logoImage" alt="App logo in dark theme. Presents invoice file wearing wizard hat"></img>
                    <Typography variant={"h1"} className="AuthView-logoTitle" gutterBottom>InvoiceWizard</Typography>
                </div>
                <div className="AuthView-form">
                    <form onSubmit={handleSubmit(SubmitRegister)} noValidate={true}>
                        <FormControl className="AuthView-formControl">
                            <Controller 
                                name={"email"}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Pole jest wymagane!",
                                    pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message:"Email jest nie poprawny!"}
                                }}
                                render={({field}: {field: any}) => (
                                    <TextField
                                        {...field}
                                        type={"text"} 
                                        label={"E-mail"} 
                                        autoComplete={"off"} 
                                        placeholder={"Wprowadź e-mail"} 
                                        variant={"standard"}
                                        error={!!errors.email}
                                        helperText={errors.email && errors.email.message}/>
                                )}
                            />
                        </FormControl>
                        <FormControl className="AuthView-formControl">
                            <Controller 
                                name={"repeated_email"}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Pole jest wymagane!",
                                    validate: validateRepeatedEmail,
                                }}
                                render={({field}: {field: any}) => (
                                    <TextField
                                        {...field}
                                        type={"text"} 
                                        label={"Potwierdź e-mail"} 
                                        autoComplete={"off"} 
                                        placeholder={"Potwierdź swój e-mail"} 
                                        variant={"standard"}
                                        error={!!errors.repeated_email}
                                        helperText={errors.repeated_email && errors.repeated_email.message}/>
                                )}
                            />
                        </FormControl>
                        <FormControl className="AuthView-formControl">
                            <Controller 
                                name={"password"}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Pole jest wymagane!",
                                    pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, message: "Hasło nie jest bezpieczne. Wymagane min. 8 znaków, conajmniej 1 mała i duża litera, 1 cyfra oraz znak specjalny!" }
                                }}
                                render={({field}: {field: any}) => (
                                    <TextField 
                                        {...field}
                                        type={"password"} 
                                        label={"Hasło"} 
                                        placeholder={"Wprowadź hasło"} 
                                        variant={"standard"} 
                                        error={!!errors.password}
                                        helperText={errors.password && errors.password.message}
                                        />
                                )}
                            />
                        </FormControl>
                        <FormControl className="AuthView-formControl">
                            <Controller 
                                name={"repeated_password"}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Pole jest wymagane!",
                                    validate: validateRepeatedPassword,
                                }}
                                render={({field}: {field: any}) => (
                                    <TextField 
                                        {...field}
                                        type={"password"} 
                                        label={"Potwierdź Hasło"} 
                                        placeholder={"Potwierdź swoje hasło"} 
                                        variant={"standard"} 
                                        error={!!errors.repeated_password}
                                        helperText={errors.repeated_password && errors.repeated_password.message}
                                        />
                                )}
                            />
                        </FormControl>
                        <FormControl className="AuthView-formSubmit AuthView-Register">
                            <Button variant={"contained"} type={"submit"}>Zarejestruj</Button>
                        </FormControl>
                    </form>
                    <Divider />
                </div>
                <div className="AuthView-registerSwitch">
                    <span>Masz już konto?&nbsp;</span>
                    <span><a href="/">Zaloguj się</a></span>
                </div>
            </div>
        </div>
    )
}
export default RegisterView