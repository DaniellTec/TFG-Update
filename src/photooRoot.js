import React from 'react';

import photo from '../json/photo.json'
//import './css.css';
import '../css/styles.css';

import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

class Photoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: photo,
      value: "Sort"
    };
    
  }
  
  handleChange = (e) => {
    this.setState({ value: e.target.value })  
  }

  handleSubmit = (e) => {
    const { value, photo } = this.state;
  
    switch (value) {
      case "Low price":
        this.setState({
          photo: photo.sort((a, b) => (a.price > b.price ? 1 : -1))
        });
        break;
      case "High price":
        this.setState({
          photo: photo.sort((a, b) => (b.price > a.price ? 1 : -1))
        });
        break;
      case "A-Z":
        this.setState({
          photo: photo.sort(
            (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
          )
        });
        break;
      case "Z-A":
        this.setState({
          photo: photo.sort(
            (a, b) => (strip(b.title) > strip(a.title) ? 1 : -1)
          )
        });
        break;
      default:
        this.setState({
          photo: photo
        })
        break;
      
    }
    
    e.preventDefault();
  }

  render() {
    
    const { photo,value } = this.state;
    return (
      <>
      <div>
        <br/>
        <p><a href="/home">Inicio</a> / <a href="/photo">Fotografías</a></p><p/>
        <h1 class="left">
    Fotografías en venta
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
          {photo.map(m => <Photootemplate photo={m} />)}
        </section>
      </div>
       <Footer/>
       </>
    );
  }
}

class Photootemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, author, category, price, image } = this.props.photo;
    return (
<>
<div className="boxPhoto">
       <div>
        <img src={image} width="275" className="imageProduct"/>
          <p>{title}</p>
          <p><a href="">{author}</a></p>
          <div className="price">
            <i className="fa fa-heart" />
            <span>{price}</span>€<br/>
          </div>
      </div>
      </div>
      </>
    );
  }
}
export default Photoo;