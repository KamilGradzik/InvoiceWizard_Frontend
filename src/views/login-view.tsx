import { ReactElement } from "react";
import TextField from '@mui/material/TextField';
import "../assets/styles/auth-view.scss";
import logoDark from "../assets/images/logo_dark.svg";
import { FormControl } from "@mui/base";
import { Checkbox, FormControlLabel, Button, Typography, Divider } from "@mui/material";

const LoginView:React.FC = ():ReactElement => {
    const SubmitLogin = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Event fired!")
    }
    return(
        <div className="AuthView-wrapper">
            <div className="AuthView">
                <div className="AuthView-logo">
                    <img src={logoDark} className="AuthView-logoImage" alt="App logo in dark theme. Presents invoice file wearing wizard hat"></img>
                    <Typography variant={"h1"} className="AuthView-logoTitle" gutterBottom>InvoiceWizard</Typography>
                </div>
                <div className="AuthView-form">
                    <form onSubmit={(e:React.ChangeEvent<HTMLFormElement>)=>SubmitLogin(e)} noValidate={true}>
                        <FormControl className="AuthView-formControl">
                            <TextField type={"text"} label={"E-mail"} autoComplete={"off"} placeholder={"Wprowadź e-mail"} variant={"standard"}  />
                        </FormControl>
                        <FormControl className="AuthView-formControl">
                            <TextField type={"password"} label={"Hasło"} placeholder={"Wprowadź hasło"} variant={"standard"} />
                        </FormControl>
                        <FormControl className="AuthView-formControl AuthView-loginOptions">
                            <FormControlLabel control={<Checkbox />} label="Zapamiętaj mnie" />
                            <a href="/">Zresetuj Hasło</a>
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
        </div>
    )
}
export default LoginView