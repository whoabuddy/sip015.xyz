import reactLogo from './assets/react.svg';
import * as MicroStacks from '@micro-stacks/react';
import { ChakraProvider } from '@chakra-ui/react';
import { PageHeader } from './components/page-header';
import { PageBody } from './components/page-body';
import { PageFooter } from './components/page-footer';

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
      appName={'SIP-015'}
      appIconUrl={reactLogo}
    >
      <ChakraProvider>
        <Contents />
      </ChakraProvider>
    </MicroStacks.ClientProvider>
  );
}
