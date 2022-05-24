import React, { Component } from 'react';
import axios from "axios";

import '../css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/footer';

const url="http://localhost:3000/photosData";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Photoo extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    data:[],
    value: "Sort"
    };
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

  handleChange = (e) => {
    this.setState({ value: e.target.value })  
  }

  handleSubmit = (e) => {
    const { value, data } = this.state;
  
    switch (value) {
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
      case "A-Z":
        this.setState({
          photo: data.sort(
            (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
          )
        });
        break;
      case "Z-A":
        this.setState({
          photo: data.sort(
            (a, b) => (strip(b.title) > strip(a.title) ? 1 : -1)
          )
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
    const { data,value } = this.state;
  return (
    <>
    <div>
    <br/>
    <p><a href="/home">Inicio</a> / <a href="/photoo">Fotografías</a></p><p/>
    <h1 class="left">
Fotografías en venta
</h1>
      <br/>
      <form onSubmit={this.handleSubmit}>
          <select class="btn btn-light" id="price-filter" value={value} onChange={this.handleChange}>
            <option value="Sort">Ordenar por destacados</option>
            <option value="Low price">Precio: de más bajo a más alto</option>
            <option value="High price">Precio: de más alto a más bajo</option>
            <option value="A-Z">Nombre: ascendente</option>
            <option value="Z-A">Nombre: descendente</option>
          </select>
          <input type="submit" value="OK" class="btn btn-dark" />
        </form>
        <section>
        {this.state.data.map(photoData=>{
          return(
          <div className="boxPhoto" >
            <div>
                <img src = {photoData.image} width="275" className="imageProduct"/>
                <p>{photoData.title}</p>
                <p>{photoData.author}</p>
                <p>{photoData.price}€</p>
            </div>
          </div>
          )
        })}
        </section>
    </div>
    <br/>
    <Footer/>
    </>
  );
}
}
export default Photoo;
