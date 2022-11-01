import { Box, Button, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress, useOpenStxTokenTransfer } from '@micro-stacks/react';
import { useState } from 'react';

export const VoteButtons = () => {
  const { isSignedIn } = useAuth();
  const address = useCurrentStxAddress();
  const { openStxTokenTransfer, isRequestPending } = useOpenStxTokenTransfer();
  const [voted, setVoted] = useState(false);
  const [voteMsg, setVoteMsg] = useState('');
  const [voteTxid, setVoteTxid] = useState('');

  const voteYes = async () => {
    await openStxTokenTransfer({
      recipient: 'SP00000000000003SCNSJTCHE66N2PXHX',
      amount: 1,
      memo: 'SIP-015: Yes',
      onFinish: tx => voteFinished(tx),
    });
  };

  const voteNo = async () => {
    await openStxTokenTransfer({
      recipient: 'SP00000000000000DSQJTCHE66XE1NHQ',
      amount: 1,
      memo: 'SIP-015: No',
      onFinish: tx => voteFinished(tx),
    });
  };

  const voteFinished = tx => {
    setVoted(true);
    setVoteMsg('Thank you for voting! Your vote has been submitted.');
    setVoteTxid(tx.txId);
  };

  if (!isSignedIn) return null;

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="xl"
      p="5"
    >
      <HStack justifyContent="space-evenly">
        <Text
          as="b"
          me="5"
        >
          Logged in as {`${address.substring(0, 5)}...${address.substring(address.length - 5)}`}
        </Text>

        {voted ? (
          <>
            <Text>{voteMsg}</Text>
            <Link
              color={useColorModeValue('blue.600', 'blue.200')}
              href={`https://explorer.stacks.co/txid/${voteTxid}?chain=mainnet`}
              isExternal
            >
              View on the Stacks Explorer
            </Link>
          </>
        ) : (
          <>
            <Button
              mx="5"
              colorScheme="green"
              isLoading={isRequestPending ? true : false}
              onClick={voteYes}
            >
              Vote Yes
            </Button>
            <Button
              mx="5"
              colorScheme="red"
              isLoading={isRequestPending ? true : false}
              onClick={voteNo}
            >
              Vote No
            </Button>
          </>
        )}
      </HStack>
    </Box>
  );
};
