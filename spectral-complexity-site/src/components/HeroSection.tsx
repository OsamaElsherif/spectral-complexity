import { Heading, Box, Text, Stack, Flex, Badge } from "@chakra-ui/react";
import { ButtonLink } from "./RouterLinkButton";
import ParticleField from "./ParticleField";

export default function HeroSection() {
  return (
    <Box
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 12 }}
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-br, blue.900, gray.900)"
    >
      {/* Radial Blur Effects */}
      <Box
        position="absolute"
        top="20%"
        right="5%"
        width="300px"
        height="300px"
        borderRadius="full"
        bgGradient="radial-gradient(rgba(0,160,255,0.3), transparent)"
        filter="blur(80px)"
        zIndex={1}
      />
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="50%"
        height="300px"
        borderRadius="full"
        filter="blur(80px)"
        bgGradient="radial-gradient(rgba(0,160,255,0.3), transparent)"
        zIndex={1}
      />

      {/* Layout: Stacked on mobile, horizontal on desktop */}
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        gap={12}
      >
        {/* Text Content */}
        <Box
          position="relative"
          color="white"
          zIndex={2}
          flex={1}
          textAlign={{ base: "center", md: "left" }}
        >
          <Stack
            gap={4}
            mb={6}
            direction="row"
            justify={{ base: "center", md: "flex-start" }}
            flexWrap="wrap"
          >
            <Badge colorScheme="purple" px={4} py={1} borderRadius="md">
              Recommended by Researchers
            </Badge>
            <Badge colorScheme="purple" px={4} py={1} borderRadius="md">
              50+ Reads compiined
            </Badge>
            <Badge bg={"rgb(135, 77, 171)"} color={"#fff"}  px={4} py={1} borderRadius="md">
              2nd preprint paper published 
            </Badge>
          </Stack>

          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            maxW="3xl"
          >
            Spectral Topology of Boolean Satisfiability
            {/* Spectral Geometry of Boolean Satisfiability */}
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} mt={4} maxW="2xl">
          Clause-Arity Deformations and the Manifold Geometry of Logical Hardness, Complexity, and Solvability
            {/* A Fourier-Walsh Perspective on Complexity Landscapes */}
          </Text>

          <ButtonLink
            mt={8}
            size="lg"
            bg="#173da6"
            _hover={{ bg: "#fff" }}
            color="white"
            px={6}
            // to="https://www.researchgate.net/publication/392202309"
            to="http://dx.doi.org/10.13140/RG.2.2.31262.65605"
            target="_blank"
          >
            Read the Preprint
          </ButtonLink>
        </Box>

        {/* Particle Visual */}
        <Box
          position="relative"
          flex={1}
          minH={{ base: "200px", md: "300px" }}
          width="100%"
        >
          <ParticleField />
        </Box>
      </Flex>
    </Box>
  );
}
