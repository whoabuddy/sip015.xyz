import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const AboutSection = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="xl"
      p="10"
    >
      <Heading pb="5">About SIP-015</Heading>
      <Text pb="5">
        SIP-015 (aka "Stacks 2.1") proposes a set of updates to three major areas of the Stacks
        blockchain:
      </Text>
      <OrderedList pb="5">
        <ListItem>
          <Text as="b">Stacking</Text>, the Proof-of-Transfer (PoX) consensus algorithm as
          implemented in the Stacks chain and originally proposed in{' '}
          <Link
            color={useColorModeValue('blue.600', 'blue.200')}
            href="https://github.com/stacksgov/sips/blob/feat/sip-015/sips/sip-015/sip-015-network-upgrade.md"
            isExternal
          >
            SIP-007
          </Link>
          .
        </ListItem>
        <ListItem>
          <Text as="b">Clarity</Text>, the smart contract language supported on the Stacks
          blockchain.
        </ListItem>
        <ListItem>
          <Text as="b">Block Validation</Text>, the procedure by which blocks are determined to be
          acceptable to the Stacks blockchain.
        </ListItem>
      </OrderedList>
      <Text pb="5">
        In addition, SIP-020 adds 6 new native functions to perform bitwise operations in Clarity
        code, and will be activated if the SIP-015 vote passes.
      </Text>
      <Stack
        direction={['column', null, null, 'row']}
        justifyContent="space-evenly"
        divider={<StackDivider borderColor={useColorModeValue('gray.300', 'gray.500')} />}
      >
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          href="https://github.com/stacksgov/sips/blob/feat/sip-015/sips/sip-015/sip-015-network-upgrade.md"
          isExternal
        >
          SIP-015 on GitHub <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          href="https://github.com/obycode/sips/blob/bitwise-ops/sips/sip-020/sip-020-bitwise-ops.md"
          isExternal
        >
          SIP-020 on GitHub <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          title="Stacks 2.1: Strengthening The Connection to Bitcoin"
          href="https://stacks.org/stacks-21-what-to-expect"
          isExternal
        >
          Stacks Foundation Blog <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color={useColorModeValue('blue.600', 'blue.200')}
          fontSize="1.25em"
          title="A Developer's Guide to Stacks 2.1"
          href="https://www.hiro.so/blog/a-developers-guide-to-stacks-2-1"
          isExternal
        >
          Hiro Blog <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>
    </Box>
  );
};
