import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { Container, Row, Grid, Spacer, Loading, Text, Image } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';

import logo from '../../icons/cat-dj.gif';

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
                                    <Text h6>Dev was tired</Text>
                                </Row>
                                <Row>
                                    <img src={logo} alt="cat-dj.gif..." />
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