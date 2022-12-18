import React from 'react';
import NewsCard from '../components/newsbox/newscard';
import { Container, Col, Row } from 'react-bootstrap';

class Main extends React.Component {
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
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9f73337e3d024ae188fc8b6dd59da2f2")
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
        if(index % 3 === 0 && index < 6) {
            return (
                <><Row key={"row_"+index}>
                    <Col key={"col_"+index} className="mb-3">
                        <NewsCard key={"nc_"+index} article={this.state.headlines[index]}></NewsCard>
                    </Col>
                    <Col key={"col_"+(index + 1)} className="mb-3">
                        <NewsCard key={"nc_"+(index+1)} article={this.state.headlines[index + 1]}></NewsCard>
                    </Col>
                    <Col key={"col_"+(index + 2)} className="mb-3">
                        <NewsCard key={"nc_"+(index+2)} article={this.state.headlines[index + 2]}></NewsCard>
                    </Col>
                </Row></>
            )
        } else {
            return (
                <></>
            )
        }

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
                        {headlines.map(this.getHeadline)}
                    </Container>
                </div>
            )
        }
    }
}

export default Main
