import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Table, useAsyncList, useCollator } from '@nextui-org/react'


import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Leaderboard = () => {

    const router = useRouter();

    const address = useAddress();
    // change contract address to actual contract address
    //const { contract, isLoading, error } = useContract("{{contract_address}}");


    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "role",
            label: "ROLE",
        },
        {
            key: "status",
            label: "STATUS",
        },
    ];
    const rows = [
        {
            id: "0",
            address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
            score: "13"
        },
        {
            id: "0",
            address: "0x039fd6e51aad88f6f4ce6ab4827279cfffb92266",
            score: "99"
        },
        {
            id: "0",
            address: "0x449fd6e51aad88f6f4ce6ab8827279cfffb9226e",
            score: "69"
        },
        {
            id: "0",
            address: "0x239fd6e51aad88f6f4ce6ab8827279cfffb922d6",
            score: "42"
        },
    ];

    const collator = useCollator({ numeric: true });
    async function load({ signal }) {
        {
            /*
            *const res = await fetch("https://swapi.py4e.com/api/people/?search", {
            signal,
        });
        const json = await res.json();
        return {
            items: json.results,
        };
            */
        }
        return {
            items: rows
        }

    }

    async function sort({ items, sortDescriptor }) {
        return {
            items: items.sort((a, b) => {
                let first = a[sortDescriptor.column];
                let second = b[sortDescriptor.column];
                let cmp = collator.compare(first, second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }),
        };
    }
    const list = useAsyncList({ load, sort });

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid md gap={3}>
                        <Spacer />
                        <Row justify="center">
                            <Text h1>Leaderboard</Text>
                            <Spacer />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Table
                            aria-label="Example static collection table"
                            css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
                            sortDescriptor={list.sortDescriptor}
                            onSortChange={list.sort}
                        >
                            <Table.Header>
                                <Table.Column key="address" allowsSorting>
                                    Address
                                </Table.Column>
                                <Table.Column key="score" allowsSorting>
                                    Score
                                </Table.Column>
                            </Table.Header>
                            <Table.Body items={list.items} loadingState={list.loadingState}>
                                {(item) => (
                                    <Table.Row key={item.name}>
                                        {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}

export default Leaderboard;