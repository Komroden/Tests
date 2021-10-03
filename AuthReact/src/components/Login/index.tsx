import React, {useState} from 'react';
import { Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    DialogActions,
    Button } from '@mui/material';
import {useHistory} from "react-router-dom";
import {userApi} from "../../api/request/auth";

export const Login:React.FC = () => {

    const {push} = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e:any) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handleLogIn = async (e:any) => {
        e.preventDefault();

        try {
            await userApi.login(email, password);
            push('/content');
        } catch (e:any) {
            setError(e.toString());
        }
    };
    return (
        <div>
            <Dialog open={true} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
            <DialogContent>

                <TextField
                    autoFocus={true}
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                    fullWidth={true}
                />
                <TextField
                    autoFocus={true}
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    onChange={handlePassChange}
                    value={password}
                    fullWidth={true}
                />
            </DialogContent>
                <DialogActions>
                    {error && <p>{error.toString()}</p>}
                    <Button  type="submit" onClick={handleLogIn} color="primary" >Log in</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

