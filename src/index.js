import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




class FormApp extends React.Component {
    state = {
      list: [],
      carnet: '',
      horario: '',
      llego_tarde: ''
    };
  
    // captura los valor 
    // para setearlo en su respectivo estado
    handleInputChange = event => {
      const { target } = event;
      const { name, value } = target;
  
      this.setState({
        [name]: value
      });
    };
    

    onclick = event =>{
      
      this.state.list.slice();
     
    };
 
 
  
    // Esta función se ejecutará al momento de darle click al botón de "Agregar"
    handleSubmit = event => {
      const { carnet, horario, llego_tarde, list } = this.state;
    
   

    

    if (carnet && horario && llego_tarde) {
      const id = list.length + 1;
      // validación para que sean campos requeridos
        // En los states se agrega un nuevo objeto a "list"
        // y se reinicia el estado 
        this.setState({
          list: [...list, { id, carnet, horario, llego_tarde }],
          carnet: '',
          horario: '',
          llego_tarde: ''
        });
      }else {
        // Si alguno de los inputs se encuentra vacio
        // se mostrará la siguiente alert
        alert('Please complete all fields')
      }
  
      // Para que no se recargue la pagina
      event.preventDefault();
    };


       
  
    render(){
      const { carnet, horario, llego_tarde, list } = this.state;
      //formulario
      return (
        <>
          <div className="inputs_forms">
            <form onSubmit={this.handleSubmit} className="forms">
              <div className="form-group">
                <label htmlFor="Carnet">
                  Carnet:
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N° carnet"
                    id="carnet"
                    name="carnet"
                    value={carnet}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="horario">
                  Seleccione Horario:
                  <select id="horario" name="horario" 
                  value={horario} className="form-control"
                  onChange={this.handleInputChange}>
                  <option></option>
                  <option>Lunes de 9:00 a 11.00</option>
                  <option>Martes de 13:30 a 15:30</option>
                  <option>Miércoles de 9:00 a 11.00</option>
                  <option>Jueves de 13:30 a 15:30</option>
                  <option>Viernes de 9:00 a 11.00</option>
                  <option >Viernes de 15:30 a 17:30</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="llego_tarde">
                  Llego tarde?:
                  <select id="llego_tarde" name="llego_tarde" 
                  value={llego_tarde} className="form-control"
                  onChange={this.handleInputChange}>
                  <option></option>
                  <option>Si llego tarde</option>
                  <option>No llego tarde</option>
                  </select>
                </label>
              </div>
              <div className="btn">
                <button type="submit" className="btn btn-primary">
                  Agregar
                </button>
              </div>
            </form>
          </div>
          
          <div className="registro">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Carnet</th>
                  <th scope="col">Horario</th>
                  <th scope="col">Llego tarde?</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
          
              <tbody>
                {list.map(item => (
                  <tr key={item.id}>
                    <td>{item.carnet}</td>
                    <td>{item.horario}</td>
                    <td>{item.llego_tarde}</td>
                    <td> <div className="btn">
                    <button  type="submit" 
                    className="btn btn-primary" id="delete"  onClick={this.onclick}>
                    eliminar
                    </button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }
  }

ReactDOM.render(<FormApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
