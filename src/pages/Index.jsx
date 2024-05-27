import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert("You have successfully enrolled in the course!");
    }
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" centerContent py={20}>
        <VStack spacing={6} textAlign="center">
          <Heading as="h2" size="2xl">Learn to Code</Heading>
          <Text fontSize="xl">Join millions of learners from around the world mastering new skills.</Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
      </Container>

      {/* Featured Courses Section */}
      <Container maxW="container.xl" py={20}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} key="courseId1">
            <Image src="https://via.placeholder.com/300" alt="Course 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 1</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button
                colorScheme={enrolledCourses.includes("courseId1") ? "green" : "blue"}
                onClick={() => handleEnroll("courseId1")}
                disabled={enrolledCourses.includes("courseId1")}
              >
                {enrolledCourses.includes("courseId1") ? "Enrolled" : "Enroll"}
              </Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} key="courseId2">
            <Image src="https://via.placeholder.com/300" alt="Course 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 2</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button
                colorScheme={enrolledCourses.includes("courseId2") ? "green" : "blue"}
                onClick={() => handleEnroll("courseId2")}
                disabled={enrolledCourses.includes("courseId2")}
              >
                {enrolledCourses.includes("courseId2") ? "Enrolled" : "Enroll"}
              </Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} key="courseId3">
            <Image src="https://via.placeholder.com/300" alt="Course 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Course Title 3</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button
                colorScheme={enrolledCourses.includes("courseId3") ? "green" : "blue"}
                onClick={() => handleEnroll("courseId3")}
                disabled={enrolledCourses.includes("courseId3")}
              >
                {enrolledCourses.includes("courseId3") ? "Enrolled" : "Enroll"}
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
            <HStack spacing={4}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;