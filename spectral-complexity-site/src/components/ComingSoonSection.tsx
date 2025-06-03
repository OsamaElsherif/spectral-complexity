import { Box, Heading, ListItem, ListRoot, Text } from "@chakra-ui/react";

export default function ComingSoonSection() {
    return (
        <Box flex={1}>
            <Heading textAlign={"left"} as="h2" size="xl" mb={6} fontFamily={"Poppins"}>Coming soon</Heading>
            
            <ListRoot gap={6}>
                <PaperListItem 
                    number={2} 
                    bg="rgb(135, 77, 171)"
                    color="white"
                    title="Spectral Metrics Across k-SAT - DONE ☑️" 
                />
                
                <PaperListItem 
                    number={3} 
                    bg="blue"
                    color="white"
                    title="QBF and Quantifier Induced Spectral Deformation" 
                />
                
                <PaperListItem 
                    number={4} 
                    bg="blue"
                    color="white"
                    title="Neural Network Learnability via Spectral Topology" 
                />
            </ListRoot>
        </Box>
    );
}

function PaperListItem({ number, title, bg, color }: { number: number; title: string, bg: string, color: string }) {
    return (
        <ListItem display="flex" alignItems="flex-start">
            <Box 
                as="span" 
                mr={3} 
                fontSize="sm" 
                bg={bg}
                color={color} 
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