import React from 'react';
import {
  BoxProps,
  Group,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { DiscordIcon, GithubIcon } from '@mantinex/dev-icons';
import cx from 'clsx';
import { HeaderControl } from './header-control';
import classes from './controls.module.css';

interface HeaderControlsProps extends BoxProps {
  onSearch?: () => void;
  githubLink?: string;
  withSearch?: boolean;
  withGithub?: boolean;
  withDiscord?: boolean;
  discordLink: string;
  withColorScheme?: boolean;
}

interface ControlProps {
  link: string;
}

export function GithubControl({ link }: ControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}

export function DiscordControl({ link }: ControlProps) {
  return (
    <HeaderControl tooltip="Discord" component="a" href={link} className={classes.discord}>
      <DiscordIcon size={20} />
    </HeaderControl>
  );
}

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const color = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HeaderControl
      onClick={() => setColorScheme(color === 'light' ? 'dark' : 'light')}
      tooltip={`${color === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle color scheme"
    >
      {color === 'light' && <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />}
      {color === 'dark' && <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />}
    </HeaderControl>
  );
}

export function HeaderControls({
  onSearch,
  githubLink,
  withGithub = true,
  withDiscord = true,
  withColorScheme = true,
  discordLink,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        {withDiscord && <DiscordControl link={discordLink} />}
        {withGithub && <GithubControl link={githubLink!} />}
        {withColorScheme && <ColorSchemeControl />}
      </Group>
    </Tooltip.Group>
  );
}
