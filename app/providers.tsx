'use client';

import { FC, PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { AppShellProvider } from '../components/AppShell/app-shell-context';
import { theme } from '../theme';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider theme={theme}>
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <AppShellProvider>{children}</AppShellProvider>
    </DynamicContextProvider>
  </MantineProvider>
);
