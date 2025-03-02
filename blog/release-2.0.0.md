---
title: Release Notes - BryanBot v2.0.0
description: Release notes for BryanBot version v2.0.0
slug: release-2.0.0
authors: [59L, simonb50]
tags: [release]
hide_table_of_contents: false
---

# Release Notes - BryanBot v2.0.0

We are thrilled to announce the release of version **v2.0.0** of **BryanBot**! <br />
This release is complete rewrite of the bot, with a new codebase and features. This release is the result of months of hard work from the development team and we are excited to share it with you.

<!-- truncate -->

---

## 🚀 New Features
1. New Logging System
   - Added a new logging system with new chalk based colors system.
2. Folder-based addons
   - Addons can now be folder-based instead of a single file.
   - For it to work, the folder must contain an `index.js` file.
3. Added utility for creating modals
   - You can now easily create modals using the new `setupModal` utility.
   - It is based on `setupComponents` and supports variables.
4. Created `findTextChannel` and `findVoiceChannel` methods
   - These methods allow you to find a text or voice channel by name.
   - You can use these by directly calling them or using `text` or `voice` as a type in `findChannel`.
5. Added new methods to include more developer info in the addon object
    - `setDeveloper` - Developer name (required)
    - `setDiscord` - Discord support server invite url (optional)
    - `setDocs` - Documentation link (optional)
    - `setAdditional` - Additional info (optional)
6. Eval command
    - Added an eval command for easier debugging.

## 💡 Improvements
1. Reworked all existing commands.
2. Added more error handling for better both user and developer experience.
3. Created `createVariable` method for easier variable creation.

## 🐛 Bug Fixes
1. Fixed some broken JSDoc comments with wrong types.
2. Fixed some validators not working as expected.

## ⚠️ Breaking Changes
This is complete rewrite of the bot. Neither old addons nor old bod config files will work with this release. <br />
You will need to update your addons and bot config files to work with this release. <br />
Some addons may have the same config files as before, but you will need to verify that with their developer(s).

## 📥 How to Update
Since this is a major release, you will need to replace the old bot with the new one. <br />
Old addons will not work with this release, so you will need to update them as well. <br />

---

Feel free to report issues or provide feedback on our [GitHub Issues page](https://github.com/BryanBotDev/BryanBot/issues) or join our [Discord Support Server link](https://discord.gg/GvyuDDFeZU). Let us know what you’d like to see in future releases!

Happy Coding! <br />
– The BryanBot Team