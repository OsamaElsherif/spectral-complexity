import { Box, Flex } from "@chakra-ui/react";
import UMAPPlotCard from "./VisualHighlights/UMAPPlotCard";
import MetricPlotCard from "./VisualHighlights/MetricPlotCard";
import { ButtonLink } from "./RouterLinkButton";

export default function VisualizationSection() {
    return (
        <Flex direction="column" gap={8}>
            <Flex 
                direction={{ base: "column", lg: "row" }} 
                gap={10} 
                bg="transparent" 
                p={8} 
                borderRadius="md"
                boxShadow="xl"
            >
                {/* UMAP Projection */}
                <Box flex={1}>
                    <UMAPPlotCard />
                </Box>
                
                {/* Spectral Metrics */}
                <Box flex={1}>
                    <MetricPlotCard />
                </Box>
            </Flex>
            <Flex direction="row" position={"relative"} justify="space-around" gap={5}>
                <Box as={ButtonLink} to="https://www.researchgate.net/publication/392202309_Spectral_Geometry_of_Boolean_Satisfiability_A_Fourier-Walsh_Perspective_on_Complexity_Landscapes_with_UMAP_Projections_and_Complexity_Class_Separation?_sg%5B0%5D=fEqZu4qUyy2_SH4WGKQhE_5iuN53gIbI-1ughj7AorKT-Ywv7Z11N49tojSfZHM9qFGJI4tKFPM7ks9Tbzk5lCjFXUSuLw97WnsgoIu6.rus5m8gUox2e9wDek8KnDGGFAygD2detxPmcuhXQMHtv6sZvW1JFewcDcOIgbX4CrYOYQh3dF_-vnOAqkUyCiA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19" width="30%" py={10} color="white" bg="#151b2a" fontFamily="Poppins">Read the Preprint</Box>
                <Box as={ButtonLink} to="#" width="30%" py={10} color="white" bg="#151b2a" fontFamily="Poppins">Read the Brealdown</Box>
                <Box as={ButtonLink} to="mailto:elsherif.osama155@gmail.com" width="30%" py={10} color="white" bg="#151b2a" fontFamily="Poppins">Contact</Box>
            </Flex>
        </Flex>
    );
}