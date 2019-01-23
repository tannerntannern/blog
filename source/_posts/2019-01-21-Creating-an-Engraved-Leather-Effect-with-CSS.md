---
title: Creating an Engraved Leather Effect with CSS
disqusId: '2019-01-22 00:27:51-Creating an Engraved Leather Effect with CSS'
date: 2019-01-21 18:27:51
tags:
	- css
	- tutorial
---

<link rel="stylesheet" href="/assets/extra.css">

{% asset_img "asdf.jpg" "TODO: place final result here" %}

I love the look of gold-engraved leather.  You see it all the time on portfolios, diplomas, etc., and I think the reason is because it really does have a universal appeal.  However, you don't see it so often on the web.  Perhaps it just doesn't fit with the flat style that dominates the internet.  Or maybe (most likely) it's because the effect cannot easily be pulled off in CSS.

<!-- more -->

Traditionally, if you wanted to include something like the above image on your website, you'd be forced to create it with Photoshop or other external software, then include the image in the HMTL.  If you ever want to change the text, resize or change the font, you would have to create it all again.  Additionally, you probably need to keep track of multiple sizes and layouts for different display sizes...  Not worth the hassle unless you _really_ need the effect.

So what can a poor developer do?  Luckily, with a few CSS tricks and clever texturing, there is in fact a way to mimic this lovely style yourself, without sacrificing flexibility!  And:

* It works with _any_ text (even emojis to an extent 😲)
* It work with _any_ font (including [Font Awesome](https://fontawesome.com/), or a similar font-based icon system <i class="fas fa-thumbs-up"></i>)
* Both the text and font can change on the fly without messing up the effect

Today, I will walk you through my process so you can create the effect on your own, and I'll even give away the special Blender-made textures at the end of the article.  It's a bumpy road ahead, but surely you will find the journey worth it, because the effect is so beautiful!

## Breaking it down: How does it work?	
Before we can get to work, we need to briefly break down how the effect is pulled off.  There are several key pieces to note:

1.  [Normal mapping](https://en.wikipedia.org/wiki/Normal_mapping) on the gold texture (the one part that must be pre-made) makes it look as though the gold is "painted" directly on the leather.  Without this effect, the gold just looks wrong. 
2.  [`background-clip: text`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) allows us to clip the gold texture to the shape of the text.
3.  Multiple `text-shadow`s create the illusion that the text has been pressed into the leather.

I will walk through these effects in the above order, starting with the normal mapping, which is by far the trickiest.

{% colorquote warning %}
If you don't know what a normal map is, <a href="https://www.youtube.com/results?search_query=normal+maps+explained">a YouTube search</a> can probably answer most of your questions.  All you really need to know is that they help 3D software render lighting for geometrically complex surfaces.
{% endcolorquote %}

## Step 1. Creating the Textures
Our first goal is to create a gold texture that looks a bit like this:

![Textured gold letters reference](reference2.jpg)

We will not be creating the actual letters in this step, but notice how the gold is clearly "painted" on to the existing bumps and crevices.  We will be using [Blender](https://www.blender.org/) achieve this effect.

{% colorquote info %}
I should also note that this does not need to be gold if you want to go for a different look.  You could also do black ink on brown leather, for example, and the steps should be pretty much the same.
{% endcolorquote %}

### Step 1.1
First, you'll want to be sure you have [Blender](https://www.blender.org/download/) installed AND that you have **version 2.79b or later**.  This version has new features that we'll need.

### Step 1.2
Next, you need to find a seamless leather texture along with its matching normal map (and optional specular map).  A number of sites provide high-quality textures; [Poliigon](https://www.poliigon.com/) perhaps is the best and most popular, but it's not free for all textures.  [Texturize](http://www.texturise.club/) is another site that provides all textures royalty-free, but the selection is smaller.

Luckily, it had the [kind of leather I was looking for](http://www.texturise.club/2013/12/seamless-black-leather-texture-maps.html).  Go ahead and download the diffuse and normal texture.  You can also download the specular texture if you wish.

{% colorquote info %}
If you have your own texture and need a normal map for it, there are a number of tools that can generate one for you, <a href="http://cpetry.github.io/NormalMap-Online/">some online</a> and <a href="http://www.crazybump.com/">some for desktop use</a>.  However, you'll want to know what you're doing for these and they're outside the scope of this tutorial.
{% endcolorquote %}

### Step 1.3
Now we can open Blender and start preparing our textures.  This article will assume basic knowledge of Blender, but I will make an effort to be very clear about what I'm doing.

After starting Blender, the first thing we want to do select everything in the scene (<kbd>a</kbd>) and delete it (<kbd>delete</kbd> , <kbd>enter</kbd>).  Next, let's create (<kbd>shift</kbd> + <kbd>a</kbd>) a new plane and scale (<kbd>s</kbd>) it by 5.
