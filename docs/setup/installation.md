---
title: Installation
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation
After you have met all the [requirements](/docs/setup/requirements) and have set up the [Discord application](/docs/setup/discord-app) for the bot, you can start the installation process.

## Downloading the source code
The first step is to download the source code of the bot. You can do this by either downloading the source code from the [GitHub repository](https://github.com/59L/BrayanBot/releases/latest).

## Installing the dependencies
After downloading the source code, you need to install the dependencies. You can do this by running the following command in the terminal:

<Tabs groupId="package-manager">
  <TabItem value="npm" label="npm">
    ```bash
    npm install
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```bash
    yarn
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm install
    ```
  </TabItem>
</Tabs>

## First time setup
After installing the dependencies, you need to set up the bot for the first time. You can do this by running the following command in the terminal:

<Tabs groupId="package-manager">
  <TabItem value="npm" label="npm">
    ```bash
    npm run start
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```bash
    yarn start
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm start
    ```
  </TabItem>
</Tabs>

:::warning

This section of documentation is still in progress. If you have any questions, feel free to ask in the [support server](/docs/community/support).

:::