import { Center, Container, Heading } from '@chakra-ui/react';
import { AboutSection } from './about-section';
import { VoteSection } from './vote-section';

export const PageBody = () => {
  return (
    <Container maxW="8xl">
      <Center>
        <Heading
          size="4xl"
          py="10"
        >
          Vote on SIP-015
        </Heading>
      </Center>
      <AboutSection />
      <VoteSection />
    </Container>
  );
};
