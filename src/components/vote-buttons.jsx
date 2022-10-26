import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAuth, useCurrentStxAddress } from '@micro-stacks/react';

export const VoteButtons = () => {
  const { isSignedIn } = useAuth();
  const address = useCurrentStxAddress();

  if (!isSignedIn) return null;

  return (
    <>
      <Text
        as="b"
        me="5"
      >
        Logged in as {`${address.substring(0, 5)}...${address.substring(address.length - 5)}`}
      </Text>
      <Popover>
        <PopoverTrigger>
          <Button
            mx="5"
            bg={useColorModeValue('green.300', 'green.500')}
          >
            Vote Yes
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader bg={useColorModeValue('green.300', 'green.500')}>
            Coming soon!
          </PopoverHeader>
          <PopoverBody>
            Thank you for voting YES.
            <br />
            <br />
            TX status and link to TX go here.
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button
            mx="5"
            bg={useColorModeValue('red.300', 'red.500')}
          >
            Vote No
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader bg={useColorModeValue('red.300', 'red.500')}>Coming soon!</PopoverHeader>
          <PopoverBody>
            Thank you for voting NO.
            <br />
            <br />
            TX status and link to TX go here.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
