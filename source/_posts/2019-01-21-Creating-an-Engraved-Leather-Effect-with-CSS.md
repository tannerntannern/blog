---
title: Creating an Engraved Leather Effect with CSS
disqusId: '2019-01-22 00:27:51-Creating an Engraved Leather Effect with CSS'
date: 2019-01-21 18:27:51
tags:
	- css
	- tutorial
---

{% asset_img "asdf.jpg" "TODO: place final result here" %}

I love the look of gold-engraved leather.  You see it all the time on portfolios, diplomas, etc., and I think the reason is because it really does have a universal appeal.  However, you don't see it so often on the web.  Perhaps it just doesn't fit with the flat style that dominates the internet.  Or maybe (most likely) it's because the effect cannot easily be pulled off in CSS.

<!-- more -->

Traditionally, if you wanted to include something like the above image on your website, you'd be forced to create it with Photoshop or other external software, then include the image in the HMTL.  If you ever want to change the text, resize, or use a different font, you would have to create it all again.  It's even worse if your site is mobile-friendly (practically a requirement these days) because you need to keep track of multiple sizes and layouts...  Not worth the hassle unless you _really_ need the effect.

BUT FEAR NOT!  With a just few CSS tricks and clever texturing, you can mimic this lovely style yourself! AND, it's super flexible:

* It works with _any_ text (even emojis to an extent 😲)
* It work with _any_ font (including [Font Awesome](https://fontawesome.com/), or a similar font-based icon system <i class="fas fa-thumbs-up"></i>)
* Either of those two things can change on the fly without ruining the effect

Today, I will walk you through my process so you can create the effect yourself, and I'll even give away the special Blender-made textures at the end of the article.  It's a bumpy road ahead, but surely you will find the journey well worth it, because the effect looks so nice!

## Breaking it down: How does it work?	
Before we can get to work, we need to briefly break down how the effect is pulled off.  There are several key pieces:

1.  [Normal mapping](https://en.wikipedia.org/wiki/Normal_mapping) on the gold texture (the one part that must be pre-made) makes it look as though the gold is "painted" directly on the leather.  Without this effect, the gold just looks wrong. 
2.  [`background-clip: text`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) allows us to clip the gold texture to the shape of the text.
3.  Multiple `text-shadow`s create the illusion that the text has been pressed into the leather.

I will walk through these effects in the above order, starting with the normal mapping, which is by far the trickiest.

## Step 1. Creating the Textures
The first step is to find a seamless leather texture along with its matching normal map.  A number of sites provide high-quality textures, [Poliigon](https://www.poliigon.com/) perhaps being the best and most popular, but it's not free for all textures.  [Texturize](http://www.texturise.club/) is another site that provides all textures royalty-free, but the selection is smaller.  Luckily, it had the [kind of leather I was looking for](http://www.texturise.club/2013/12/seamless-black-leather-texture-maps.html).  Go ahead and download the diffuse and normal texture.  You can also download the specular texture if you wish.

If you have your own texture and need a normal map for it, there are a number of tools that can generate one for you, [some online](http://cpetry.github.io/NormalMap-Online/) and [some for desktop use](http://www.crazybump.com/).  However, you'll want to know what you're doing for these and they're outside the scope of this tutorial.

{% colorquote warning %}
If you don't know what a normal map is, <a href="https://www.youtube.com/results?search_query=normal+maps+explained">a YouTube search</a> can probably answer most of your questions.  All you really need to know is that they help 3D software render lighting for geometrically complex surfaces.
{% endcolorquote %}
