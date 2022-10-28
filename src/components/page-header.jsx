import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { ThemeToggle } from './theme-toggle';
import { WalletConnectButton } from './wallet-connect-button';
import { Stacks, stacksColor } from './logos';

export const PageHeader = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'neutralD.100')}
      display={'block'}
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('neutral.400', 'neutralD.400')}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <HStack
        justify="space-between"
        w="100%"
        h={16}
        px={4}
      >
        <Link href="/">
          <Stacks
            boxSize={8}
            color={stacksColor}
            ms="2px"
          />
        </Link>
        <WalletConnectButton />
        <ThemeToggle />
      </HStack>
    </Box>
  );
};
