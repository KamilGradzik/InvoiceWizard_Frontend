import { Box, Button, Divider, FormControl, Modal, TextField, Typography } from "@mui/material";
import { Dispatch, ReactElement } from "react";
import "./reset-password-modal.scss"
import { Controller, useForm } from "react-hook-form";
import IResetPassword from "../../models/reset-password";

const ResetPasswordModal:React.FC<{open:boolean, handleClose:Dispatch<boolean>}> = ({...props}):ReactElement => {
    const { control, handleSubmit, formState:{errors}, getValues, reset } = useForm<IResetPassword>()
    const SubmitPasswordReset = (data: IResetPassword) => {
        console.log(data)
    }
    const validateRepeatedPassword = (value: string) => {
        const password = getValues('new_password');
        return value === password || 'Hasła nie są identyczne!';
    };
    return(
        <Modal open={props.open} onClose={() => {props.handleClose(false); reset()}}>
            <Box className="ResetPassword-Box">
                <div className="ResetPassword-modal-title">
                    <Typography id="ResetPassword-modal-title-text" variant="h6" component="h2">
                        Resetowanie hasła
                    </Typography>
                </div>
                <Divider />
                <div className="ResetPassword-modal-body">
                    <form className="ResetPassword-form" noValidate={true} onSubmit={handleSubmit(SubmitPasswordReset)}>
                        <FormControl className="ResetPassword-form-formControl">
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
                        <FormControl className="ResetPassword-form-formControl">
                            <Controller 
                                name={"new_password"}
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
                                        label={"Nowe hasło"} 
                                        autoComplete={"off"} 
                                        placeholder={"Wprowadź nowe hasło"} 
                                        variant={"standard"}
                                        error={!!errors.new_password}
                                        helperText={errors.new_password && errors.new_password.message}/>
                                )}
                            />
                        </FormControl>
                        <FormControl className="ResetPassword-form-formControl">
                            <Controller 
                                name={"new_repeated_password"}
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
                                        label={"Potwierdź hasło"} 
                                        autoComplete={"off"} 
                                        placeholder={"Potwierdź nowe hasło"} 
                                        variant={"standard"}
                                        error={!!errors.new_repeated_password}
                                        helperText={errors.new_repeated_password && errors.new_repeated_password.message}/>
                                )}
                            />
                        </FormControl>
                        <FormControl className="ResetPassword-form-formSubmit">
                            <Button variant={"contained"} type={"submit"}>Resetuj</Button>
                        </FormControl>
                    </form>
                </div>
            </Box>
        </Modal>
    )
}

export default ResetPasswordModal