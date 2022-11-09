import * as MicroStacks from '@micro-stacks/react';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import { PageHeader } from './components/page-header';
import { PageBody } from './components/page-body';
import { PageFooter } from './components/page-footer';
import { useNoWalletFound } from './hooks/no-wallet';

function Contents() {
  return (
    <>
      <PageHeader />
      <PageBody />
      <PageFooter />
    </>
  );
}

export default function App() {
  return (
    <MicroStacks.ClientProvider
      appName="Vote on SIP-015"
      appIconUrl="https://sip015.xyz/vote-on-sip015.png"
      onNoWalletFound={useNoWalletFound()}
    >
      <ChakraProvider>
        <Contents />
      </ChakraProvider>
    </MicroStacks.ClientProvider>
  );
}
