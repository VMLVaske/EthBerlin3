import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Button, Loading, Grid, Card } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import QRCode from "react-qr-code";
import { QrReader } from 'react-qr-reader';

import CreateEventButton from '../components/buttons/CreateEventButton';

const Events = () => {

    const router = useRouter();

    const address = useAddress();
    // change contract address to actual contract address
    //const { contract, isLoading, error } = useContract("{{contract_address}}");

    // Mock functions
    const isLoading = false;
    const nfts = [{
        "metadata": {
            "id": "1",
            "name": "Event1",
            "description": "This is event 1"
        }
    }, {
        "metadata": {
            "id": "2",
            "name": "Event2",
            "description": "This is event 2"
        }
    }]

    //QR Code Data
    const [readQrData, setReadQrData] = useState('No result');

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid md gap={3}>
                        <Spacer />
                        <Row justify="center">
                            <Text h1>Event Area</Text>
                            <Spacer />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row justify="center">
                            <Text h3>Create Event</Text>
                        </Row>
                        <Row>
                            <CreateEventButton />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row justify="center">
                            <Text>
                                Here is some QR Stuff happening:
                            </Text>
                        </Row>
                        <Row justify="center">
                            {address ?

                                <QRCode value={address} />
                                : <Text b>No Data</Text>}
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row>
                            <QrReader
                                onResult={(result, error) => {
                                    if (!!result) {
                                        setReadQrData(result?.text);
                                    }

                                    if (!!error) {
                                        console.info(error);
                                    }
                                }}
                                style={{ width: '100%' }}
                            />
                        </Row>
                        <Row justify="center">
                            <Text>Read QR Data: {readQrData}</Text>
                        </Row>
                        {isLoading ? (
                            <Grid.Container gap={2} justify="center">
                                <Grid>
                                    <Loading type="points" />
                                </Grid>
                            </Grid.Container>
                        ) : (
                            <Grid.Container gap={2} justify="center">
                                {nfts.map((listing) => (
                                    <Grid xs={6} sm={3}>
                                        <Card isPressable isHoverable>
                                            <Card.Header>
                                                <Link href={`/event/${listing.metadata.id}`}>
                                                    <Text h3 b>{listing.metadata.name}</Text>
                                                </Link>
                                            </Card.Header>
                                            <Card.Body
                                                css={{ p: 0 }}
                                                key={listing.metadata.id}
                                                onClick={() => router.push(`/event/${listing.metadata.id}`)}
                                            >
                                                <Row justify="center">
                                                    <Spacer />
                                                    <Text>{listing.metadata.description}</Text>
                                                    <Spacer />
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Text>Footer Text</Text>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid.Container>
                        )}
                    </Container>
                </main>
            </div>
        </Layout>
    )
}

export default Events;