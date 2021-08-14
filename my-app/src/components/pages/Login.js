import React, { useState, useEffect } from 'react'
import UberEatsLogo from '../UberEatsLogo.js'
import Button from '../Button'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [valueInput, setValueInput] = useState()
  const [btnActive, setBtnActive] = useState(false)

  const handleInput = (e) => {
    setValueInput(e.target.value)
  }

  useEffect(() => {
    if (valueInput) {
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }
  }, [valueInput])

  return (
    <div className='app__login'>
      <div className='login__container'>
        <div className='login__center'>
          <div className='login-form'>
            <div className='login-logo-wrapper'>
              <UberEatsLogo />
            </div>
            <h2 className='login__header'>Chào mừng bạn quay lại</h2>
            <form className='login__form'>
              <div className='mb-3'>
                <label
                  htmlFor='exampleInputEmailorPhone'
                  className='form-label login-label'
                >
                  Đăng nhập bằng địa chỉ email hoặc số điện thoại di động của
                  bạn.
                </label>
                <input
                  type='text'
                  className='form-control login-input'
                  value={valueInput}
                  id='EmailorPhone'
                  aria-describedby='EmailorPhoneHelp'
                  onChange={handleInput}
                />
              </div>
              <div className='login-btn-wrapper'>
                <Button
                  text='Tiếp'
                  btnClass='login-btn'
                  disabled={!btnActive}
                />
              </div>
              <div className='login__register-link-wrapper'>
                <span className='login__newuser'>Bạn mới sử dụng Uber? </span>
                <Link to='/register' className='login__register-link'>
                  Tạo tài khoản
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className='login__footer container-custom'>
          <div className='login__footer-author'>
            <span className='login__footer-author-name'>
              © 2020 Uber Technologies, Inc.
            </span>
          </div>
          <div className='login__footer-policy'>
            <Link to='/policy' className='login__footer-policy-link'>
              Chính sách bảo mật
            </Link>
            <span className='login__footer-policy-span'>|</span>
            <Link to='/policy' className='login__footer-policy-link'>
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
