import React from 'react';
import { Card, Button } from 'react-bootstrap';

class NewsCard extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="85%" src={this.props.article.urlToImage} />
                <Card.Body>
                    <Card.Title>{this.props.article.title ? this.props.article.title.substr(0, 120) : ""}</Card.Title>
                    <Card.Text>{this.props.article.description ? this.props.article.description.substr(0, 480) : ""}</Card.Text>
                    <Button variant="primary" padding="5px">Leia tudo</Button>
                    <Button variant="secondary">Curtir 👍</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default NewsCard;