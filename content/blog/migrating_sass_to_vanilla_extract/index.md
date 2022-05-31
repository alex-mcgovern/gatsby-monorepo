---
title: Migrating SASS to Vanilla extract
date: "2015-05-06T23:46:37.121Z"
cover: ./pexels-cottonbro-4629625.jpg
description:
  Vanilla Extract offers a neat way to generate and compose re-usable functional
  utility classes in your project. Pain points, learning curve and was it worth
  it?
---

# An experiment in type-safe styles.

A dream of mine is to develop a very modular, and minimal CSS-driven design
system that does away with extraneous dependencies, heavy components and runtime
performance trade-offs.

Initially, I planned to do this in SASS, using an approach based on mixins and
functions to programmatically generate styles from config and theme input
variables. Leading to a very composable API where you could have as little or as
much from the design system wherever you needed it.

My idea was to create a very granular SASS API that allowed functional composing
of styles within a modular CSS approach. More on why I chose to use Vanilla
Extract for my personal site instead.

My experience with web engineering is that you are often faced with the
unpleasant

### What is SASS?

### What is Vanilla Extract?

### Why migrate from SASS to Vanilla Extract?

#### Why are typed styles so useful?

## Learnings:

- ability to directly map component props to recipe variant lookups — truly
  type-safe styling
- recipes as functions to select classnames that have been pre-rendered at build
  time (functionality effectively replaces
  [classnames](https://www.npmjs.com/package/classnames) by
  [Jed Watson](https://github.com/JedWatson) (of which I am a big fan))
- style creation greatly accelerated with snippets

### Things I like

- no implicit, unsafe parent/descendant selectors — you must reference the
  object you wish to target directly, and can safely import it between modules
  with intellisense

### The unintuitive:

- composing styles mixing statically defined styles and sprinkles can have
  unintuitive order clashes (e.g. outline, outline color)

### General thoughts on migrating from SCSS to CSS-in-JS:

- Took a while to re-train muscle memory for the syntax
