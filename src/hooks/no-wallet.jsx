import { useToast } from '@chakra-ui/react';

export const useNoWalletFound = () => {
  const toast = useToast();
  return () => {
    toast({
      title: 'No wallet found',
      description: `Please install either the Hiro or Xverse Stacks wallet to vote on SIP-015`,
      position: 'top',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
};
