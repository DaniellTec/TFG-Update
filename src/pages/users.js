import React, { Component } from 'react';
import '../css/styles.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../components/footer';
import Icon from '../images/icons/userIcon.png';

const url="http://localhost:3000/userData/";


class Users extends Component {
  constructor(props) {
    super(props)
    this.state={
    data:[],
    value: "Sort"
    };
  }
  state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    user: '',
    }
  }
  
  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    }

  componentDidMount(){
    this.peticionGet();
  }

  peticionPost=async()=>{
    delete this.state.form.id;
    await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
   }).catch(error=>{
    console.log(error.message);
   })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

  peticionPut=()=>{
    axios.put(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    })
  }

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

seleccionarUsuario=(userData)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: userData.id,
      user: userData.user,
      pwd: userData.pwd
    }
  })
}

handleChange=async e=>{
  e.persist();
  await this.setState({
    form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }
  });
  console.log(this.state.form);
  }

///////////////////////////////////////

  handleChange1 = (e) => {
    this.setState({ value: e.target.value })  
  }

  
  render(){
    const { value, form }=this.state;
  return (
    <>
    <div>
      <br/>
    <h1 class="center">
    &nbsp;  Usuarios
    </h1>
      
    <section>
        {this.state.data.map(userData=>{
          return(
          <div className="boxUsers" >
            <div>
            <img src = {Icon} width="275" className="imageProduct"/>
                <p>{userData.user}</p>
                <div>
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarUsuario(userData); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                  {"   "}
                  <button className="btn btn-danger" onClick={()=>{this.seleccionarUsuario(userData); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
              </div>
              <br/>
            </div>
          </div>
          
          )
        })}
        </section>
             <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>

                <ModalBody>
                  <br/>
                  <div className="form-group">
                   <br/> <br/> <br/> <br/> <br/> <br/>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <label htmlFor="user">User</label>
                    <input className="form-control" type="text" name="user" id="user" onChange={this.handleChange} value={form?form.user: ''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
            <br /> <br/> <br/> <br/>
               Estás seguro que deseas eliminar el usuario {form && form.user}?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
    </div>
    <br/><br/><br/><br/>
    <Footer/>
    </>
  );
}
}
export default Users;