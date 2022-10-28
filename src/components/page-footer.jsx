import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { Github, Stacks, Twitter } from './logos.jsx';
import { WalletConnectButton } from './wallet-connect-button.jsx';

export const PageFooter = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'neutralD.100')}
      display={'block'}
      w="100%"
      py="5"
      zIndex={99}
      borderTopWidth="2px"
      borderTopColor={useColorModeValue('neutral.400', 'neutralD.400')}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <HStack
        justifyContent="space-between"
        mx={4}
      >
        <WalletConnectButton />
        <HStack>
          <Link
            href="https://stacks.co"
            isExternal
          >
            <Stacks boxSize={8} />
          </Link>
          <Link
            href="https://github.com/whoabuddy/sip015.xyz"
            isExternal
          >
            <Github boxSize={8} />
          </Link>
          <Link
            href="https://twitter.com/whoabuddydev"
            isExternal
          >
            <Twitter boxSize={9} />
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};
