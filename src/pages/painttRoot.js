import React, { Component } from 'react';
import axios from "axios";

import '../css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/footer';

const url="http://localhost:3000/paintingsData/";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Paintt extends React.Component {
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

  ///////////////////////////

  handleChange = (e) => {
    this.setState({ value: e.target.value })  
  }

  handleSubmit = (e) => {
    const { value, data } = this.state;
  
    switch (value) {
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
      case "A-Z":
        this.setState({
          paint: data.sort(
            (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
          )
        });
        break;
      case "Z-A":
        this.setState({
          paint: data.sort(
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
    const { form,value } = this.state;
  return (
    <>
    <div>
    <br/>
    <p><a href="/home">Inicio</a> / <a href="/paintt">Pinturas</a></p><p/>
    <h1 class="left">
Pinturas en venta
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
        {this.state.data.map(paintData=>{
          return(
          <div className="boxPaint" >
            <div>
                <img src = {paintData.image} width="275" className="imageProduct"/>
                <p>{paintData.title}</p>
                <p>{paintData.author}</p>
                <p>{paintData.price}€</p>
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
export default Paintt;