import "@mantine/core/styles.css";
import {
  MantineProvider,
  Container,
  Slider,
  RangeSlider,
  Text,
  Kbd,
} from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container>
        <Text c="green" size="xl" mt={96}>
          Keyboard controls work:
        </Text>
        <Slider mb={96} color="green" />
        <Text c="red" size="xl">
          Keyboard controls do not work (RangeSlider not grabbing focus?):
        </Text>
        <RangeSlider color="red" minRange={1} />
        <Text c="red" size="xl">
          Suggestion: <Kbd>{"←"}</Kbd> and <Kbd>{"→"}</Kbd> for left thumb,
          <Kbd>{"↑"}</Kbd> and <Kbd>{"↓"}</Kbd> for right thumb.
        </Text>
      </Container>
    </MantineProvider>
  );
}
