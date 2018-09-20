import React, { Component } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Image from '../../images/food-dinner.jpg';

class PageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                height="140"
                image={Image}
                title="Food"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Foodie Store
                </Typography>
                <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
    }
}
 
export default PageCard;
