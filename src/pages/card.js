import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GridLayout extends React.Component
{
  constructor(props) 
  {
    super(props);
    
    this.state = {
      layout: "fourColumn",
      item1: "Card--regular",
      item2: "Card--regular",
      item3: "Card--regular",
      item4: "Card--regular",
    };
    
    this.element = null;
    
    this.setLayout = this.setLayout.bind(this);
  }
  
  componentDidMount() 
  {
    var _this = this;
    
    this.element = document.querySelector(".GridLayout");
    
    this.setLayout(_this);
    
    window.onresize = function(event) 
    {
      _this.setLayout(_this);
    };
  }
  
  setLayout(_this)
  {
    const styles = window.getComputedStyle(_this.element);
    const layout = styles.getPropertyValue('--GridLayout').trim();
      
    if (layout !== _this.state.layout)
    {
      const item1 = styles.getPropertyValue('--GridLayout-item1').trim();
      const item2 = styles.getPropertyValue('--GridLayout-item2').trim();
      const item3 = styles.getPropertyValue('--GridLayout-item3').trim();
      const item4 = styles.getPropertyValue('--GridLayout-item4').trim();
        
      _this.setState({
        layout: layout,
        item1: item1,
        item2: item2,
        item3: item3,
        item4: item4
      });
    }
  }
  
  render()
  {
    console.log("render() layout " + this.state.layout + " " + this.state.item1 + " " + this.state.item2 + " " + this.state.item3 + " " + this.state.item4);
    
    return (
      <div className="GridLayout">
        <Card classes={this.state.item1} />
        <Card classes={this.state.item2} />
        <Card classes={this.state.item3} />
        <Card classes={this.state.item4} />
      </div>
    );
  }
}

class Card extends React.Component
{
  render()
  {
    return(
      <div className={`Card ${ this.props.classes }`}>
        <div>
          <img src="https://source.unsplash.com/random/300x150" />
        </div>
        <div>
          <p>This is the story title</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<GridLayout />, document.getElementById("root"));