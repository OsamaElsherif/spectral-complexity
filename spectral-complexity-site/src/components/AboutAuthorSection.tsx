import { Box, Heading, Text, Flex, Avatar } from "@chakra-ui/react";

export default function AboutAuthorSection() {
    return (
        <Box flex={1}>
            <Heading textAlign="left" as="h2" size="xl" mb={6} fontFamily={"Poppins"}>About the author</Heading>
            
            <Flex gap={4}>
                <Avatar.Root size={"xl"} borderRadius={"full"}>
                    <Avatar.Fallback name="Osama Elsherif" />
                    <Avatar.Image src="	https://i1.rgstatic.net/ii/profile.image/11431281476282177-1748574748976_Q128/Osama-Elsheirf.jpg"/>
                </Avatar.Root>
                
                <Box textAlign={"left"}>
                    <Text fontWeight="bold" fontSize="lg" fontFamily={"Poppins"}>I'm Osama Elsherif</Text>
                    <Text mt={2} fontFamily="Inter">
                        — an independent researcher exploring how spectral methods can reveal the true 
                        structure and complexity of logical problems.
                    </Text>
                    
                    <Text mt={4} fontFamily="Inter">
                        This project began with a question: Can we see intuition barriers, before 
                        hitting them?
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}