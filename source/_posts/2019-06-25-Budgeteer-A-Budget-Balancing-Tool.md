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
Before I continue I must give credit to [Steve Bogart][5] who created the [original SankeyMATIC][4] tool that this project is based on.  It's an excellent tool and may even suit your needs better than Budgeteer for simple use cases. 

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
If you know how to use [SankeyMATIC][4], you already know most of [Budgeteer][3].  The only substantial change is how your code translates into a diagram, which is what I'll focus on.

## Budgeteer's Language 
Budgeteer understands JavaScript, which is great if you already know JavaScript, but not so great if you don't.  To mitigate this, I designed the API to read like spoken English as much as possible.  Additionally the code editor on the website will help you out a lot as you type:

![Editor code completion](code-completion1.gif)

### Main Concepts
Budgeteer has just a few main concepts.  You can probably pick them up in a matter of minutes.

#### Node Types
Each point where flows connect on the chart is a "node."  There are three types of nodes:
1. **Supplies** - Nodes with a fixed supply that are only consumed from
1. **Consumers** - Nodes that only consume from other nodes
1. **Pipes** - Nodes that both consume from and supply other nodes

Nodes that can consume from other nodes (and thus receive supply) are called _supplyable_.  Nodes that can supply other nodes (and thus be consumed) are called _consumable_.

This means (somewhat confusingly) that **supply** nodes are _consumable_, **consumer** nodes are _supplyable_, and **pipe** nodes are both consumable _and_ supplyable.

#### Node Relationships
There are three types of relationships a node can establish with another:
1. `A.supplies(<amount>).to(B)` or `B.consumes(<amount>).from(A)`

	One node supplies a fixed amount to another.
	

2. `A.suppliesAsMuchAsNecessary().to(B)` or `B.consumesAsMuchAsNecessary().from(A)`

	One node supplies only as much as the other needs.
	

3. `A.suppliesAsMuchAsPossible().to(B)` or `B.consumesAsMuchAsPossible().from(A)`

	One node gives whatever it can to the other.
	

### Examples
The default example code on the [Budgeteer Website][3] pretty much includes all of budgeteer's features.  Feel free to skip these examples that's enough for you to get the gist.

#### Basic Use: Supplies and Consumers
Supplies and consumers are the basic building blocks of any model in budgeteer.  Here's a basic example:

```javascript
let snackMoney = supply('Snack Money', 3.00);

consumer('Chips').consumes(1.50).from(snackMoney);
consumer('Gatorade').consumes(1.50).from(snackMoney);
```

![Snack money example](example1.svg)

If you prefer to think of snack money as a supplier rather than an object of consumption, you could also write it this way, which results in the exact same diagram:

```javascript
supply('Snack Money', 3.00)
    .supplies(1.50).to(consumer('Chips'))
    .supplies(1.50).to(consumer('Gatorade'));
```

#### Variable Supply and Consumption
You may encounter some situations where you'd rather leave a value unspecified.  Here's an example of how you might do that:

```javascript
let time = supply('Hours of the day', 24);

consumer('Sleep').consumes(8).from(time);
consumer('Morning Routine').consumes(1).from(time);
consumer('Commute').consumes(0.5).from(time);
consumer('Work').consumes(8).from(time);

time.suppliesAsMuchAsPossible().to(consumer('Free time'));
```

![Variable supply example](example2.svg)

Notice how the amount for "Free time" is unspecified by using `suppliesAsMuchAsPossible()`.  It just gets whatever is left over.

#### Using Pipes
Some models require going beyond basic supplies and consumers, which is where pipes come in.  Pipes are useful for "resource pooling":

```javascript
let combinedIncome = pipe('Combined Income');

combinedIncome
	.consumesAsMuchAsPossible().from(supply('My Income', 2000))
	.consumesAsMuchAsPossible().from(supply('Spouse Income', 2000));

consumer('Rent').consumes(1500).from(combinedIncome);
consumer('Food').consumes(500).from(combinedIncome);
consumer('Savings').consumesAsMuchAsPossible().from(combinedIncome);
```

![Resource pooling example](example3.svg)

Pipes can also be useful for simply grouping consumers (or other pipes) together.  Here's a more complex example:

<!-- TODO: ... -->

#### Using Multipliers
<!-- TODO: ... -->

### Complete API Reference
This article is meant to provide a basic overview of the Budgeteer API.  If you would like a more complete, technical reference, check out the [budgeteer repository][1].

## Exporting Your Chart
Todo...

# Appreciating the Underlying Math
Coming soon...

[1]: https://github.com/tannerntannern/budgeteer
[2]: https://github.com/tannerntannern/budgeteer-sankeymatic
[3]: https://budgeteer.tannernielsen.com
[4]: http://sankeymatic.com
[5]: https://twitter.com/nowthis/
