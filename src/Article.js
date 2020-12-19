import React from "react";
import "./Article.css";
import { Container, Col, Row } from "react-bootstrap";

export default function Article(props) {
    return (
        <article className="padding_big">
            <Container>
                <Row>
                    <Col md={6}>
                        <h3 className="upper_case">{props.header}</h3>
                    </Col>
                    <Col md={6}>
                        <p>{props.children}</p>
                    </Col>
                </Row>
            </Container>
        </article>
    );
}