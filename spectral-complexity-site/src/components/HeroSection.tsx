import { Heading, Box, Text, Stack, Flex, Badge} from "@chakra-ui/react";
import { ButtonLink } from "./RouterLinkButton";
import ParticleField from "./ParticleField";

export default function HeroSection() {
    return (
        <Box
        px={4}
        py={{base: 20, md: 28}}
        position="relative"
        overflow="hidden"
        >
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
            bgGradient="radial-gradient(rgba(0,160,255,0.4), transparent)"
            filter="blur(80px)"
            zIndex={1}
            />
            
            <Flex direction="row-reverse" width="100%">
                {/* Decorative elements */}
                <Box position="relative" width="50%" height="100%">
                 <ParticleField />   
                </Box>
                
                <Box width="50%" maxW="container.md" mx="5" zIndex={1} position="relative">
                    <Flex direction="column" align="left">
                        <Flex width="50%" justify="space-between" mb={6} gap={5}>
                            <Badge color="white" fontSize={"lg"} fontWeight={"200"} fontFamily={"inter"} background="#1d1d60" px={5} py={3}>Endorsed by Researchers</Badge>
                            <Badge color="white" fontSize={"lg"} fontWeight={"200"} fontFamily={"inter"} background="#1d1d60" px={5} py={3}>50+ Reads in 24h</Badge>
                        </Flex>
                        
                        <Heading fontWeight="bold" fontFamily={"Poppins"} fontSize={{base: "4xl", md:"6xl"}} textAlign="left" lineHeight={1.2}>
                            Spectral Geometry of Boolean Satisfiability
                        </Heading>
                        
                        <Text fontSize={{base: "2xl", md: "5xl"}} fontFamily={"inter"} fontWeight={"200"} mt={6} maxW="2xl" textAlign="left">
                            A Fourier-Walsh Perspective on Complexity Landscapes
                        </Text>
                        
                        
                        <Stack mt={10} direction={{ base: "column", md: "row" }} gap={4} justify="left">
                            <ButtonLink 
                                to="https://www.researchgate.net/publication/392202309_Spectral_Geometry_of_Boolean_Satisfiability_A_Fourier-Walsh_Perspective_on_Complexity_Landscapes_with_UMAP_Projections_and_Complexity_Class_Separation?_sg%5B0%5D=fEqZu4qUyy2_SH4WGKQhE_5iuN53gIbI-1ughj7AorKT-Ywv7Z11N49tojSfZHM9qFGJI4tKFPM7ks9Tbzk5lCjFXUSuLw97WnsgoIu6.rus5m8gUox2e9wDek8KnDGGFAygD2detxPmcuhXQMHtv6sZvW1JFewcDcOIgbX4CrYOYQh3dF_-vnOAqkUyCiA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19" 
                                bg="#152fce" 
                                color="white" 
                                fontWeight={"500"}
                                fontSize={"xl"}
                                size="xl" 
                                _hover={{ bg: "white", color: "3152fce"  }}
                            >
                                Read the Preprint
                            </ButtonLink>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );  
}