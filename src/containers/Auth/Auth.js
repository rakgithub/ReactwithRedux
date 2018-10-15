import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import * as formData from '../../components/UI/Form/formData';

class Auth extends React.Component{

    state = {
        orderForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }
    render(){
       // const loginForm = formData.loginForm;
        
        const form = Object.keys(loginForm).map((data) => {
            <Input 
                        key={data}
                        elementType={loginForm.data.elementType}
                        elementConfig={loginForm.data.elementConfig}
                        value={loginForm.data.value}
                        invalid={!loginForm.data.valid}
                        shouldValidate={loginForm.data.validation}
                        touched={loginForm.data.touched}
                        changed={(event) => this.inputChangedHandler(event, data)} />
    
        });


        return(
            <div>
                <form>
                    {form}
                    <Button btnType="Success">Login </Button>
                </form>
            </div>
        )
    }
}