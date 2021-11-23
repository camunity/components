import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()

  return (
    <div>
      <form
        onSubmit={() => {
          navigate('/dashboard')
        }}
      >
        <p> Enter your username! </p>
        <input type="text"></input>
        <p> Enter your password! </p>
        <input type="password"></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login
