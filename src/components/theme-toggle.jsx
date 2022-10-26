import { Icon, IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleClick = () => {
    toggleColorMode();
  };
  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
      aria-label="theme tooltip"
    >
      <IconButton
        isRound
        aria-label="Switch theme"
        variant={'ghost'}
        icon={colorMode === 'dark' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
        onClick={handleClick}
      />
    </Tooltip>
  );
};
