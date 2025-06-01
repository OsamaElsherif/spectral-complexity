import { Box, Heading, ListItem, ListRoot, Text } from "@chakra-ui/react";

export default function ComingSoonSection() {
    return (
        <Box flex={1}>
            <Heading textAlign={"left"} as="h2" size="xl" mb={6} fontFamily={"Poppins"}>Coming soon</Heading>
            
            <ListRoot gap={6}>
                <PaperListItem 
                    number={2} 
                    title="Spectral Metrics Across k-SAT" 
                />
                
                <PaperListItem 
                    number={3} 
                    title="QBF and Quantifier Induced Spectral Deformation" 
                />
                
                <PaperListItem 
                    number={4} 
                    title="Neural Network Learnability via Spectral Topology" 
                />
            </ListRoot>
        </Box>
    );
}

function PaperListItem({ number, title }: { number: number; title: string }) {
    return (
        <ListItem display="flex" alignItems="flex-start">
            <Box 
                as="span" 
                mr={3} 
                fontSize="sm" 
                bg="blue.700" 
                color="white" 
                px={2} 
                py={1} 
                borderRadius="md"
            >
                Paper {number}
            </Box>
            <Text>{title}</Text>
        </ListItem>
    );
}