import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { Container, Row, Col, Grid, Spacer, Loading, Button, Divider, Text, Card } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';

const Event = () => {

    const address = useAddress();
    const router = useRouter()
    const { eventId } = router.query;

    //const { contract } = useContract(contractAddress);
    //const { data: nft, isLoading } = useNFT(contract?.nft, nftId);

    const isLoading = false;

    const eventName = "Event1"
    const eventDescription = "This is event 1 lorem ipsum 123"

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
                                    <Text h6></Text>
                                </Row>
                                <Card css={{ w: "100%", h: "400px" }}>
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                        <Col>
                                            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                                                {eventName}
                                            </Text>
                                            <Text h3 color="white">
                                                {eventDescription}
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src="https://nextui.org/images/card-example-5.jpeg"
                                            objectFit="cover"
                                            width="100%"
                                            height="100%"
                                            alt="Relaxing app background"
                                        />
                                    </Card.Body>
                                    <Card.Footer
                                        isBlurred
                                        css={{
                                            position: "absolute",
                                            bgBlur: "#0f111466",
                                            borderTop: "$borderWeights$light solid $gray800",
                                            bottom: 0,
                                            zIndex: 1,
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col span={3}>
                                                        <Card.Image
                                                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                                                            css={{ bg: "black", br: "50%" }}
                                                            height={40}
                                                            width={40}
                                                            alt="Breathing app icon"
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Text color="#d1d1d1" size={12}>
                                                            Event Id: {eventId}
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Row justify="flex-end">
                                                    <Button
                                                        flat
                                                        auto
                                                        rounded
                                                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                                    >
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Get App
                                                        </Text>
                                                    </Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
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