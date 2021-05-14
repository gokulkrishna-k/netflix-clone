import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Header, Form } from "../components";
import * as ROUTES from "../constants/routes";
import { Footer } from "../components";
import { FirebaseContext } from "../context/firebase";
import logo from "../logo.svg";

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === "" || emailAddress === "";

    const handleSignIn = (event) => {
        event.preventDefault();

        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress("");
                setPassword("");
                setError(error.message);
            });
    };
    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>

                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            type="password"
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix?{" "}
                            <Form.Link to={ROUTES.SIGN_UP}>
                                Sign up now.
                            </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </Header>
            <Footer>
                <Footer.Title>Questions? Call Us.</Footer.Title>

                <Footer.Break />
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link href="#">
                            Corporate Information
                        </Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Terms of Use</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Privacy</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Break />
                <Footer.Text>Netflix India</Footer.Text>
            </Footer>
        </>
    );
}
