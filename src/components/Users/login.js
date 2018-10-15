import React from 'react';
import InputField from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const login = (props) => (
    <div>
        <div>
        Username: <InputField type="text" placeholder="username" /> 
        </div>
        <div>
        Password: <InputField type="password" placeholder="password" />
        </div>
        <div>
            <Button btnType="Success">Login</Button>
        </div>

    </div>
);