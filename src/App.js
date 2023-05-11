import './App.css'

const App = () => (
  <div className="main-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="logo-image"
    />
    <div className="mini-container-one">
      <div className="input-container" style={{position: 'relative'}}>
        <h1
          className="heading"
          style={{color: 'white', fontSize: '20px', textAlign: 'left'}}
        >
          Add New Password
        </h1>
        <label className="label-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="label-image"
          />
          <input
            type="website"
            placeholder="Enter Website"
            style={{textTransform: 'uppercase'}}
          />
        </label>

        <label className="label-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="website"
            className="label-image"
          />
          <input
            type="website"
            placeholder="Enter Username"
            style={{textTransform: 'uppercase'}}
          />
        </label>

        <label className="label-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="website"
            className="label-image"
          />
          <input
            type="website"
            placeholder="Enter Password"
            style={{textTransform: 'uppercase'}}
          />
        </label>
        <button
          type="button"
          style={{position: 'absolute', right: 50, bottom: 20}}
          className="joinBtn"
        >
          Add
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="input-image"
      />
    </div>
  </div>
)

export default App
