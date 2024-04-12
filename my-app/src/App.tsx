import { MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
