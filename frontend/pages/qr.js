import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Button } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";

import QRCode from "react-qr-code";

export default function Collection() {

    const address = useAddress();

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid md gap={3}>
                        <Row justify="center">
                            <Text h1>QR Testing Area</Text>
                            <Spacer />
                        </Row>
                        <Row justify="center">
                            <Text>
                                Here is some QR Stuff happening:
                            </Text>
                        </Row>
                        <Row justify="center">
                            {address ?

                                <QRCode value={address} />
                            :<Text b>No Data</Text>}
                        </Row>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}