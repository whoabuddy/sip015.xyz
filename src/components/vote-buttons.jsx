import { Box, Button, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress, useOpenStxTokenTransfer } from '@micro-stacks/react';
import { useState } from 'react';
import { useBnsName } from '../hooks/bns-name';
import { useVoteStatus } from '../hooks/vote-status';
import { WalletConnectButton } from './wallet-connect-button';

export const VoteButtons = () => {
  const { isSignedIn } = useAuth();
  const address = useCurrentStxAddress();
  const bnsName = useBnsName(address);
  const alreadyVoted = useVoteStatus(address);
  const { openStxTokenTransfer, isRequestPending } = useOpenStxTokenTransfer();
  const [voted, setVoted] = useState(false);
  const [voteMsg, setVoteMsg] = useState('');
  const [voteTxid, setVoteTxid] = useState('');

  const voteYes = async () => {
    await openStxTokenTransfer({
      recipient: 'SP00000000000003SCNSJTCHE66N2PXHX',
      amount: 1,
      memo: 'Yes on 2.1',
      onFinish: tx => voteFinished(tx),
    });
  };

  const voteNo = async () => {
    await openStxTokenTransfer({
      recipient: 'SP00000000000000DSQJTCHE66XE1NHQ',
      amount: 1,
      memo: 'No on 2.1',
      onFinish: tx => voteFinished(tx),
    });
  };

  const voteFinished = tx => {
    setVoted(true);
    setVoteMsg('Thank you for voting! Your vote has been submitted.');
    setVoteTxid(tx.txId);
  };

  if (!isSignedIn)
    return (
      <WalletConnectButton
        mb="5"
        colorScheme="blue"
      />
    );

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="xl"
      p="5"
      mb="5"
    >
      <Stack
        direction={['column', 'column', 'row']}
        justifyContent="space-evenly"
      >
        <Text
          as="b"
          me="5"
          alignSelf="center"
        >
          Logged in as {`${address.substring(0, 5)}...${address.substring(address.length - 5)}`}
          {bnsName ? ` (${bnsName})` : ''}
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
              colorScheme={alreadyVoted ? 'gray' : 'green'}
              isDisabled={alreadyVoted}
              isLoading={isRequestPending ? true : false}
              onClick={voteYes}
            >
              YES ON 2.1
            </Button>
            <Button
              mx="5"
              colorScheme={alreadyVoted ? 'gray' : 'red'}
              isDisabled={alreadyVoted}
              isLoading={isRequestPending ? true : false}
              onClick={voteNo}
            >
              NO ON 2.1
            </Button>
            {alreadyVoted && (
              <Text
                as="i"
                alignSelf="center"
              >
                Already voted
              </Text>
            )}
          </>
        )}
      </Stack>
    </Box>
  );
};
