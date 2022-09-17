import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { Container, Row, Col, Grid, Spacer, Loading, Button, Divider, Text } from '@nextui-org/react'

import { useAddress, useContract, MediaRenderer, useNFT } from '@thirdweb-dev/react';

const Event = () => {

    const address = useAddress();
    const router = useRouter()
    const { contractAddress } = router.query;
    const { eventId } = router.query;

    //const { contract } = useContract(contractAddress);
    //const { data: nft, isLoading } = useNFT(contract?.nft, nftId);

    const isLoading = false;

    const nft = [{
        "id": "1",
        "name": "Event1",
        "description": "This is event 1"
    }]


    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Spacer />
                        {isLoading ? (
                            <Grid.Container gap={2} justify="center">
                                <Grid>
                                    <Loading type="points" />
                                </Grid>
                            </Grid.Container>
                        ) : (
                            <Container fluid >
                                <Row justify="center">
                                    <Spacer />
                                    <Col gap={2}>
                                        <Grid.Container justify="center">
                                            <Grid xs={8}>
                                                <Text h2>Description</Text>
                                            </Grid>

                                            <Spacer />
                                            <Grid xs={12}>
                                                <Text>{nft.description}</Text>
                                            </Grid>
                                            <Spacer />
                                            <Divider />
                                            <Spacer />
                                        </Grid.Container>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Text h1 b>{nft.name}</Text>
                                </Row>
                                <Row justify="center">
                                    <Text h6>Owner: {address}</Text>

                                </Row>
                                <Row justify="center">
                                    <Text h6>Event Id: {eventId}</Text>
                                </Row>
                            </Container>
                        )
                        }
                    </Container>
                </main>
            </div>
        </Layout >
    )
}

export default Event;