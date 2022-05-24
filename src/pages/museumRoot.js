import React, { Component } from 'react';
import '../css/styles.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../components/footer';

const url="http://localhost:3000/museumData/";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class MuseumRoot extends Component {
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
    image: '',
    title: '',
    description: '',
    location: '',
    review: ''
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

seleccionarMuseo=(museumData)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: museumData.id,
      image: museumData.image,
      title: museumData.title,
      description: museumData.description,
      location: museumData.location,
      review: museumData.review
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

  handleSubmit = (e) => {
    const { value, data } = this.state;
  
    switch (value) {
      case "Sort":
        //window.location.reload();
        break;
      case "Low review":
        this.setState({
          museum: data.sort((a, b) => (a.review > b.review ? 1 : -1))
        });
        break;
      case "High review":
        this.setState({
          museum: data.sort((a, b) => (b.review > a.review ? 1 : -1))
        });
        break;
      default:
        this.setState({
          data
        })
        break;
    }
    
    e.preventDefault();
  }
  
  render(){
    const { value, form }=this.state;
  return (
    <>
    <div>
      <br/>
    <center><h1 class="left">
    &nbsp;  Entradas museos Madrid
    </h1></center>
     
    <section>
        {this.state.data.map(museumData=>{
          return(
          <div className="boxMuseum" >
            <div>
            <img src = {museumData.image} width="275" className="imageProduct"/>
                <p>{museumData.title}</p>
                <p>{museumData.location}</p>
                <div>
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarMuseo(museumData); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                  {"   "}
                  <button className="btn btn-danger" onClick={()=>{this.seleccionarMuseo(museumData); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
              </div>
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
                     <br/> <br /> <br/> <br/> <br/> <br/>  <br /> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <label htmlFor="image">Imagen</label>
                    <input className="form-control" type="text" name="image" id="image" onChange={this.handleChange} value={form?form.image: ''}/>
                    <br />
                    <label htmlFor="title">Título</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    <br />
                    <label htmlFor="description">Descripción</label>
                    <input className="form-control" type="text" name="description" id="category" onChange={this.handleChange} value={form?form.description:''}/>
                    <br />
                    <label htmlFor="location">Ubicación</label>
                    <input className="form-control" type="text" name="location" id="location" onChange={this.handleChange} value={form?form.location:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
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
               Estás seguro que deseas eliminar este museo  {form && form.title}?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
    </div>
    <br/>
    <Footer/>
    </>
  );
}
}
export default MuseumRoot;