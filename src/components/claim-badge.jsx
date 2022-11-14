import { Link, Text, useColorModeValue } from '@chakra-ui/react';

export const ClaimBadge = () => {
  return (
    <Text mb="5">
      After casting your vote, please head to stx.eco to{' '}
      <Link
        color={useColorModeValue('blue.600', 'blue.200')}
        href="https://stx.eco/dao/voting/badge"
        isExternal
      >
        claim a unique "Voted" badge
      </Link>{' '}
      over your favorite NFT! <Text as="i">Requires a Stacks wallet with NFTs in it.</Text>
    </Text>
  );
};
