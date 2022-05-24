import React, { Component } from 'react';
import '../css/styles.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FaCartPlus } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../components/footer';

const url="http://localhost:3000/photosData/";

const url1="http://localhost:3000/cartData/";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Photo extends Component {
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
  modalComprar: false,
  modalEliminar: false,
  form:{
    id: '',
    image: '',
    title: '',
    dimensions: '',
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

peticionPost1=async()=>{
  delete this.state.form.id;
  await axios.post(url1,this.state.form).then(response=>{
    this.modalComprar();
  this.peticionGet();
 }).catch(error=>{
  console.log(error.message);
 })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

modalComprar=()=>{
  this.setState({modalComprar: !this.state.modalComprar});
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

seleccionarFotografia=(photoData)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: photoData.id,
      image: photoData.image,
      title: photoData.title,
      dimensions: photoData.dimensions,
      category: photoData.category,
      price: photoData.price,
     
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
          photo: data.sort((a, b) => (a.price > b.price ? 1 : -1))
        });
        break;
      case "High price":
        this.setState({
          photo: data.sort((a, b) => (b.price > a.price ? 1 : -1))
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
    <h1 class="left">
    &nbsp;  Fotografías en venta
    </h1>
      <form onSubmit={this.handleSubmit}>
      &nbsp;&nbsp;&nbsp;&nbsp; <select class="btn btn-light" id="price-filter" value={value} onChange={this.handleChange1}>
          &nbsp;<option value="Sort">Ordenar por destacados</option>
            <option value="Low price">Precio: de más bajo a más alto</option>
            <option value="High price">Precio: de más alto a más bajo</option>
          </select>
          <input type="submit" value="OK" class="btn btn-dark" /> &nbsp;
        </form>
    <section>
        {this.state.data.map(photoData=>{
          return(
          <div className="boxPhoto" >
            <div>
            <img src = {photoData.image} width="270" className="imageProduct"/>
                <p>{photoData.title}</p>
                <p>{photoData.author}</p>
                <p>{photoData.category}</p>
                <p>{photoData.price}€</p>
                <div>
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarFotografia(photoData); this.modalComprar()}}><FaCartPlus/></button>
              </div>
            </div>
          </div>
          )
        })}
        </section>

          <Modal isOpen={this.state.modalComprar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalComprar()}>x</span>
                </ModalHeader>

                <ModalBody>
                  <br/>
                  <div className="form-group">
                    <br/> <br /> <br/> <br/> <br/> <br/>  <br /> <br/> <br/> 
                    <center><strong>Desea comprar la fotografía {form?form.title: ''}?</strong></center>
                    <label htmlFor="title">Título</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    <br />
                    <label htmlFor="category">Categoría</label>
                    <input className="form-control" type="text" name="category" id="category" onChange={this.handleChange} value={form?form.category:''}/>
                    <br />
                    <label htmlFor="price">Precio</label>
                    <input className="form-control" type="text" name="price" id="price" onChange={this.handleChange} value={form?form.price:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='comprar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>:
                   
                   <button className="btn btn-primary" onClick={()=>this.peticionPost1()}>
                   Comprar
                 </button>
                  
                  }
                  
                    <button className="btn btn-danger" onClick={()=>this.modalComprar()}>Cancelar</button>
                </ModalFooter>

                </Modal>

    </div>
    <br/>
    <Footer/>
    </>
  );
}
}
export default Photo;