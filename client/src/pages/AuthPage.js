import "materialize-css";
import {useState} from 'react'
import {useHttp} from '../hooks/http.hook'

export const AuthPage = () => {
  const {loading, error, request} = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async() => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('data', data)
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
              disabled={loading}
            >
              Sign in
            </button>
            <button
              className="btn blue-grey lighten-5 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}