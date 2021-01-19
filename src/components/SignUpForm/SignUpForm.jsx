import { Component } from 'react';
import { signUp } from '../../utilities/users-services'

export default class SignUpForm extends Component {

    state = {
        name:'',
        password:'',
        email:'',
        confirm:'',
        error:'',
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error:''
    });
}

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {...this.state}; //makes a copy of our state object
            delete formData.error; //Delete keyword!
            delete formData.confirm;
            const user = await signUp(formData); // signUp --> User should be what we return from controller fn
            console.log(user)
        } catch {
            this.setState({ error: 'Sign Up Failed! - Try Again!'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
            return (
                <div>
                    <div className="form-container" >
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                            <label>email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <label>confirm</label>
                            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
                            <button type='submit' disabled={disable}>SIGN UP</button>
                        </form>
                        <label name="error"></label>
                    </div>
                    <p>{this.state.error}</p>
                </div>
            )
    }
}

