import { FC, PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { AppShellProvider } from '../components/AppShell/app-shell-context';
import { theme } from '../theme';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider theme={theme}>
    <AppShellProvider>{children}</AppShellProvider>
  </MantineProvider>
);
