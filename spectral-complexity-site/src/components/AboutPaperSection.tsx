import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutPaperSection() {
    return (
        <Box mt={12} mb={16}>
            <Heading as="h2" size="xl" textAlign="left" mb={10} className="poppins-bold" fontSize={"3xl"}>About the paper</Heading>
            
            <Text fontSize="xl" mb={6} textAlign="left" className="inter-regular">
                This is the first paper in the Spectral Complexity Theory series. It introduces a new way 
                to analyze logical problems by transforming them into spectral signals — and reveals a 
                surprising geometric separation between satisfiable and unsatisfiable formulas.
            </Text>
            
            <Text fontSize="2xl" textAlign="left" fontStyle="italic" fontFamily={"inter"} color="gray.300">
                "What if we could see the hardness of a problem —before solving it?"
            </Text>
        </Box>
    );
}