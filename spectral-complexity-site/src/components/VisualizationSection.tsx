import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import UMAPPlotCard from "./VisualHighlights/UMAPPlotCard";
import MetricPlotCard from "./VisualHighlights/MetricPlotCard";
import { ButtonLink } from "./RouterLinkButton";

export default function VisualizationSection() {

  return (
    <Flex direction="column" gap={8} px={{ base: 4, md: 8 }} py={10}>
      {/* Visualization Cards */}
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={-10}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="Poppins"
        fontWeight="bold"
      >
        Spectral Geometry of SAT Paper Visuals
      </Heading>
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={5}
        bg={"transparent"}
        p={8}
        borderRadius="xl"
        boxShadow="2xl"
      >
        <Box flex={1}>
          <UMAPPlotCard />
        </Box>
        <Box flex={1}>
          <MetricPlotCard />
        </Box>
      </Flex>

      {/* CTA Buttons */}
      <Stack
    direction={{ base: "column", md: "row" }}
    gap={5}
    maxW="container.md"
    mx="auto"
    w="full"
    >
    <Box
        as={ButtonLink}
        to="https://www.researchgate.net/publication/392202309_Spectral_Geometry_of_Boolean_Satisfiability_A_Fourier-Walsh_Perspective_on_Complexity_Landscapes_with_UMAP_Projections_and_Complexity_Class_Separation"
        py={6}
        px={6}
        w={{ base: "auto", md: "30%" }}
        bg="#151b2a"
        color="white"
        fontFamily="Poppins"
        textAlign="center"
        borderRadius="lg"
    >
        Read the Preprint
    </Box>

    <Box
        as={ButtonLink}
        to="#"
        py={6}
        px={6}
        w={{ base: "auto", md: "30%" }}
        bg="#151b2a"
        color="white"
        fontFamily="Poppins"
        textAlign="center"
        borderRadius="lg"
    >
        Read the Breakdown
    </Box>

    <Box
        as={ButtonLink}
        to="mailto:elsherif.osama155@gmail.com"
        py={6}
        px={6}
        w={{ base: "auto", md: "30%" }}
        bg="#151b2a"
        color="white"
        fontFamily="Poppins"
        textAlign="center"
        borderRadius="lg"
    >
        Contact
    </Box>
    </Stack>
    </Flex>
  );
}
