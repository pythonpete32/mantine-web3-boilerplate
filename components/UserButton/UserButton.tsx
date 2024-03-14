import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';

export function UserButton() {
  const isLoggedIn = true;

  return (
    <UnstyledButton className={classes.user}>
      {isLoggedIn ? (
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
      ) : (
        <Button size="lg" variant="default" fullWidth>
          Sign up / Log in
        </Button>
      )}
    </UnstyledButton>
  );
}
