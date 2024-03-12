'use client';

import { FC, PropsWithChildren } from 'react';
import { AppShell as APP_SHELL, Skeleton } from '@mantine/core';
import { useAppShellContext } from './app-shell-context';
import { Header } from '../Header';

export const AppShell: FC<PropsWithChildren> = ({ children }) => {
  const { opened } = useAppShellContext();
  return (
    <APP_SHELL
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <APP_SHELL.Header>
        <Header />
      </APP_SHELL.Header>
      <APP_SHELL.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </APP_SHELL.Navbar>
      <APP_SHELL.Main>{children}</APP_SHELL.Main>
      <APP_SHELL.Footer p="md">Footer</APP_SHELL.Footer>
    </APP_SHELL>
  );
};
