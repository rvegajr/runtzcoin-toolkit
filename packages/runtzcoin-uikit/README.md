# 🥞 Runtz UIkit

[![Version](https://img.shields.io/npm/v/@runtzswap-libs/uikit)](https://www.npmjs.com/package/@runtzswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@runtzswap-libs/uikit)](https://www.npmjs.com/package/@runtzswap-libs/uikit)

Runtz UIkit is a set of React components and hooks used to build pages on Runtz's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @runtzswap-libs/uikit`

## Setup

### Theme

Before using Runtz UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@runtzswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@runtzswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://runtzswap.github.io/runtz-uikit/)
