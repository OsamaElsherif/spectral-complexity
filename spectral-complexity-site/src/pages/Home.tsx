import { Box, Container } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import AboutPaperSection from "../components/AboutPaperSection";
import VisualizationSection from "../components/VisualizationSection";
import AboutAuthorSection from "../components/AboutAuthorSection";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
    return (
        <Box as="main">
            <HeroSection />
            <Container maxW="container.xl" py={10}>
                <AboutPaperSection />
                <VisualizationSection />
                <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={8} mt={16}>
                    <AboutAuthorSection />
                    <ComingSoonSection />
                </Box>
            </Container>
        </Box>
    );
}