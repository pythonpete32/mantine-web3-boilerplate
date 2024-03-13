'use client';

import { FC, PropsWithChildren } from 'react';
import { AppShell as APP_SHELL } from '@mantine/core';
import { useAppShellContext } from './app-shell-context';
import { Header } from '../Header';
import { NavbarSimple } from '../NavbarSimple/NavbarSimple';

export const AppShell: FC<PropsWithChildren> = ({ children }) => {
  const { opened } = useAppShellContext();
  return (
    <APP_SHELL
      header={{ height: 60 }}
      footer={{ height: 0 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <APP_SHELL.Header>
        <Header />
      </APP_SHELL.Header>
      <APP_SHELL.Navbar p="md">
        <NavbarSimple />
      </APP_SHELL.Navbar>
      <APP_SHELL.Main>{children}</APP_SHELL.Main>
    </APP_SHELL>
  );
};
