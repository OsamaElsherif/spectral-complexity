import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutPaperSection() {
  return (
    <Box
      mt={12}
      mb={16}
      px={{ base: 4, md: 0 }}
    >

      

      <Heading
        as="h2"
        size="xl"
        textAlign="left"
        mb={8}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="Poppins"
        fontWeight="bold"
      >
        About the Paper
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        mb={6}
        textAlign="left"
        fontFamily="Inter"
        color={"white"}
      >
        This is the first paper in the Spectral Complexity Theory series. It introduces a new way
        to analyze logical problems by transforming them into spectral signals — revealing a
        surprising geometric separation between satisfiable and unsatisfiable formulas.
      </Text>

      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontStyle="italic"
        fontFamily="Inter"
        color={"white"}
        textAlign="left"
      >
        "What if we could see the hardness of a problem — before solving it?"
      </Text>
    </Box>
  );
}
