import {
    Box,
    Heading,
    HStack,
    Text,
    Icon,
    VStack,
    Flex
  } from '@chakra-ui/react'
  import { FaBrain, FaBalanceScale } from 'react-icons/fa'
import { ButtonLink } from './RouterLinkButton'
  
  const PaperCard = ({
    title,
    subtitle,
    readLink,
    extraButtonLabel,
    extraLink,
    icon,
  }: {
    title: string
    subtitle: string
    readLink: string
    extraButtonLabel?: string
    extraLink?: string
    icon: any
  }) => {
    return (
      <Box
        bg={"#151b2a"}
        borderRadius="lg"
        p={6}
        w="full"
        maxW="500px"
        boxShadow="md"
      >
        <HStack gap={8} mb={4}>
          <Icon as={icon} boxSize={10} />
          <VStack align="start" gap={0}>
            <Text fontSize="md" fontWeight="bold" color="gray.500">
              Paper
            </Text>
            <Text fontSize="x-large" fontWeight="semibold">
              {title}
            </Text>
            <Text fontSize="lg" color="gray.400" mb={6} textAlign={"center"}>
            {subtitle}
            </Text>
          </VStack>
        </HStack>
        <HStack gap={3} justify={"center"}>
          <ButtonLink
            to={readLink}
            bg={"#152fce"}
            color={"white"}
            _hover={{ bg: "#fff", color: "#152fce" }}
            size="lg"
          >
            Read Paper
          </ButtonLink>
          {extraButtonLabel && extraLink && (
            <ButtonLink
              to={extraLink}
              variant="ghost"
              size="lg"
              color="#fff"
            >
              {extraButtonLabel}
            </ButtonLink>
          )}
        </HStack>
      </Box>
    )
  }
  
  const ResearchPapersSection = () => {
    return (
        <>
        <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={5}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="Poppins"
        fontWeight="bold"
      >
        Latest Research Papers
      </Heading>
        <Flex py={5} gap={10} wrap={"wrap"} justify={"center"}>
            <PaperCard
                title="Spectral Geometry of SAT"
                subtitle="Fourier–Walsh + UMAP"
                readLink="https://doi.org/10.13140/RG.2.2.34455.89765"
                extraButtonLabel="See Visuals"
                extraLink="#visuals" // replace with actual anchor or URL
                icon={FaBrain}
            />
            <PaperCard
                title="Separability Across k-SAT"
                subtitle="2SAT vs. 3SAT vs. 4SAT"
                readLink="https://doi.org/10.13140/RG.2.2.31262.65605"
                icon={FaBalanceScale}
                extraButtonLabel="See Visuals"
                extraLink="#visuals" // replace with actual anchor or URL
            />
        </Flex>
        </>
    )
  }
  
  export default ResearchPapersSection
  