import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
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
      <Text pb="5">Vote closed - results coming soon!</Text>
    </>
  );
};

const VoteMethodTwo = () => {
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

      <Text pb="5">Vote closed - results coming soon!</Text>
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
        To vote with unlocked STX, you'll need to access the Ecosystem DAO website and{' '}
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
