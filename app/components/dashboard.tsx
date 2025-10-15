import { Button, Container, Stack } from "@mantine/core";
import styles from "./dashboard.module.css";

export default function Dashboard() {

    return (
        <Container className={styles.dashboard}>
            <Stack
                align="stretch"
                justify="center"
                gap="md"
            >
                <Button variant="default">1</Button>
                <Button variant="default">2</Button>
                <Button variant="default">3</Button>
            </Stack>
        </Container>
    );
}