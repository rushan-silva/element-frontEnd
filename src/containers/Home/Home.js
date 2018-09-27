import React, { Component } from 'react';
import TopNav from '../../components/TopNavigation/TopNav';
import PageCard from '../../components/Card/PageCard';
import Paper from '@material-ui/core/Paper';
import AddCard from '../../components/Card/AddCard';
import './_Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pages: [
                {
                    pageName: 'Foodie Store',
                    profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/42058479_318463248956783_193607427667525632_n.jpg?_nc_cat=101&oh=5278f288dd0ab74a14a0aebe4016e47f&oe=5C613023',
                    coverPhoto: 'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/42134420_318956912240750_139234967061266432_o.jpg?_nc_cat=102&oh=09a0c6e55f5ee2f71549f108fe855887&oe=5C234497'
                }
            ],
        }
    }

    renderPageCards = () => {
        return this.state.pages.map((page, ind) => {
            return <PageCard pageName = { page.pageName } profileImage = { page.profileImage } coverPhoto = { page.coverPhoto } />
        })
    }

    render() { 
        return (
            <div>
                <TopNav />
                <Paper className="paper">
                    {this.renderPageCards()}
                    <AddCard />
                </Paper>
            </div>
        );
    }
}
 
export default Home;