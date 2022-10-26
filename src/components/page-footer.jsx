import { Box, Center, HStack, Text, useColorModeValue } from '@chakra-ui/react';
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
      <Center>
        <WalletConnectButton />
      </Center>
    </Box>
  );
};
