import { useState } from "react"


const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="flex flex-col items-center">
      <form className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <label htmlFor="userName">User Name</label>
          <input 
            id="userName" 
            className="border border-black-300"
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            className="border border-black-300"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sign In" className="border border-black-300"/>
      </form>
      <button className="border border-black-300">Sign Up</button>
    </section>
  )
}

export default Login;