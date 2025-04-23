import "@mantine/core/styles.css";
import { MantineProvider, Container, Slider, RangeSlider } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container>
        <Slider my={96} color="green" />
        <RangeSlider color="red" />
      </Container>
    </MantineProvider>
  );
}
