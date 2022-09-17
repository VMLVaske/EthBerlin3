import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Button } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";

export default function Collection() {

    const address = useAddress();

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid >
                        <Row justify="center">
                            <Text h1>Lens Testing Page</Text>
                            <Spacer />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row>
                            <Col>
                                <Row>
                                    <Text h3>This is a headline</Text>
                                </Row>
                                <Row>
                                    <Text>Here is some Text</Text>
                                    <Spacer />
                                    <Text>Here is the address: {address}</Text>
                                </Row>
                                <Row>
                                    <Button>Button!</Button>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Text h3>Another Headline</Text>
                                </Row>
                                <Row>
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