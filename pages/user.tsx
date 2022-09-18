import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Button, Loading, Grid, Card } from '@nextui-org/react'

import { useAddress, useContract } from '@thirdweb-dev/react';
import { useState } from "react";

const User = () => {

    const address = useAddress();
    // change contract address to actual contract address
    //const { contract, isLoading, error } = useContract("{{contract_address}}");

    const [score, setScore] = useState('0')
    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Row justify="center">
                            <Text h1>User Area</Text>
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row justify="center">
                            <Text h3>Public Information </Text>
                        </Row>
                        <Row justify="center">
                            Public Address: {address}
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Row justify="center">
                            <Text h3>Attendance Score </Text>
                        </Row>
                        <Row justify="center">
                            Score: {score}
                        </Row>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}

export default User;