import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { withRouter } from "react-router-dom";


class RegistrationForm extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
                persons: [],
                users: []
            }
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleCertidChange = this.handleCertidChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handlePMemailChange = this.handlePMemailChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    }

    handleNameChange(e){
        this.setState({name: e.target.value})
    }

    handleCertidChange(e){
        this.setState({certid: e.target.value})
    }

    handleEmailChange(e){
        this.setState({email: e.target.value})
    }

    handlePMemailChange(e){
        this.setState({pmemail: e.target.value})
    }

    componentDidMount() {
    axios.get(`http://localhost:3000`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
          name: this.state.name,
          certid: this.state.certid,
          email: this.state.email,
          pmemail: this.state.pmemail,
        }
        
        axios.post('http://localhost:3000', employee)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })         
      
    }  
    render() {
      return (
        <div className="card col-12 col-lg-4 mx-auto">
        <form>
         <div className="form-group text-left">
            <label htmlFor="inputName">Name</label>
            <input type="name" 
                   className="form-control" 
                   id="name" 
                   placeholder="Enter Name" 
                   //value={state.name}
                   onChange={this.handleNameChange}
            />
            </div>
            <div className="form-group text-left">
            <label htmlFor="inputCertId">Certification ID</label>
            <input type="certid" 
                   className="form-control" 
                   id="certid" 
                   aria-describedby="certIdHelp" 
                   placeholder="Certification ID" 
                   //value={state.certid}
                   onChange={this.handleCertidChange}
            />
            <small id="certIdHelp" className="form-text text-muted">Format: ###-###-###.</small>
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   placeholder="Enter email" 
                   //value={state.email}
                   onChange={this.handleEmailChange}
            />
            </div>
            <div className="form-group text-left">
                <label htmlFor="inputpeoplemanageremail">People Manager Email</label>
                <input type="email" 
                    className="form-control" 
                    id="pmemail" 
                    placeholder="People Manager Email"
                    //value={state.pmemail}
                    onChange={this.handlePMemailChange} 
                />
            </div>
            <button 
                type="submit" 
                className="btn submitButton"
                onClick={this.onSubmit}
            >
                Register
            </button>
        </form>
        
    </div>
    );
    }


}



/*
function RegistrationForm(props) {
    const [state , setState] = useState({
        name : "",
        certid : "",
        email: "",
        pmemail : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.name.length && state.certid.length && state.email.length && state.pmemail.length) {
            props.showError(null);
            const payload={
                "name":state.name,
                "certid":state.certid,
                "email":state.email,
                "pmemail":state.pmemail
            }
            axios.post('http://localhost:4000/api/register', payload)
                .then(function (response) {
                    if(response.data.code === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        // put into db
    }
    return(
        <div className="card col-12 col-lg-4 mx-auto">
            <form>
             <div className="form-group text-left">
                <label htmlFor="inputName">Name</label>
                <input type="name" 
                       className="form-control" 
                       id="name" 
                       placeholder="Enter Name" 
                       value={state.name}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="inputCertId">Certification ID</label>
                <input type="certid" 
                       className="form-control" 
                       id="certid" 
                       aria-describedby="certIdHelp" 
                       placeholder="Certification ID" 
                       value={state.certid}
                       onChange={handleChange}
                />
                <small id="certIdHelp" className="form-text text-muted">Format: ###-###-###.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="inputpeoplemanageremail">People Manager Email</label>
                    <input type="email" 
                        className="form-control" 
                        id="pmemail" 
                        placeholder="People Manager Email"
                        value={state.pmemail}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn submitButton"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already in the system? </span>
                <span className="loginText" onClick={() => redirectToHome()}>Go back here</span> 
            </div>
            
        </div>
    )
}



after form 
        <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
            {state.successMessage}
        </div>
        <div className="mt-2">
            <span>Already in the system? </span>
            <span className="loginText" onClick={() => redirectToHome()}>Go back here</span> 
        </div>
*/

export default withRouter(RegistrationForm);