import React, { Component } from 'react';
import '../css/styles.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCartPlus } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../components/footer';

const url="http://localhost:3000/paintingsData/";

const url1="http://localhost:3000/cartData/";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Paint extends Component {
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
    author: '',
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

seleccionarPintura=(paintData)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: paintData.id,
      image: paintData.image,
      title: paintData.title,
      author: paintData.author,
      dimensions: paintData.dimensions,
      category: paintData.category,
      price: paintData.price,
     
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
    <h1 class="left">
    &nbsp;  Pinturas en venta
    </h1>
      <form onSubmit={this.handleSubmit}>
      &nbsp;&nbsp;&nbsp;&nbsp; <select class="btn btn-light" id="price-filter" value={value} onChange={this.handleChange1}>
          &nbsp;<option  value="Sort">Ordenar por destacados</option>
            <option value="Low price">Precio: de más bajo a más alto</option>
            <option value="High price">Precio: de más alto a más bajo</option>
          </select>
          <input type="submit" value="OK" class="btn btn-dark" /> &nbsp;
        </form>
    <section>
        {this.state.data.map(paintData=>{
          return(
            
          <div className="boxPaint" >
            <div>
            <img src = {paintData.image} width="270" className="imageProduct"/>
                <p>{paintData.title}</p>
                <p>{paintData.author}</p>
                <p>{paintData.category}</p>
                <p>{paintData.price}€</p>
                <div>
                 
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarPintura(paintData); this.modalComprar()}}><FaCartPlus/></button>
                 
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
                    <br /> <br/> <br /> <br/> <br /> <br/> <br/> <br/> <br/>  <br /> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <label htmlFor="image">Imagen</label>
                    <input className="form-control" type="text" name="image" id="image" onChange={this.handleChange} value={form?form.image: ''}/>
                    <br />
                    <label htmlFor="title">Título</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    <br />
                    <label htmlFor="author">Autor</label>
                    <input className="form-control" type="text" name="author" id="author" onChange={this.handleChange} value={form?form.author:''}/>
                    <br />
                    <label htmlFor="category">Categoría</label>
                    <input className="form-control" type="text" name="category" id="category" onChange={this.handleChange} value={form?form.category:''}/>
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

          <Modal isOpen={this.state.modalComprar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalComprar()}>x</span>
                </ModalHeader>

                <ModalBody>
                  <br/>
                  <div className="form-group">
                    <br /> <br/> <br /> <br/> <br /> <br/> <br/> <br/> <br/>  <br /> <br/> <br/> <br/>
                    <center><strong>Desea comprar la pintura {form?form.title: ''}?</strong></center>
                    
                    <label htmlFor="title">Título</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    <br />
                    <label htmlFor="author">Autor</label>
                    <input className="form-control" type="text" name="author" id="author" onChange={this.handleChange} value={form?form.author:''}/>
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
export default Paint;