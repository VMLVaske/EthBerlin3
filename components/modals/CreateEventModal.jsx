import { Button, Text, Modal, Input } from '@nextui-org/react'
import { useState } from "react";
import { useMarketplace } from '@thirdweb-dev/react'

export default function RegisterModal(props) {

    // Modal
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    //Input contract address here
    const contract = "address";

    const [eventId, setEventId] = useState(props.EventId)

    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const [time, setTime] = useState();
    const [participantsNumber, setParticipantsNumber] = useState();
    const [scoreThreshold, setScoreThreshold] = useState();

    const createEvent = async () => {
        try {
            console.log("inside createEvent method of CreateEventModal component - code needs to be added here")
            closeHandler();
        } catch (e) {
            console.log("failed to create event", e)
        }
    };

    return (
        <div>
            <Button auto color="warning" onPress={handler}>
                Create Event
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={18}>
                        Create a new Event
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="What is your event called?"
                        aria-label='event-name'
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="Where will your event take place?"
                        aria-label='event-place'
                        type="text"
                        onChange={e => setPlace(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="When will your event take place?"
                        aria-label='event-place'
                        type="number"
                        onChange={e => setTime(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="How many guests can you accomodate?"
                        aria-label='event-guest-number'
                        type="number"
                        onChange={e => setParticipantsNumber(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="Do you guests need to have a certain score to attend?"
                        aria-label='event-guest-score'
                        type="number"
                        onChange={e => setScoreThreshold(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Cancel
                    </Button>
                    <Button auto color="success" onPress={createEvent}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}