import logo2 from './logo2.png';
import './css/SignUp.css';

function SignUp() {
    return (
      <div className='App'>
        <section className='contenedor'>
          <div className='logo'>
            <img className='logo-img' alt='Logo ToDo App' src={logo2}></img>
            <h3 className='titulo'>ToDo App</h3>
            <h1>Sign Up</h1>
          </div>
          <section className='formulario'>
            <form>
              <section className='inputs'>
                <label htmlFor='user'>Username</label>
                <input type='text' id='user' placeholder='Enter your username' required></input>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter your email' required></input>
                <label id='pass'>Password</label>
                <input type='password' id='pass' placeholder='password' required></input>
              </section>
              <section className='botones'>
                <button className='loginBtn' id='loginBtn'>Sign Up</button>
                <p className='p-or'>or</p>
                <a className='forgot-password' href='#'>Login</a>
              </section>
            </form>
          </section>
        </section>
      </div>
    );
  }
  
  export default SignUp;
