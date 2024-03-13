import { ReactElement } from "react";
import TextField from '@mui/material/TextField';
import "../assets/styles/login-view.scss";
import { FormControl } from "@mui/base";
import { Checkbox, FormControlLabel, Button, Typography, Divider } from "@mui/material";

const LoginView:React.FC = ():ReactElement => {
    const SubmitLogin = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Event fired!")
    }
    return(
        <div className="login-view-wrapper">
            <div className="login-view">
                <Typography variant={"h1"} gutterBottom>InvoiceWizard</Typography>
                <div className="login-view-form">
                    <form onSubmit={(e:React.ChangeEvent<HTMLFormElement>)=>SubmitLogin(e)} noValidate={true}>
                        <FormControl className="login-view-form-control">
                            <TextField type={"text"} label={"E-mail"} autoComplete={"off"} placeholder={"Wprowadź e-mail"} variant={"standard"} />
                        </FormControl>
                        <FormControl className="login-view-form-control">
                            <TextField type={"password"} label={"Hasło"} placeholder={"Wprowadź hasło"} variant={"standard"} />
                        </FormControl>
                        <FormControl className="login-view-form-control login-options">
                            <FormControlLabel control={<Checkbox />} label="Zapamiętaj mnie" />
                            <a href="/">Zresetuj Hasło</a>
                        </FormControl>
                        <FormControl className="login-view-form-submit">
                            <Button variant={"contained"} type={"submit"}>Zaloguj</Button>
                        </FormControl>
                    </form>
                    <Divider />
                </div>
                <div className="login-view-register">
                    <span>Potrzebujesz konta?&nbsp;</span>
                    <span><a href="/">Zarejestruj się</a></span>
                </div>
            </div>
        </div>
    )
}
export default LoginView