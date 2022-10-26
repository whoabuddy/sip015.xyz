import { Button } from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress } from '@micro-stacks/react';

export const WalletConnectButton = () => {
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  const address = useCurrentStxAddress();
  const label = isRequestPending
    ? 'Loading...'
    : isSignedIn
    ? `${address.substring(0, 5)}...${address.substring(address.length - 5)}`
    : 'Login to Vote';
  return (
    <Button
      fontSize="sm"
      onClick={() => {
        isSignedIn ? void signOut() : void openAuthRequest();
      }}
    >
      {label}
    </Button>
  );
};
