import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NewsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="85%" src={this.props.article.urlToImage} />
                <Card.Body>
                    <Card.Title>{this.props.article.title ? this.props.article.title.substr(0, 120) : ""}</Card.Title>
                    <Card.Text>{this.props.article.description ? this.props.article.description.substr(0, 480) : ""}</Card.Text>
                    <Button variant="primary">Leia tudo</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default NewsCard;