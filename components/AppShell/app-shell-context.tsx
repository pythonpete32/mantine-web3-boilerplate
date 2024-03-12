'use client';

import React, { FC, PropsWithChildren } from 'react';
import { useDisclosure } from '@mantine/hooks';

interface AppShellContextValue {
  opened: boolean;
  toggle: () => void;
}

const AppShellContext = React.createContext<AppShellContextValue | null>(null);

export const AppShellProvider: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return <AppShellContext.Provider value={{ opened, toggle }}>{children}</AppShellContext.Provider>;
};

export const useAppShellContext = () => {
  const context = React.useContext(AppShellContext);
  if (context === null) {
    throw new Error('useAppShellContext must be used within a AppShellProvider');
  }
  return context;
};
