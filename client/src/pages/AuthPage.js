import "materialize-css";

export const AuthPage = () => {
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
            <button className="btn blue-grey darken-2 sign-in">Sign in</button>
            <button className="btn blue-grey lighten-5 black-text">Registration</button>
          </div>
        </div>
      </div>
    </div>
  )
}