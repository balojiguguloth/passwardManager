import {useState} from 'react'
import {v4} from 'uuid'
import './App.css'

const PasswordItem = props => {
  const {password, website, username, onDelete, id} = props

  const handleDeleteClick = () => {
    onDelete(id)
  }

  return (
    <div className="ul-container">
      <div className="letter-details-container">
        <p className="first-letter">{username.charAt(0).toUpperCase()}</p>

        <div>
          <p>{website}</p>
          <p> {username}</p>
          <p>{password}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleDeleteClick}
          data-testid="delete"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const [websiteInput, setWebsiteInput] = useState('')
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwords, setPasswords] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [websiteError, setWebsiteError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const imageUrl = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState)
  }

  const handleDelete = id => {
    const newPasswords = [...passwords]
    newPasswords.splice(id, 1)
    setPasswords(newPasswords)
  }

  const onAddPasswords = event => {
    event.preventDefault()

    if (usernameInput && websiteInput && passwordInput) {
      const newPassword = {
        id: v4(),
        username: usernameInput,
        website: websiteInput,
        password: passwordInput,
      }
      setPasswords([...passwords, newPassword])
      setUsernameInput('')
      setWebsiteInput('')
      setPasswordInput('')
    } else {
      setUsernameError(!usernameInput)
      setWebsiteError(!websiteInput)
      setPasswordError(!passwordInput)
    }
  }

  const filteredOutputs = passwords.filter(output => {
    const websiteMatch = output.website
      .toLowerCase()
      .includes(searchInput.toLowerCase())
    const usernameMatch = output.username
      .toLowerCase()
      .includes(searchInput.toLowerCase())
    return websiteMatch || usernameMatch
  })

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="logo-image"
      />
      <div className="mini-container-one">
        <div className="input-container" style={{position: 'relative'}}>
          <form className="form" onSubmit={onAddPasswords}>
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
                id="website"
                value={websiteInput}
                onChange={e => {
                  setWebsiteInput(e.target.value)
                  setWebsiteError(false)
                }}
              />
            </label>
            {websiteError && (
              <p className="error-message">Please enter a website</p>
            )}

            <label className="label-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="label-image"
              />
              <input
                type="text"
                placeholder="Enter Username"
                id="username"
                value={usernameInput}
                onChange={e => {
                  setUsernameInput(e.target.value)
                  setUsernameError(false)
                }}
              />
            </label>
            {usernameError && (
              <p className="error-message">Please enter a username</p>
            )}
            <label className="label-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="label-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={passwordInput}
                onChange={e => {
                  setPasswordInput(e.target.value)
                  setPasswordError(false)
                }}
              />
            </label>
            {passwordError && (
              <p className="error-message">Please enter a password</p>
            )}
            <button
              type="submit"
              style={{position: 'absolute', right: 50, bottom: 20}}
              className="joinBtn"
            >
              Add
            </button>
          </form>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="input-image"
        />
      </div>
      <div className="mini-container-two">
        <div className="search-count-container">
          <div className="counter-container">
            <h1>Your Passwords </h1>
            <p className="span-length"> {passwords.length}</p>
          </div>

          <label className="label-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="label-image"
            />
            <input
              type="search"
              placeholder="search"
              onChange={e => setSearchInput(e.target.value)}
            />
          </label>
        </div>
        <hr size="2" width="100%" color="red" align="center" />
        <div className="checkbox-main-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              id="show-password-checkbox"
              className="checkbox"
            />
            <label htmlFor="show-password-checkbox">
              {isChecked ? 'Hide Password' : 'Show passwords'}
            </label>
          </div>
        </div>
        {filteredOutputs.length === 0 ? (
          <div className="no-passwords-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="input-image"
            />
            <p>No passwords</p>
          </div>
        ) : (
          <ul className="output-container">
            {filteredOutputs.map((eachPassword, id) => (
              <li className="list-type" key={eachPassword.id}>
                <PasswordItem
                  key={eachPassword.id}
                  id={id}
                  password={isChecked ? eachPassword.password : imageUrl}
                  website={eachPassword.website}
                  username={eachPassword.username}
                  isCheckedOf={eachPassword.isChecked}
                  onDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default App
