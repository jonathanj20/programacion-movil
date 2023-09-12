import logo2 from './logo2.png';
import './css/Login.css';

function Login() {
    return (
      <div className='App'>
        <section className='contenedor'>
          <div className='logo'>
            <img className='logo-img' alt='Logo ToDo App' src={logo2}></img>
            <h3 className='titulo'>ToDo App</h3>
            <h1>Login</h1>
          </div>
          <section className='formulario'>
            <form>
              <section className='inputs'>
                <label htmlFor='user'>Username</label>
                <input type='text' id='user' placeholder='Type your username' required></input>
                <label htmlFor='pass'>Password</label>
                <input type='password' id='pass' placeholder='password' required></input>
              </section>
              <section className='botones'>
                <button className='loginBtn'>Login</button>
                <a className='forgot-password' href='#'>Forgot Password?</a>
              </section>
            </form>
          </section>
        </section>
      </div>
    );
  }
  
 export default Login;