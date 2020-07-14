import React from 'react';

class App extends React.Component{
  constructor (props){
    super (props);
    this.state={ // <- este objeto es la fuente de informacion 
      inputValue:'',
      tasks: []
    }
  }
  
  handleChange (e) { // <- uno de los actores que actualiza la fuente de informacion
    this.setState({ // <- la funcion que vamos a utilizar para actualizar el estado 
    inputValue: e.target.value, // <- actualizamos la propiedad inputValue con el valor de e.target.value
    
    })
  }

  handleClick () {
    console.log (this.state.inputValue) //<- leemos la propiedad inputValue de nuestro estado

    //leer la propiedad inputValue de nuestro estado
    const newValue = this.state.inputValue

    //leer la propiedad tasks de nuestro estado
    const newTasks = this.state.tasks

    //Agregarle a ese array un nuevo item con el valor de inputValue
    newTasks.push(newValue)

    //actualizar el estado taks con el nuevo array
    this.setState ({
      tasks : newTasks,
      inputValue:'' // para q se borre el contenido del input cuando agregamos una tarea
    })
  }

  

  render() {

    return(
      <React.Fragment>

      <div>
        <input value={this.state.inputValue} onChange = { (e) => this.handleChange (e) } type="text" />
        <button onClick={ () => this.handleClick () }>agregar</button>
      </div>

      <ul>
    
      {this.state.tasks.map ( (task, key) => {
        return (
          <li key={key}> {task} </li>
        )

      })}

      </ul>
      </React.Fragment>

    )

  }

}


export default App;
