---
title: Discord Application
sidebar_position: 2
---

# Discord Application

To create a bot, you need to create a Discord application. This application will contain the bot user that you will use to interact with Discord.

## Creating a Discord application
Discord application can be created on the [Discord Developer Portal](https://discord.com/developers/applications).

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on the "New Application" button.
3. Enter the name of your application (it **IS NOT** the name of your bot).
4. Accept the terms and click "Create".

Congratulations! You have created a Discord application. Now you need to setup the bot user.

## Setting up the bot user
By default, after creating the application Discord will automatically create a bot user for you. You can find it in the "Bot" tab on the left side of the screen.

You can customize the bot user with options such as **icon** (avatar), **banner** (profile banner) and **username**.

## Configuring the bot user
After customizing the appearance of the bot, you need to configure it.

First, disable the **Public Bot** option. This will prevent the bot from being added to other servers without your permission. BryanBot is designed to be used on a single server.

Next, you need to enable all **Privileged Gateway Intents** such as **Presence Intent**, **Server Members Intent** and **Message Content Intent**. These are required for the bot to function properly.

:::info[Why do I need to enable all of these intents?]

Normally, you would only enable only the intents that use are actually using. However, since BryanBot is designed to be fully modular it is configured to use all of the intents in case any of the addons require them.

:::

## Adding the bot to your server
After configuring the bot, you need to add it to your server. To do that, you need to generate an **invite link**.
1. Go to the "OAuth2" tab on the left side of the screen.
2. In the "OAuth2 URL Generator" section, select the **bot** and **applications.commands** scopes.
3. Select the permissions that you want the bot to have. The easiest way is to select the **Administrator** permission.
4. Leave the **Integration Type** as "Guild Install".
5. Copy the generated link and open it in your browser.
6. Follow the instructions to add the bot to your server.

Congratulations! You have successfully created a Discord application and added the bot to your server. Now you can start setting up the bot.