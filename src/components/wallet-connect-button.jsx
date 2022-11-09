import { Button } from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress } from '@micro-stacks/react';

export const WalletConnectButton = props => {
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  const address = useCurrentStxAddress();

  const label = isRequestPending
    ? 'Loading...'
    : isSignedIn
    ? `${address.substring(0, 5)}...${address.substring(address.length - 5)}`
    : 'Login to Vote';
  return (
    <Button
      {...props}
      title={isSignedIn ? 'Sign Out' : 'Login with a Stacks Wallet to Vote'}
      fontSize="sm"
      onClick={() => {
        isSignedIn ? void signOut() : void openAuthRequest();
      }}
    >
      {label}
    </Button>
  );
};
