import React from 'react';
import NewsCard from '../components/newsbox/newscard';
import { Container, Col, Row } from 'react-bootstrap';

class Health extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        this.getLatestHeadlines()
    }

    getLatestHeadlines = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=9f73337e3d024ae188fc8b6dd59da2f2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        headlines: result.articles,
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        error: error,
                        isLoaded: true
                    }
                    )
                }
            )
    }

    getHeadline = (article, index) => {
        return (
            <Col key={index} className="mb-3">
                <NewsCard article={article}></NewsCard>
            </Col>
        )
    }

    render() {
        const { error, isLoaded, headlines } = this.state

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div
                    style={{
                        display: 'inline',
                        justifyContent: 'Right',
                        alignItems: 'Right',
                        height: '100vh'
                    }}
                >
                    <Container className="mt-3">
                        <Row>
                            {this.state.headlines.map(this.getHeadline)}
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default Health;