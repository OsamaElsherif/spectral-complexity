import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    return (
        <Box bg="gray.900" px={8} py={4} color="white" boxShadow="md">
            <Flex align="center">
                <Heading size="md">
                    <RouterLink to="/">
                        Spectral Complexity
                    </RouterLink>
                    <Spacer />
                    <Flex gap={4}>
                        <Link as={RouterLink} href="/" fontWeight="medium">Home</Link>
                        <Link href="#" fontWeight="medium">Paper</Link>
                        <Link href="#" fontWeight="medium">Medium</Link>
                        <Link href="#" fontWeight="medium">GitHub</Link>
                    </Flex>
                </Heading>
            </Flex>
        </Box>
    );
}