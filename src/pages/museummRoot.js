import React, { Component } from 'react';
import axios from "axios";

import '../css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/footer';

const url="http://localhost:3000/museumData";

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Museumm extends React.Component {
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
    <p><a href="/home">Inicio</a> / <a href="/museumm">Museos</a></p><p/>
    <h1 class="left">
Entradas museos Madrid
</h1>
      <br/>
      <form onSubmit={this.handleSubmit}>
          <select class="btn btn-light" id="price-filter" value={value} onChange={this.handleChange}>
            <option value="Sort">Ordenar por destacados</option>
            <option value="A-Z">Nombre: ascendente</option>
            <option value="Z-A">Nombre: descendente</option>
          </select>
          <input type="submit" value="OK" class="btn btn-dark" />
        </form>
        <section>
        {this.state.data.map(photoData=>{
          return(
          <div className="boxMuseum" >
            <div>
                <img src = {photoData.image} width="275" className="imageProduct"/>
                <p>{photoData.title}</p>
                <p>{photoData.location}</p>
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
export default Museumm;
