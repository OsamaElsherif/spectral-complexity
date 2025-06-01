import { Box, Flex, Text} from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box bg="transparent" px={8} py={10} color="white" mt={16}>
            <Flex maxW="container.xl" mx="auto" align="center" justify="center" direction={{ base: "column", md: "row" }} gap={6}>
                <Text fontSize="sm">© 2025 Spectral Complexity Theory. All rights reserved.</Text>
            </Flex>
        </Box>
    );
}