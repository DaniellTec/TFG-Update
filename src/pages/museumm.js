import React from 'react';

import museum from '../json/museum.json'
//import './css.css';
import '../css/styles.css';

import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Museumm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      museum: museum,
      value: "Sort"
    };
    
  }
  
  handleChange = (e) => {
    this.setState({ value: e.target.value })  
  }

  handleSubmit = (e) => {
    const { value, museum } = this.state;
  
    switch (value) {
      case "Low price":
        this.setState({
          museum: museum.sort((a, b) => (a.price > b.price ? 1 : -1))
        });
        break;
      case "High price":
        this.setState({
          museum: museum.sort((a, b) => (b.price > a.price ? 1 : -1))
        });
        break;
      case "A-Z":
        this.setState({
          museum: museum.sort(
            (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
          )
        });
        break;
      case "Z-A":
        this.setState({
          museum: museum.sort(
            (a, b) => (strip(b.title) > strip(a.title) ? 1 : -1)
          )
        });
        break;
      default:
        this.setState({
          museum: museum
        })
        break;
      
    }
    
    e.preventDefault();
  }

  render() {
    
    const { museum,value } = this.state;
    return (
      <>
      <div>
        <br/>
        <p><a href="/home">Inicio</a> / <a href="/museum">Museos</a></p><p/>
        <h1 class="left">
    Entradas museos Madrid
  </h1>
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
          {museum.map(m => <Museummtemplate museum={m} />)}
        </section>
      </div>
       <Footer/>
       </>
    );
  }
}

class Museummtemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, description, location, image } = this.props.museum;
    return (
<>
<div className="boxMuseum">
       <div>
        <img src={image} width="275" className="imageProduct"/>
          <p>{title}</p>
          <div className="price">
            <span>{location}</span><br/>
          </div>
      </div>
      </div>
      </>
    );
  }
}
export default Museumm;