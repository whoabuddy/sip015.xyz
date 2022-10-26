import { Box, Button, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress } from '@micro-stacks/react';
import { ThemeToggle } from './theme-toggle';

export const PageHeader = () => {
  const { signOut } = useAuth();
  const address = useCurrentStxAddress();
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
          <p>SIP-015 Vote</p>
        </Link>
        {address && (
          <Button
            variant="unstyled"
            fontSize="sm"
            onClick={() => void signOut()}
          >
            {`${address.substring(0, 5)}...${address.substring(address.length - 5)}`}
          </Button>
        )}
        <ThemeToggle />
      </HStack>
    </Box>
  );
};
