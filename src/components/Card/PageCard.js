import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './_Card.css';

class ImgMediaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    console.log('down here');
    return (
      <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          className="media"
          height="140"
          image={this.props.coverPhoto}
          title={this.props.pageName}
        />
        <CardContent style={{ display: 'flex' }}>
          <Avatar
            alt="Adelle Charles"
            src={this.props.profileImage}
            className="avatar"
            style={{ height: '80px', width: '80px' }}
          />
          <Typography gutterBottom variant="headline" component="h2" style={{ marginLeft: '15px' }}>
            {this.props.pageName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Select
        </Button>
      </CardActions>
    </Card>
    );
  };
}
 
ImgMediaCard.propTypes = {
  pageName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
}

export default ImgMediaCard;



