import { ReactElement, useState } from "react";
import TextField from '@mui/material/TextField';
import "../assets/styles/auth-view.scss";
import logoDark from "../assets/images/logo_dark.svg";
import { FormControl } from "@mui/base";
import { Checkbox, FormControlLabel, Button, Typography, Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ILogin from "../models/login-form";
import ResetPasswordModal from "../components/reset-password-modal/reset-password-modal";

const LoginView:React.FC = ():ReactElement => {
    const { control, handleSubmit, formState:{errors } } = useForm<ILogin>(({mode:'onChange'}))
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const SubmitLogin = (data: ILogin) => {
        //TO DO - API CONNECTION
    }
    return(
        <div className="AuthView-wrapper">
            <div className="AuthView">
                <div className="AuthView-logo">
                    <img src={logoDark} className="AuthView-logoImage" alt="App logo in dark theme. Presents invoice file wearing wizard hat"></img>
                    <Typography variant={"h1"} className="AuthView-logoTitle" gutterBottom>InvoiceWizard</Typography>
                </div>
                <div className="AuthView-form">
                    <form onSubmit={handleSubmit(SubmitLogin)} noValidate={true}>
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
                                name={"password"}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Pole jest wymagane!",
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
                        <FormControl className="AuthView-formControl AuthView-loginOptions">
                            <Controller 
                                name={"remember_me"}
                                control={control}
                                defaultValue={false}
                                render={({field}: {field: any}) => (
                                    <FormControlLabel 
                                        control={<Checkbox {...field}/>} 
                                        label="Zapamiętaj mnie" 
                                    />
                                )}
                            />
                            <span className="AuthView-PasswordReset" onClick={()=>setModalOpen(true)}>Zresetuj Hasło</span>
                        </FormControl>
                        <FormControl className="AuthView-formSubmit">
                            <Button variant={"contained"} type={"submit"}>Zaloguj</Button>
                        </FormControl>
                    </form>
                    <Divider />
                </div>
                <div className="AuthView-registerSwitch">
                    <span>Potrzebujesz konta?&nbsp;</span>
                    <span><a href="/">Zarejestruj się</a></span>
                </div>
            </div>
            <ResetPasswordModal open={modalOpen} handleClose={setModalOpen} />
        </div>
    )
}
export default LoginView