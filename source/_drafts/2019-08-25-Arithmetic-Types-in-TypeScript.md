---
title: Arithmetic Types in TypeScript
disqusId: '2019-08-25 23:42:57-"Arithmetic Types in TypeScript"'
date: 2019-08-25 18:42:57
tags:
    - typescript
---

{% asset_img "promo.gif" %}

TypeScript's ability to transform types has always interested me, but recently I discovered that the type system doesn't support basic arithmetic operations on numeric type literals.  Out of sheer curiosity (and a bit of obsession), I managed to find a way to make it work.  The exploration was interesting (at least to me) so I thought I would share.

<!-- more -->

## The Problem
If you've worked with TypeScript before, you've certainly come across the `number` type.  Perhaps a lesser known type is the [numeric literal type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#numeric-literal-types), which allows you to be more restrictive.  For example:

```typescript
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
```

These numeric literals are clearly more useful than `number` in this case, as something like `17` shouldn't pass as a valid dice value (unless you're playing DnD).

Things get problematic when you want to apply arithmetic to these numeric literals however.  Consider the following:

```typescript
type Candiate<N extends string, E1 extends number, E2 extends number> = {
    name: N,
    internshipExperience: E1,
    professionalExperience: E2,
    totalExperience: E1 + E2, // <-- this isn't valid!
};

type Bob = Candidate<'Bob', 1, 2>;
// Bob['totalExperience'] should be 3!
```

Of course, this is hardly a problem worth losing sleep over.  You could just do `totalExperience: number` and call it good.

But I'm not very interested in the practical solution.  I want TypeScript to know the answer.  And really, _why shouldn't it_?  It already knows the exact values for `internshipExperience` and `professionalExperience`, so it's not a stretch that the TS compiler could also do some basic addition to figure out `totalExperience` and deepen the type-safety of our code.

Again, this is hardly a problem worth solving, but that's beside the point.  There are many other potential use cases for arithmetic on numeric types that I don't need to take the time to defend here.  All I care about is whether it can be achieved at all.

## Solution Attempt #1
Let's just focus on one arithmetic operation at the moment: addition.  Actually, let's limit it even further to just addition by one.  With that in mind, something like this could work:

```typescript
// continue sequence as long as necessary...
type IntegersShiftedDown = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type Increment<N extends number> = IntegersShiftedDown[N];
```

This works because the `Increment<N>` type simply indexes into the `IntegersShiftedDown` tuple to get its value.  So if you pass in `0`, you'll get `1` back, and if you pass `1`, you'll get `2`, and so on.

While we're at it, we could also make a `Decrement<N>` type that functions the same way:

```typescript
// continue sequence as long as necessary...
type IntegersShiftedUp = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Decrement<N extends number> = IntegersShiftedUp[N];
```

Now we've got the ground work to create an `Add<A, B>` type.
