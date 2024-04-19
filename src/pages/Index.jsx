// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Image, Heading, Container, VStack } from "@chakra-ui/react";
import { FaRulerCombined } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Aerial Roof Measuring <FaRulerCombined />
        </Heading>
        <Image src="https://images.unsplash.com/photo-1605896437011-bfc94d9c199f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjByb29mc3xlbnwwfHx8fDE3MTM0ODQ5MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Aerial view of roofs" borderRadius="lg" boxShadow="xl" />
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Efficient Roof Measurements
          </Heading>
          <Text mt={4}>Our aerial roof measuring tools provide accurate and comprehensive roof measurements using advanced drone technology. This allows for precise estimations, ensuring that you get the right amount of materials and labor for your roofing projects.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
