import logo2 from './logo2.png';
import './css/ForgotPass.css';

function ForgotPass() {
    return (
      <div className='App'>
        <section className='contenedor'>
          <div className='logo'>
            <img className='logo-img' alt='Logo ToDo App' src={logo2}></img>
            <h3 className='titulo'>ToDo App</h3>
            <h1 className='forgotTitulo'>Forgot Password</h1>
          </div>
          <section className='formulario'>
            <form>
              <section className='inputs'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='type your email' required></input>
              </section>
              <section className='botones'>
                <button className='loginBtn'>Send</button>
                <a className='forgot-password' href='#'>Login</a>
              </section>
            </form>
          </section>
        </section>
      </div>
    );
  }
  
  export default ForgotPass;