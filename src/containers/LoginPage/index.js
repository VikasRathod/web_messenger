import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/index';
import Card from '../../components/UI/Card/index';

import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { signin, isLoggedInUser } from '../../actions/auth.actions';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    // useEffect(() => {
    //     if (!auth.authenticated) {
    //         dispatch(isLoggedInUser())
    //     }
    // }, [])

    const userLogin = (e) => {
        e.preventDefault();
        if (email == '') {
            alert('Email is required');
            return
        }
        if (password == '') {
            alert('password is required');
            return
        }
        dispatch(signin({ email, password }));

    }

    if (auth.authenticated) {
        return <Redirect to={'/'} />
    }


    return (
        <Layout>
            <div className="loginContainer">
                <Card>
                    <form className="formStyling" onSubmit={userLogin}>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    )
}

export default LoginPage;