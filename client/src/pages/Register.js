import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
          errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history); 

    };
    
    render() {
        const { errors } = this.state;
    
        return (
            <div className="registerPage">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                            <div className="row">
                                <div className="leftLogin col-md-5">
                                    <div className="centered">
                                        <div className="row text-center">
                                            <div className="">
                                            <h1>Welcome</h1>
                                            <p><i>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</i></p>
                                            <Link to="/">See More <i class="fas fa-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightLogin col-md-7 p-5">
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <h3>Register Account</h3>
                                        </div>
                                        <div className="col-12">
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn btn-facebook px-4 py-2">
                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> <i className="fab fa-facebook"></i> Facebook
                                                </label>
                                                <label className="btn btn-instagram px-4 py-2">
                                                    <input type="radio" name="options" id="option2" autocomplete="off"/> <i className="fab fa-instagram"></i> Instagram
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-5 mb-5">
                                        <div className="col-12">
                                            <form noValidate onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Full Name:</label>
                                                    <span className="red-text">{errors.name}</span>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.name}
                                                        error={errors.name}
                                                        id="name"
                                                        className={classnames("form-control", {
                                                            invalid: errors.name
                                                        })}
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <span className="red-text">{errors.email}</span>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.email}
                                                        error={errors.email}
                                                        id="email"
                                                        className={classnames("form-control", {
                                                            invalid: errors.name
                                                        })}
                                                        type="email"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <span className="red-text">{errors.password}</span>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.password}
                                                        error={errors.password}
                                                        id="password"
                                                        className={classnames("form-control", {
                                                            invalid: errors.name
                                                        })}
                                                        type="password"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password2">Confirm Password</label>
                                                    <span className="red-text">{errors.password2}</span>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.password2}
                                                        error={errors.password2}
                                                        id="password2"
                                                        className={classnames("form-control", {
                                                            invalid: errors.name
                                                        })}
                                                        type="password"
                                                    />
                                                </div>
                                                {/* <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div> */}
                                                <button type="submit" className="btn btn-block btn-primary mt-4 waves-effect waves-light hoverable blue accent-3">Register Account</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="switch bottom-center mt-5">
                                        <p>Already have an account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);