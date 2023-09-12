import logo2 from './logo2.png';
import './css/ChangePass.css';

function ChangePass() {
    return (
      <div className='App'>
        <section className='contenedor'>
          <div className='logo'>
            <img className='logo-img' alt='Logo ToDo App' src={logo2}></img>
            <h3 className='titulo'>ToDo App</h3>
            <h1 className='resetTitulo'>Reset Password</h1>
          </div>
          <section className='formulario'>
            <form>
              <section className='inputs'>
                <label htmlFor='oldPass'>Password</label>
                <input id="oldPass" type='password' placeholder='type your password' required></input>
                <label htmlFor='newPass'>New Password</label>
                <input id="newPass" type='password' placeholder='type your password' required></input>
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input id="confirmPass" type='password' placeholder='type your password' required></input>
              </section>
              <section className='botones'>
                <button className='loginBtn'>Reset</button>
              </section>
            </form>
          </section>
        </section>
      </div>
    );
  }

  
export default ChangePass;