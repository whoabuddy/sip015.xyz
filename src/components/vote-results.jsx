import { Box, Text } from '@chakra-ui/react';
import { useVoteResults } from '../hooks/vote-results';

export const VoteResults = () => {
  const voteResults = useVoteResults();

  if (!voteResults) return null;

  return (
    <Box>
      <Text>Yes: {voteResults.yes}</Text>
      <Text>No: {voteResults.no}</Text>
    </Box>
  );
};
