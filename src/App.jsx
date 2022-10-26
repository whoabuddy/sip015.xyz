import reactLogo from './assets/react.svg';
import * as MicroStacks from '@micro-stacks/react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { WalletConnectButton } from './components/wallet-connect-button.jsx';
import { UserCard } from './components/user-card.jsx';
import { NetworkToggle } from './components/network-toggle.jsx';
import { PageHeader } from './components/page-header';

function Contents() {
  return (
    <>
      <PageHeader />
      <Container>
        <h1>SIP-015 Voting Website</h1>
        <div>
          <UserCard />
          <WalletConnectButton />
        </div>
      </Container>
    </>
  );
}

export default function App() {
  return (
    <MicroStacks.ClientProvider
      appName={'SIP-015'}
      appIconUrl={reactLogo}
    >
      <ChakraProvider>
        <Contents />
      </ChakraProvider>
    </MicroStacks.ClientProvider>
  );
}
