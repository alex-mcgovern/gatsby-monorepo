---
title: "GatsbyJS: Don't fight the framework"
date: "2022-04-01T22:12:03.284Z"
categories: ["Frontend"]
description: "Learnings from scaling an enterprise Gatsby site to 500+ pages."
---

[GatsbyJS](https://www.gatsbyjs.com) is a web development framework based on
React, that can act as a
[static site generator](https://www.gatsbyjs.com/docs/glossary/static-site-generator/)
(SSG) or
[enable server side rendering](https://www.gatsbyjs.com/docs/glossary/static-site-generator/)
(SSR). My favourite way to use it is as a static site generator.

Due to their
[nifty webpack config](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/webpack.config.js)
**(and when implemented correctly)** Gatsby can allow you to build sprawling
sites with hundreds of pages while scaling pretty gracefully. You can add rich
functionality or use heavy dependencies while still keeping bundle sizes small
for most of your pages. I think of Gatsby as a toolkit that can allow multiple
complex websites or apps to all co-exist peacefully under the umbrella of one
deployment.

Note that I said "_when configured correctly_". When **not** configured
correctly, scaling up your site can inflate bundle sizes with hundreds of Kb (or
even Mb) of unused JavaScript. This in turn degrades performance and,
ultimately, risks you getting penalised in search engine rankings for a poor
page experience.

Topics like client-side performance and page load times are very near and dear
to my heart, as they can undercut SEO efforts, and have a direct impact on user
experience.

Over the past 2 years, I've built and scaled a GatsbyJS site from 8 pages to
500+. We've added 4 new languages and 7 regional variants. We're on track to
double our visitors in 2022, thanks to the combined efforts of our content team
and my team.

There have been some pain points along the way, no doubt, but primarily those
have been down to implementation, and rarely have they been limitations of the
framework. In this post I'm going to share some of my experience with, and
opinions about Gatsby, but for starters, there is a very important question to
address:

### Is Gatsby still a good choice in 2022?

When Gatsby rose to prominence in its earlier versions, it was the cool new
framework on the block. Adoption was high, and it routinely scored well in
industry surveys for preferred front end tooling. (ADD REFERENCE HERE).
Unfortunately, that is no longer the case as shown in the (ADD SURVEYS HERE)
where Gatsby has dropped from (X%) to (Y%), and NPM install statistics.

Reading recent (2022) comparisons and reviews between the current big frontend
JS frameworks, like Next.js, Nuxt.js (ADD MORE), the two main themes seem to be:

#### Complaint #1: Gatsby bundles too much by default

A website built with Gatsby rehydrates into a full React app on initial client
entry, (adding all 66kb of the react library to the page data).

Many make the (completely justifiable) claim that for a basic static website,
consisting of just a few landing pages, you can live without this dependency.
Those people are probably correct - mostly. Though in my experience, I've needed
to add rich interactive functionality to enterprise websites often enough for it
to be worth the trade off. For an example of the sort of rich interactivity you
can easily add to a Gatsby site, check out my Firebase Kanban project. (LINK TO
KANBAN).

Operating within an all React ecosystem just **_works_ **forme**_._ **Yes the
bundle is slightly larger, but if you've optimised correctly, React should be
the lions share of your initial page load anyway, and if you're **_really_**
concerned, you can try Preact which eliminates a _whole_ 11kb from that weight.
😱

#### Complaint #2: The Gatsby workflow is cumbersome

One of Gatsby's big selling points is the extensibility it offers; you can
install, or create plugins to leverage APIs available in it's gatsby-node,
gatsby-browser or gatsby-ssr environments. You can hook into the different
stages of the site build lifecycle, (or runtime, or SSR) and run your own logic
to source or manipulate data, leverage dependencies and a whole bunch more.

The common complaint is that you end up having to write a lot of boiler plate to
leverage these APIs. This is true, but the usual varieties of source,
transformer or browser plugins tend to follow common patterns while also
offering very fine grained control.

There is a learning curve for these APIs, with a few proprietary concepts and
conventions to consider. The documentation is sometimes terse and lacking
examples, but once you have learned "the Gatsby way" to approach a problem,
everything else clicks into place. I've grown to really like like the
declarative, programmatic approach to page creation, data sourcing and data
manipulation, and it's one of the biggest levers I've been able to pull to keep
performance high as our site has ballooned. (Though not without some stuff,bling
blocks - more on that later)

### So why _am_ I still using Gatsby in 2022?\*\*

I could say a lot more about this, but to summarise:

- I'm very comfortable within the React ecosystem, and so is everyone I'm likely
  to hire.
- They're still developing it very actively. (In fact they are currently teasing
  a framework agnostic flavour soon, perhaps we _can_ do away with that React
  dependency after all)
- Having picked up a few tricks along the way, I can produce full featured web
  apps that are deployed statically with no backend to maintain. (At most I
  might need some serverless stuff to take load off the frontend or for
  authentication).
- The throughput cost of migrating to another platform still outweighs the
  benefits for us.

**Keeping bundle sizes small with GatsbyJS**

If you're building a single page micro site, or a few simple landing pages, you
probably won't need to stress about your bundle size. (Heck you probably don't
even need Gatsby). But if you're building something more complex, or dynamic,
you **will** need to keep an eye on this. In our case, we built a custom CMS
integration (using Storyblok) that allowed a drag n drop experience so that non
technical team members could spin up marketing pages easily, and without
development support. This was the best thing since sliced bread when we first
launched at 8 pages, but the shine quickly wore off due to a quirk of the
initial implementation.

**Dynamic components in JAMStack are _hard_ man **

Our V1 architecture made use of a Webpack feature called require.context(). This
little beauty makes recursively including a large number of files in your bundle
a breeze. All React components that were available to compose via the CMS were
implicitly required at build time (whether they were used or not) and bundled
into a common bundle shared between all pages. These were then rendered through
a renderDynamicComponent function that effectively consumed the context we had
just created.

As I said, this worked a treat when the site was small and simple and it's
dependencies list was short and sweet. But as we started adding more and more
pages, functionality and dependencies this became a nightmare to manage: all
page types shared the same common dependencies, which meant adding something
large (React PDF was a particularly painful thorn in our sides) caused bloat on
every page.

Gatsby state they perform page based bundle splitting by default. Which works
well most of the time, but not when you share a common page template across 65+
of your most popular and important pages.

An unfortunate side effect of utilising the renderDynamicComponent method was
that each
