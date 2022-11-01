import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Icon,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { VoteButtons } from './vote-buttons';
import { Bitcoin, bitcoinColor, Stacks, stacksColor } from './logos';

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

const AboutSection = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="xl"
      p="10"
    >
      <Heading pb="5">About SIP-015</Heading>
      <Text pb="5">
        This SIP proposes a set of updates to three major areas of the Stacks blockchain:
      </Text>
      <OrderedList pb="5">
        <ListItem>
          <Text as="b">Stacking</Text>, the Proof-of-Transfer (PoX) consensus algorithm as
          implemented in the Stacks chain and originally proposed in{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://github.com/stacksgov/sips/blob/feat/sip-015/sips/sip-015/sip-015-network-upgrade.md"
            isExternal
          >
            SIP-007
          </Link>
          .
        </ListItem>
        <ListItem>
          <Text as="b">Clarity</Text>, the smart contract language supported on the Stacks
          blockchain.
        </ListItem>
        <ListItem>
          <Text as="b">Block Validation</Text>, the procedure by which blocks are determined to be
          acceptable to the Stacks blockchain.
        </ListItem>
      </OrderedList>
      <Link
        color={useColorModeValue('blue.600', 'blue.200')}
        fontSize="1.5em"
        href="https://github.com/stacksgov/sips/blob/feat/sip-015/sips/sip-015/sip-015-network-upgrade.md"
        isExternal
      >
        Read more about SIP-015 <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  );
};

const VoteSection = () => {
  return (
    <Box p="10">
      <Heading pb="5">How to Vote</Heading>
      <Text pb="5">
        If a user is Stacking, then their STX can be used to vote in one of two ways, depending on
        whether or not they are solo-stacking or stacking through a delegate.
      </Text>
      <Alert
        mb="5"
        status="warning"
      >
        <AlertIcon /> If the Stacks address holder votes for both "yes" and "no" by the end of the
        vote period, the vote will be discarded.
      </Alert>
      <Divider mb="5" />
      <VoteMethodOne />
      <Divider mb="5" />
      <VoteMethodTwo />
      <Divider mb="5" />
      <VoteMethodThree />
    </Box>
  );
};

const VoteMethodOne = () => {
  return (
    <>
      <Heading
        pb="5"
        size="md"
      >
        Method 1: Stacking Solo{' '}
        <Bitcoin
          boxSize={8}
          color={bitcoinColor}
          ms="2px"
        />
      </Heading>
      <Text pb="5">
        To vote, you'll need to send a Bitcoin transaction using the key(s) to your PoX reward
        address.
      </Text>
      <UnorderedList pb="5">
        <ListItem pb="5">
          <Text as="b">To vote Yes</Text>, send a{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29"
            isExternal
          >
            dust amount
          </Link>{' '}
          (around 6,000 sats) of BTC to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://mempool.space/address/11111111111111X6zHB1ZC2FmtnqJ"
            isExternal
          >
            11111111111111X6zHB1ZC2FmtnqJ
          </Link>
          .
        </ListItem>
        <ListItem>
          <Text as="b">To vote No</Text>, send a{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29"
            isExternal
          >
            dust amount
          </Link>{' '}
          (around 6,000 sats) of BTC to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://mempool.space/address/1111111111111117CrbcZgemVNFx8"
            isExternal
          >
            1111111111111117CrbcZgemVNFx8
          </Link>
          .
        </ListItem>
      </UnorderedList>
    </>
  );
};

const VoteMethodTwo = () => {
  return (
    <>
      <Heading
        pb="5"
        size="md"
      >
        Method 2: Stacking in a Pool{' '}
        <Stacks
          boxSize={8}
          color={stacksColor}
          ms="2px"
        />
      </Heading>
      <Text pb="5">
        To vote, you'll need to send a Stacks transaction using the key(s) to your Stacking address.
      </Text>
      <UnorderedList pb="5">
        <ListItem pb="5">
          <Text as="b">To vote Yes</Text>, send a minimal amount (0.000001 STX or 1 uSTX) of STX to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://explorer.stacks.co/address/SP00000000000003SCNSJTCHE66N2PXHX"
            isExternal
          >
            SP00000000000003SCNSJTCHE66N2PXHX
          </Link>
          .
        </ListItem>
        <ListItem>
          <Text as="b">To vote No</Text>, send a minimal amount (0.000001 STX or 1 uSTX) of STX to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://explorer.stacks.co/address/SP00000000000000DSQJTCHE66XE1NHQ"
            isExternal
          >
            SP00000000000000DSQJTCHE66XE1NHQ
          </Link>
          .
        </ListItem>
      </UnorderedList>
      <VoteButtons />
    </>
  );
};

const VoteMethodThree = () => {
  return (
    <>
      <Heading
        pb="5"
        size="md"
      >
        Method 3: Liquid STX Balance{' '}
        <Stacks
          boxSize={8}
          color={stacksColor}
          ms="2px"
        />
      </Heading>
      <Text pb="5">
        To vote, you'll need to access{' '}
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          href="https://stx.eco/sip/twopointone"
          isExternal
        >
          the Ecosystem DAO website
        </Link>{' '}
        and vote through the DAO proposal.
      </Text>
    </>
  );
};
