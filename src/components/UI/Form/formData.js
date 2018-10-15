export const loginForm =  {
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
        password:{
            elementType: 'input',
            elementConfig:{
                type: 'password',
                placeholder: 'Your Password'
            },
            value: '',
            validation: {
                required: true,
                isPassword: true
            },
            valid: false,
            touched: false
        },
    formIsValid: false
}