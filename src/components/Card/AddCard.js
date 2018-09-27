import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import PlusSign from '../../images/icons8-plus-500.png';
import './_Card.css'

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick = () => {
    console.log("in here");
  }

  render() { 
    return (
      <Card className="addCard" >
        <CardActionArea onClick={this.handleClick}>
          <CardMedia
            component="img"
            height="320"
            image={PlusSign}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    );
  }
}
 
export default AddCard;