import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, Checkbox } from 'antd'
import './Login.css'
import logo from '../../logo.svg'
import { userActions } from '../../actions';

const FormItem = Form.Item
const Login = ({
  users,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleSubmit(e) {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch(userActions.login(values));
    })
  }
  return (
    <div className="form">
      <div className="logo">
        <img alt={'logo'} src={logo} style={{ width: '60%' }} />
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            initialValue: users.username,
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!'
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleSubmit} placeholder="Email" />
          )}
        </FormItem>
        <FormItem hasFeedback style={{ marginBottom: '14px' }}>
          {getFieldDecorator('password', {
            initialValue: users.password,
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" onPressEnter={handleSubmit} placeholder="Password" />
          )}
        </FormItem>
        <p style={{ marginBottom: '10px' }}>
          <span>Username：guest &nbsp;</span>
          <span>Password：guest</span>
        </p>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: users.remember,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" onClick={handleSubmit} className="login-form-button" style={{ marginTop: '10px' }}>
            Log in
          </Button>
          Or <Link to="/register">Register</Link>
        </FormItem>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Form.create()(Login)))


