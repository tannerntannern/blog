---
title: Budgeteer - A Budget-Balancing Tool
disqusId: '2019-06-25 23:01:34-"Budgeteer - A Budget-Balancing Tool"'
date: 2019-06-25 18:01:34
tags:
  - javascript
  - typescript
  - budgetting
---

{% asset_img "promo.svg" %}

You can gain some useful insights by visualizing your budget, but creating a chart like the one above this isn't always worth the effort.  That's why I created a tool called [Budgeteer][3] that makes it easier than ever to make these charts.  In this post, I'd like to talk a little bit about how to use the tool as well as some of the math behind it.

<!-- more -->

* [Click here](#Using-the-Budgeteer-Website) if you just want to learn how to use the tool
* [Click here](#Appreciating-the-Underlying-Math) if you're interested in the underlying math

# Motivation
Before I continue I must give credit to [Steve Bogart][5] who created the [original SankeyMATIC][4] tool that this project is based on.  It's an excellent tool and may even suit your needs _better_ than Budgeteer for simple use cases. 

## Problems with SankeyMATIC
However, what I didn't like about SankeyMATIC (and other tools like it) is that modelling flows is a bit inflexible.  For example, consider the following:

![SankeyMATIC problem 1](problem1.svg)

The code to generate this diagram with SankeyMATIC is simple:

```
Income [10] Rent
Income [10] Savings
Income [10] Spending
```

However, this code doesn't capture the _logic_ of these flows; it only describes _results_.  What would be much better is something like this:

```
Income = supply(30)
Rent.consumes(10).from(Income)
Income.supplies(10).to(Savings)
Income.suppliesRemaining().to(Spending)
```

There's a much different intent communicated here:
* It emphasizes that "Income" is a fixed supply with a certain amount
* It describes "Rent" as "consuming" income as opposed to "being supplied by" Income
* It suggests that "Spending" is lower priority than rent and savings as it just gets "the leftovers"

This "leftovers" feature would be very nice for making complicated flows.  Calculating differences is easy for trivial flows like this, but it becomes unwieldy with more complicated flows like the one shown at the top of this post.

## Enter Budgeteer
In a nutshell, this more expressive syntax and auto-calculated differences is what [Budgeteer][3] provides.  Budgeteer does not replace SankeyMATIC, but rather builds directly on top of it; it acts as a middleman, translating a more expressive JavaScript-based API into the code that SankeyMATIC understands.

> Technically, [Budgeteer is a separate, standalone TypeScript package][1] that can operate outside of SankeyMATIC, but it can only be used programmatically.  [Budgeteer + SankeyMATIC][3] is the website that integrates it into a graphical tool like SankeyMATIC.  See the [repository for the website][2] if you want to learn more.

With that lengthy intro out of the way, let's jump into using the [Budgeteer Website][3]!

# Using the Budgeteer Website
Coming soon...

# Appreciating the Underlying Math
Coming soon...

[1]: https://github.com/tannerntannern/budgeteer
[2]: https://github.com/tannerntannern/budgeteer-sankeymatic
[3]: https://budgeteer.tannernielsen.com
[4]: http://sankeymatic.com
[5]: https://twitter.com/nowthis/
