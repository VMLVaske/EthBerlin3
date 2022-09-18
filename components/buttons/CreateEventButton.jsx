import { Grid } from '@nextui-org/react'

import CreateEventModal from "../modals/CreateEventModal";

export default function CreateEventButton(props) {

    return (
        <Grid.Container gap={1} justify="center">
            <Grid.Container gap={1} justify="space-evenly">
                <Grid>
                    <CreateEventModal EventId={props.EventId} />
                </Grid>
            </Grid.Container>
        </Grid.Container>
    )
}