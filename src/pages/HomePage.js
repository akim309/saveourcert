import React from 'react';
import axios from 'axios';

class HomePage extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          persons: [],
          users: []
        }
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleJobChange = this.handleJobChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
      }

  handleIdChange(e) {
    this.setState({id: e.target.value})
  }
  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePhoneChange(e) {
    this.setState({phone: e.target.value})
  }

  handleJobChange(e) {
    this.setState({job: e.target.value})
  }

  handleCompanyChange(e) {
    this.setState({company: e.target.value})
  }

  handleAgeChange(e) {
    this.setState({age: e.target.value})
  }
  handleCityChange(e) {
    this.setState({city: e.target.value})
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
        phone: this.state.phone,
        email: this.state.email,
        job: this.state.job,
        company: this.state.company,
        age: this.state.age,
        city: this.state.city,
      }
      
      axios.post('http://localhost:3000', employee)
      .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })         
    
  }  
  render() {
    return (
    <div className="App">
       <form onSubmit={this.onSubmit} method="user" className="right">
        <input type="text" name="user_id" id="user_id" onChange={this.handleIdChange}/>
        <label>
        <span>name:</span>
        <input type="text" name="name" onChange={this.handleNameChange}/>
        </label>
        <label>
        <span>phone:</span>
        <input type="text" name="phone" onChange={this.handlePhoneChange}/>
        </label>
        <label>
        <span>email:</span>
        <input type="email" name="email" onChange={this.handleEmailChange}/>
        </label>
        <label>
        <span>job:</span>
        <input type="text" name="job"onChange={this.handleJobChange} />
        </label>
        <label>
        <span>company:</span>
        <input type="text" name="company" onChange={this.handleCompanyChange} />
        </label>
        <label>
        <span>age:</span>
        <input type="text" name="age" onChange={this.handleAgeChange} />
        </label>
        <label>
        <span>city:</span>
        <input type="text" name="city" onChange={this.handleCityChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
  }
}
export default HomePage;