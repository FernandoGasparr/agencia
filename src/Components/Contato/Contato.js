import React, { useEffect, useRef, useState } from "react";
import api from "../Api";


export default() =>{

        const email= useRef()
        const mensagem= useRef();

        const [contato, setContato] =useState([])

        function enviarContato(event){
          event.preventDefault()
          console.log(email,mensagem )
          api.post('/contatos',{
            email:email.current.value,
            mensagem: mensagem.current.value,
          }).then(res => window.location.reload())
          .catch(err => console.log(err))
        }

        useEffect(() => {
            api.get('/contatos').then(res => setContato(res.data)).catch(err=> console.log(err))
        }, [])

        function deleteContato(id) {
          api.delete(`/contatos/${id}`, {});
          setContato(contato.filter(contat => contat.id !== id));
        }

    return (
      <div className="App container mt-5">
      <form onSubmit={enviarContato}>
          <div className="input-group mb-3">
           <span className="input-group-text"></span>
          <input type="email" className="form-control" placeholder="Email@email.com" aria-describedby="basic-addont1" ref={email}/>
          
          </div>
        <div className="input-group">
        <span className="input-group-text"> Digite a sua mensagem </span>
        <textarea ref={mensagem} className="form-control" aria-label="Deixe sua mensagem"></textarea>
        </div>
        <input type="submit" className="btn btn-primary mt-2" value="Enviar Mensagem"/>
        </form>
        
        <div className="mt-5">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">email</th>
      <th scope="col">mensagem</th>
    </tr>
  </thead>
  <tbody>
      {contato.map(contato => (
        <tr key={contato.id}>
        <th scope="row">{contato.id}</th>
        <td>{contato.email}</td>
        <td>{contato.mensagem}</td>
        <td>
        <button
	className='btn'
	onClick={() => deleteContato(contato.id)}
>
	Excluir 
</button>

        </td>
      </tr>
      ))}
  </tbody>
</table>
</div>
</div>      
    );
}