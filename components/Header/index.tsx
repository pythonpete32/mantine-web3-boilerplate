'use client';

import { Group, Box, Burger } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

import classes from './header.module.css';
import { useAppShellContext } from '../AppShell/app-shell-context';
import { HeaderControls } from '../ControlButtons';

const meta = {
  gitHubLinks: {
    daobox: ' https://github.com/daobox',
  },
  discordLink: 'https://discord.gg/eUZpPbWN',
};

export const Header = () => {
  const { toggle, opened } = useAppShellContext();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <MantineLogo size={30} />
          </Group>

          <Group>
            <HeaderControls
              visibleFrom="sm"
              githubLink={meta.gitHubLinks.daobox}
              discordLink={meta.discordLink}
            />
          </Group>
        </Group>
      </header>
    </Box>
  );
};
