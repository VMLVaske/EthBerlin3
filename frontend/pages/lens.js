import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Button } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";

//Lens integration
import { apolloClient } from './apollo-client';
import { gql } from '@apollo/client'


export default function Collection() {

    const address = useAddress();

    const onClickHandler = () => {
        console.log("Hallo")
    }

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid >
                        <Spacer />
                        <Row justify="center">
                            <Text h1>Lens Testing Page</Text>
                            <Spacer />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row>
                            <Col>
                                <Row justify="center">
                                    <Text h3>This is a headline</Text>
                                </Row>
                                <Row justify="center">
                                    <Text>Here is some Text</Text>
                                    <Spacer />
                                    <Text>Here is the address: {address}</Text>
                                </Row>
                                <Row justify="center">
                                    <Button onClick={onClickHandler}>Button!</Button>

                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row justify="center">
                                    <Text h3>Another Headline</Text>
                                </Row>
                                <Row justify="center">
                                    <Text>More text lalala</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}