import React from 'react';
import { GithubIcon } from '@mantinex/dev-icons';
import { HeaderControl } from './header-control';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
