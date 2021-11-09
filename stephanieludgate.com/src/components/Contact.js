import React, { Component } from 'react';

import emailjs from 'emailjs-com';
import { Button, CircularProgress, IconButton, TextField, Snackbar } from '@material-ui/core';
import { MdSend } from 'react-icons/md';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import SquiggleSVG from '../icons/squiggle';
import MessagingSVG from '../images/messaging';
import StephAvatarSVG from '../images/steph-avatar';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            showSnackbar: false,
            isSending: false
        };
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({showSnackbar: false});
    }
      
  render() {
      
    const styles = {
        buttonProgress: {
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -13,
            marginLeft: -12,
        },
        primaryButton: {
            backgroundColor: '#333132',
            color: '#fff',
            cursor: 'pointer',
            textAlign: 'center',
            verticalAlign: 'center',
            padding: '10px 50px',
            borderRadius: '30px',
            textTransformransform: 'uppercase',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '0.9rem',
            letterSpacing: '1.5px',
            '&:hover': {
                backgroundColor: "#ff9",
            },
        },
        snakbar: {
                bottom: 90,
        },
        wrapper: {
            position: 'relative',
        },
      };

    return (
        <>
        <section id="contact">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="pb-1">
                            <SquiggleSVG />
                            Get in <span className="cursive-font px-1">touch</span>.
                        </h3>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                message: ''
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                this.setState({isSending: true});
                                    
                                setTimeout(() => {
                                    emailjs.send(
                                      'YOUR_EMAIL_SERVICE', //Email service as defined in EmailJS setting
                                      "YOUR_TEMPLATE_ID", // Email template ID provided by EmailJS
                                      {
                                        from_name: values.name,
                                        reply_to: values.email,
                                        message_html: values.message,
                                      },
                                      'YOUR_USER_ID' // EmailJS user ID
                                    )
                                    .then(() => {
                                        this.setState({isSending: false})
                                        this.setState({showSnackbar: true})
                                        setSubmitting(false)
                                        resetForm()
                                      })
                                    .catch(() => {
                                        setSubmitting(false)
                                        alert('Ooops something went wrong...')
                                      })
                                  }, 1000)
                            }}

                            validationSchema={yup.object().shape({
                                name: yup.string().required('Required'),
                                email: yup.string().email('Invalid Email').required('Required'),
                                message: yup.string().required('Required'),
                            })}
                        >
                        {(props) => {
                            const {
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                            } = props;
                        return (
                            <Form autoComplete="off">
                                <div className="row">
                                    <div className="col-12 pb-3 form-input">
                                        <TextField 
                                            id="outlined-basic" 
                                            name="name"
                                            label="Full Name" 
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.name && touched.name) && errors.name}
                                            error={errors.name && touched.name}
                                            variant="outlined" 
                                            fullWidth />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pb-3 form-input">
                                        <TextField 
                                            id="outlined-basic" 
                                            name="email"
                                            label="Email" 
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.email && touched.email) && errors.email}
                                            error={errors.email && touched.email}
                                            variant="outlined" 
                                            fullWidth />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pb-3 form-input">
                                        <TextField
                                            id="outlined-multiline-static"
                                            name="message"
                                            label="Message"
                                            value={values.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.message && touched.message) && errors.message}
                                            error={errors.message && touched.message}
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center send-wrapper" id={this.state.isSending ? 'send-wrapper-disable' : ''} style={styles.wrapper} >
                                        <Button
                                            type="submit"
                                            startIcon={<MdSend />}
                                            disableElevation
                                        >
                                            {this.state.isSending ? 'Sending' : 'Send'}
                                        </Button>
                                        {this.state.isSending && 
                                            <CircularProgress size={24} style={styles.buttonProgress} />}
                                    </div>
                                </div>                            
                        </Form>

                        );
                        }}
                        </Formik>
                        <div className="row d-block d-md-none" id="message-box-wrapper"> 
                            <div className="" id="message-box">
                                <div className="row">
                                    <div className="col">
                                        <StephAvatarSVG />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 30 10" className="loader">
                                            <circle className="dot" cx="4" cy="5" r="4"/>
                                            <circle className="dot" cx="15" cy="5" r="4"/>
                                            <circle className="dot" cx="26" cy="5" r="4"/>
                                        </svg>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="" id="reply-arrow">
                            </div>
                        </div>

                        {this.state.isMobile && (
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                style = {styles.snakbar}
                                open={this.state.showSnackbar}
                                autoHideDuration={5000}
                                onClose={this.handleSnackbarClose}
                                message="Message sent"
                                action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                    </svg>
                                    </IconButton>
                                </React.Fragment>
                                }
                            />
                        )}

                        <Snackbar
                            className="d-md-none"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            style = {styles.snakbar}
                            open={this.state.showSnackbar}
                            autoHideDuration={5000}
                            onClose={this.handleSnackbarClose}
                            message="Message sent"
                            action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                </svg>
                                </IconButton>
                            </React.Fragment>
                            }
                            />

                            <Snackbar
                                className="d-none d-md-flex"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                open={this.state.showSnackbar}
                                autoHideDuration={5000}
                                onClose={this.handleSnackbarClose}
                                message="Message sent"
                                action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                    </svg>
                                    </IconButton>
                                </React.Fragment>
                                }
                            />
                    </div>
                    <div className="d-none d-md-block col-6 contact-col">
                        <MessagingSVG />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
  }
}

export default Contact;