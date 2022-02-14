import React from "react";


export default() =>{
    return (


      <div className="row">
            <div className="col-12">
              <h3 className="profile-role-tagline-card">FORMULÁRIO</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
        <form className="row g-3">
        
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Nome</label>
          <input type="text" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Sobrenome</label>
          <input type="text" className="form-control" id="inputEmail4"/>
        </div>

        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Senha</label>
          <input type="password" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">Endereço</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="..."/>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">Endereço 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="..."/>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">Cidade</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select">
            <option selected>...</option>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>

          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">País</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Check 
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
}