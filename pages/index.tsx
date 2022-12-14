import Head from 'next/head'
import Layout from '../components/layout'
import { Container, Row, Text, Spacer, Divider, Col, Grid, Button } from '@nextui-org/react';

import type { NextPage } from 'next';
import { useAddress } from '@thirdweb-dev/react';

const Home: NextPage = () => {

  const address = useAddress();

  return (
    <Layout>
      <div >
        <Head>
          <title>R.A.P.</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Container fluid md gap={3}>
            <Spacer />
            <Row justify="center">
              <Text h1>Main Page</Text>
              <Spacer />
            </Row>
            <Spacer />
            <Divider />
            <Spacer />
            <Row justify="center">
              <Text h>This is REP. </Text>
            </Row>
          </Container>
        </main>
      </div>
    </Layout>
  )
}


export default Home;