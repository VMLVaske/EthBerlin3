import {
    Button,
    Grid,
    Spacer,
    Text,
    Container,
    Row,
} from "@nextui-org/react";

import { useState } from "react";
import { useRouter } from "next/router";
import {
    useAddress,
    useDisconnect,
    useMetamask,
    useNetworkMismatch,
    useNetwork,
} from "@thirdweb-dev/react";

import useAuthenticate from "../../hooks/useAuthenticate";
import truncateEthAddress from "truncate-eth-address";

export default function Navbar() {
    const router = useRouter();

    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();
    const { login, authenticate, logout } = useAuthenticate();
    const isMitsmatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authMessage, setAuthMessage] = useState("N/A");

    return (
        <Grid.Container gap={2} justify="center" alignItems="center">
            <Spacer />
            <Grid>
                <Button onPress={() => router.push("/")}>Main</Button>
            </Grid>
            <Grid>
                <Button onPress={() => router.push("/lens")}>Lens</Button>
            </Grid>
            <Grid>
                <Button onPress={() => router.push("/qr")}>QR Stuff</Button>
            </Grid>
            <Grid>
                {address ? (
                    <Container>
                        <Row>
                            <Button flat auto onPress={disconnect}>
                                Disconnect Wallet
                            </Button>
                        </Row>
                        <Row>
                            <Text>Address: {truncateEthAddress(address)}</Text>
                        </Row>
                    </Container>
                ) : (
                    <Button flat auto onPress={connectWithMetamask}>
                        Connect Wallet
                    </Button>
                )}
            </Grid>

        </Grid.Container>
    );
}