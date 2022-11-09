import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  IconButton,
  Link,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import { CopyIcon, ExternalLinkIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
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
      <Stack
        direction={['column', null, 'row']}
        justifyContent="space-evenly"
        divider={<StackDivider borderColor={useColorModeValue('gray.300', 'gray.500')} />}
      >
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          href="https://github.com/stacksgov/sips/blob/feat/sip-015/sips/sip-015/sip-015-network-upgrade.md"
          isExternal
        >
          SIP-015 on GitHub <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          title="Stacks 2.1: Strengthening The Connection to Bitcoin"
          href="https://stacks.org/stacks-21-what-to-expect"
          isExternal
        >
          Stacks Foundation Blog <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          title="A Developer's Guide to Stacks 2.1"
          href="https://www.hiro.so/blog/a-developers-guide-to-stacks-2-1"
          isExternal
        >
          Hiro Blog <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>
    </Box>
  );
};

const VoteSection = () => {
  return (
    <Box p="10">
      <Heading pb="5">
        How to Vote{' '}
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          title="Stacks 2.1: Your Guide to Voting"
          href="https://stacks.org/21-voting-guide"
          isExternal
        >
          <QuestionOutlineIcon
            boxSize={8}
            mx="2px"
          />
        </Link>
      </Heading>
      <Text pb="5">
        If a user is Stacking, then their STX can be used to vote through Method 1 if Stacking solo
        or Method 2 if Stacking in a pool. For stacker voting, those who are Stacking either on
        their own or through a community delegate/pool through cycles 46 and 47, are eligible to
        vote.
      </Text>
      <Text pb="5">
        If a user is Stacking through an exchange or not Stacking at all, then their STX can be used
        to vote using Method 3 through{' '}
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          href="https://stx.eco/sip/twopointone"
          isExternal
        >
          the Ecosystem DAO website
        </Link>
        .
      </Text>
      <Alert
        mb="5"
        status="info"
      >
        <AlertIcon /> Voting will take place during reward cycles 46 and 47. This window is
        estimated to begin starting November 10, 2022 and ending December 8, 2022.
      </Alert>
      <Divider my="5" />
      <VoteMethodOne />
      <Divider my="5" />
      <VoteMethodTwo />
      <Divider my="5" />
      <VoteMethodThree />
    </Box>
  );
};

const VoteMethodOne = () => {
  const btcYes = '11111111111111X6zHB1ZC2FmtnqJ';
  const btcNo = '1111111111111117CrbcZgemVNFx8';

  const toast = useToast();

  const copyText = text => {
    const copyStatus = copy(text);
    if (copyStatus) {
      toast({
        title: `Copied ${text} to clipboard`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: `Unable to copy to clipboard`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Stack
        direction={['column-reverse', 'row']}
        pb="5"
      >
        <Heading size="md">Method 1: Stacking Solo </Heading>
        <Bitcoin
          boxSize={8}
          color={bitcoinColor}
          ms="2px"
        />
      </Stack>
      <Text pb="5">
        To vote, you'll need to send a Bitcoin transaction using the key(s) to your PoX reward
        address.
      </Text>
      <UnorderedList pb="5">
        <ListItem pb="5">
          <Text as="b">To vote Yes on 2.1</Text>, send a{' '}
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
            {btcYes}
          </Link>
          <IconButton
            aria-label="Copy to clipboard"
            title={`Copy ${btcYes} to clipboard`}
            ms="2"
            icon={<CopyIcon />}
            onClick={() => {
              copyText(btcYes);
            }}
          />
        </ListItem>
        <ListItem>
          <Text as="b">To vote No on 2.1</Text>, send a{' '}
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
            {btcNo}
          </Link>
          <IconButton
            aria-label="Copy to clipboard"
            title={`Copy ${btcNo} to clipboard`}
            ms="2"
            icon={<CopyIcon />}
            onClick={() => {
              copyText(btcNo);
            }}
          />
        </ListItem>
      </UnorderedList>
      <Alert
        mb="5"
        status="warning"
      >
        <AlertIcon /> If the Stacks address holder votes for both "yes" and "no" by the end of the
        vote period using this method, the vote will be discarded.
      </Alert>
    </>
  );
};

const VoteMethodTwo = () => {
  const stxYes = 'SP00000000000003SCNSJTCHE66N2PXHX';
  const stxNo = 'SP00000000000000DSQJTCHE66XE1NHQ';

  const toast = useToast();

  const copyText = text => {
    const copyStatus = copy(text);
    if (copyStatus) {
      toast({
        title: `Copied ${text} to clipboard`,
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
    } else {
      toast({
        title: `Unable to copy to clipboard`,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Stack
        direction={['column-reverse', 'row']}
        pb="5"
      >
        <Heading size="md">Method 2: Stacking in a Pool </Heading>
        <Stacks
          boxSize={8}
          color={stacksColor}
          ms="2px"
        />
      </Stack>

      <Text pb="5">
        To vote, you'll need to send a Stacks transaction using the key(s) to your Stacking address.
      </Text>
      <UnorderedList pb="5">
        <ListItem pb="5">
          <Text as="b">To vote Yes on 2.1</Text>, send a minimal amount (0.000001 STX or 1 uSTX) of
          STX to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://explorer.stacks.co/address/SP00000000000003SCNSJTCHE66N2PXHX"
            isExternal
          >
            {stxYes}
          </Link>
          <IconButton
            aria-label="Copy to clipboard"
            title={`Copy ${stxYes} to clipboard`}
            ms="2"
            icon={<CopyIcon />}
            onClick={() => {
              copyText(stxYes);
            }}
          />
        </ListItem>
        <ListItem>
          <Text as="b">To vote No on 2.1</Text>, send a minimal amount (0.000001 STX or 1 uSTX) of
          STX to{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://explorer.stacks.co/address/SP00000000000000DSQJTCHE66XE1NHQ"
            isExternal
          >
            {stxNo}
          </Link>
          <IconButton
            aria-label="Copy to clipboard"
            title={`Copy ${stxNo} to clipboard`}
            ms="2"
            icon={<CopyIcon />}
            onClick={() => {
              copyText(stxNo);
            }}
          />
        </ListItem>
      </UnorderedList>
      <VoteButtons />
      <Alert
        mb="5"
        status="warning"
      >
        <AlertIcon /> If the Stacks address holder votes for both "yes" and "no" by the end of the
        vote period using this method, the vote will be discarded.
      </Alert>
    </>
  );
};

const VoteMethodThree = () => {
  return (
    <>
      <Stack
        direction={['column-reverse', 'row']}
        pb="5"
      >
        <Heading
          pb="5"
          size="md"
        >
          Method 3: Liquid STX Balance{' '}
        </Heading>
        <Stacks
          boxSize={8}
          color={stacksColor}
          ms="2px"
        />
      </Stack>

      <Text pb="5">
        To vote, you'll need to access the Ecosystem DAO website and{' '}
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          href="https://stx.eco/sip/twopointone"
          isExternal
        >
          vote through the DAO proposal.
        </Link>
      </Text>
    </>
  );
};
