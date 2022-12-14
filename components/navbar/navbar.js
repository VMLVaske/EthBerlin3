import {
    Button,
    Grid,
    Spacer,
} from "@nextui-org/react";

import { useState } from "react";
import { useRouter } from "next/router";
import {
    useAddress,
    useDisconnect,
    useMetamask,
    useNetworkMismatch,
    useNetwork,
    ConnectWallet
} from "@thirdweb-dev/react";

import { ThemeChanger } from "../navbar/themeChanger";

import useAuthenticate from "../../hooks/useAuthenticate";

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
                <Button color="warning" shadow auto onPress={() => router.push("/")}>Main</Button>
            </Grid>
            <Grid>
                <Button color="warning" shadow auto onPress={() => router.push("/events")}>Events</Button>
            </Grid>
            <Grid>
                <Button color="warning" shadow auto onPress={() => router.push("/leaderboard")}>Leaderboard</Button>
            </Grid>
            <Grid>
                <Button color="warning" shadow auto onPress={() => router.push("/user")}>Profile</Button>
            </Grid>
            <ThemeChanger />
            <Grid>
                <ConnectWallet
                    colorMode="light"
                    accentColor="#F213A4" />
            </Grid>

        </Grid.Container>
    );
}