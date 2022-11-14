import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Heading,
  IconButton,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import { CopyIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { VoteButtons } from './vote-buttons';
import { ClaimBadge } from './claim-badge';
import { Bitcoin, bitcoinColor, Stacks, stacksColor } from './logos';

export const VoteSection = () => {
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
      <ClaimBadge />
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
      <ClaimBadge />
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
