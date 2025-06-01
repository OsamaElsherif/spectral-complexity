import { Box, Container, Stack } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import AboutPaperSection from "../components/AboutPaperSection";
import VisualizationSection from "../components/VisualizationSection";
import AboutAuthorSection from "../components/AboutAuthorSection";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
  return (
    <Box as="main">
      <HeroSection />

      <Container maxW="container.md" py={10} px={{ base: 4, md: 0 }}>
        <Stack gap={12}>
          <AboutPaperSection />
          <VisualizationSection />

          <Stack
            direction={{ base: "column", md: "row" }}
            gap={8}
            mt={8}
            align="stretch"
          >
            <AboutAuthorSection />
            <ComingSoonSection />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
