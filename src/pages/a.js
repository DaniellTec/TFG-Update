componentDidMount(){
    fetch('http://localhost:3000/paintingsData')
    .then(response => response.json())
    .then(paint => console.log(paint));
  }