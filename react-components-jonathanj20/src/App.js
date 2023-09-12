import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenido'>
        <h2>Formulario</h2>
        <section className='formulario'>
          <form className='formulario__form'>
            <section className='formulario__datos'>
              <section className='nombre'>
                <label htmlFor='nombre' className='formulario__form--label'>Nombre:</label>
                <input type='text' id='nombre' placeholder='Ingresa tu nombre'></input>
              </section>
              <section className='apellido'>
                <label htmlFor='apellido' className='formulario__form--label'>Apellido:</label>
                <input type='text' id='apellido' placeholder='Ingresa tu apellido'></input>
              </section>
              <section className='correo'>
                <label htmlFor='correo' className='formulario__form--label'>Correo:</label>
                <input type='email' id='correo' placeholder='Ingresa tu correo'></input>
              </section>
            </section>
            <div className='formulario-logo'>
              <img className='formulario__logo--img' src='https://cdn-icons-png.flaticon.com/512/2343/2343563.png' alt='icono de formulario'></img>
            </div>
            <div className='botones'>
              <button>Enviar</button>
              <button>Cancelar</button>
            </div>
          </form>
        </section>
      </div>
      <div className='tabla'>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default App;
