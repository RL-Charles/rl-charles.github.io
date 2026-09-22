---
title: Development Setup
subtitle: Portable editor, shell, terminal, and browser settings for Windows, WSL, and Omarchy
tools: ["Neovim", "herdr", "Zsh", "Starship", "Ghostty", "VS Code"]
github_repo: https://github.com/RL-Charles/development_setup
order: 3
---

I keep my development configuration in a [dedicated repository](https://github.com/RL-Charles/development_setup) so I can bring familiar tools and shortcuts to a new machine. It tracks the settings and restore steps for my editors, shell, terminals, Git, and browser bookmarks.

## Editor and navigation

- **Neovim** uses the Tokyo Night Moon theme, a pinned plugin set, file search, grep, and Harpoon navigation.
- **herdr** provides a terminal workspace around Neovim with a `Ctrl+Space` prefix and a matching Tokyo Night theme.
- **VS Code and Cursor** have separate settings for Linux and Windows, with VS Code keybindings and an extension list ready to restore.

## Shell and terminals

- **Zsh and Starship** provide the shell and a Catppuccin Mocha prompt.
- **Ghostty** holds the Omarchy terminal configuration. Windows Terminal has its own settings and WSL profile.
- **Git** configuration lives beside the editor and terminal settings.

## Moving to another machine

The repository includes copy paths and setup steps for each tool, plus a Firefox bookmark export for import on Linux. Its [README](https://github.com/RL-Charles/development_setup#readme) has the current restore commands and dependencies.
