import "materialize-css";
import {useState, useEffect, useContext} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten link</h1>
        <div className="card blue-grey lighten-2">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>

              <div className="input-field">
                <input
                  onChange={changeHandler}
                  value={form.email}
                  className="auth-input"
                  placeholder="Enter email..."
                  id="email"
                  type="text"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  onChange={changeHandler}
                  value={form.password}
                  className="auth-input"
                  placeholder="Enter password..."
                  id="password"
                  type="password"
                  name="password"
                />
                <label htmlFor="password">Password</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn blue-grey darken-2 sign-in"
              onClick={loginHandler}
              disabled={loading}
            >
              Log in
            </button>
            <button
              className="btn blue-grey lighten-5 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}