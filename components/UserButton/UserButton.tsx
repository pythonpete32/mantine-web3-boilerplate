import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { DynamicConnectButton, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import classes from './UserButton.module.css';

export function UserButton() {
  const { isAuthenticated, handleLogOut } = useDynamicContext();

  const UserDropdown = (
    <UnstyledButton onClick={() => handleLogOut()}>
      <Group className={classes.userInner}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );

  const AuthenticateButton = (
    <DynamicConnectButton buttonClassName={classes.mantineButton}>
      <Button size="lg" variant="default" fullWidth>
        Sign up / Log in
      </Button>
    </DynamicConnectButton>
  );

  if (isAuthenticated) return UserDropdown;
  return AuthenticateButton;
}
