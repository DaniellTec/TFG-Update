import React, { Component } from 'react';
import '../css/styles.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../components/footer';


const url="http://localhost:3000/cartData/";


function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class testProduct extends Component {
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
    price: ''
    
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

seleccionarPintura=(cartData)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: cartData.id,
      image: cartData.image,
      title: cartData.title,
      category: cartData.category,
      price: cartData.price,
     
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
      case "Low price":
        this.setState({
          paint: data.sort((a, b) => (a.price > b.price ? 1 : -1))
        });
        break;
      case "High price":
        this.setState({
          paint: data.sort((a, b) => (b.price > a.price ? 1 : -1))
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
    
    <section>
        {this.state.data.map(cartData=>{
          return(

          <div className="boxCart" >
            <div>
            <img src = {cartData.image} width="275" className="imageProduct"/>
                <p>{cartData.title}</p>
            
                <p>{cartData.price}€</p>
                <div>
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarPintura(cartData); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                  {"   "}
                  <button className="btn btn-danger" onClick={()=>{this.seleccionarPintura(cartData); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
              
              </div>
              <br/>
            </div>
          </div>
          )
        })}
        <hr/>
        </section>
             <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>

                <ModalBody>
                  <br/>
                  <div className="form-group">
                    <br /> <br/> <br /> <br/> <br /> <br/> <br/> <br/> <br/>  <br /> <br/> <br/> <br/> 
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <label htmlFor="image">Imagen</label>
                    <input className="form-control" type="text" name="image" id="image" onChange={this.handleChange} value={form?form.image: ''}/>
                    <br />
                    <label htmlFor="title">Título</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    <br />
                   
                    <label htmlFor="price">Precio</label>
                    <input className="form-control" type="text" name="price" id="price" onChange={this.handleChange} value={form?form.price:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>:
                   
                  <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                  
                  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
            <br /> <br/> <br/> <br/>
               Estás seguro que deseas eliminar la pintura {form && form.title}?
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
export default testProduct;