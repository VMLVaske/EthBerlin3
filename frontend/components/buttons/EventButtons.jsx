import { Grid } from '@nextui-org/react'

import RegisterModal from "../modals/RegisterModal";

export default function EventButtons(props) {

    return (
        <Grid.Container gap={1} justify="center">
            <Grid.Container gap={1} justify="space-evenly">
                <Grid>
                    <RegisterModal EventId={props.EventId} />
                </Grid>
            </Grid.Container>
        </Grid.Container>
    )
}