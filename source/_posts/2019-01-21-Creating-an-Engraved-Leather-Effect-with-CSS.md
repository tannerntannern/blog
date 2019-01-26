---
title: Creating an Engraved Leather Effect with CSS
disqusId: '2019-01-22 00:27:51-Creating an Engraved Leather Effect with CSS'
date: 2019-01-21 18:27:51
tags:
	- css
	- tutorial
---

<link rel="stylesheet" href="/assets/extra.css">

{% asset_img "enticer.png" %}

I love the look of gold-engraved leather.  You see it all the time on portfolios, diplomas, etc., and I think the reason is because it really does have a universal appeal.  However, you don't see it so often on the web.  Perhaps it just doesn't fit with the flat style that dominates the internet.  Or maybe (most likely) it's because the effect cannot easily be pulled off in CSS.

<!-- more -->

Traditionally, if you wanted to include something like the above image on your website, you'd be forced to create it with Photoshop or other external software, then include the image in the HMTL.  If you ever want to change the text, resize or change the font, you would have to create it all again.  Additionally, you probably need to keep track of multiple sizes and layouts for different display sizes...  Not worth the hassle unless you _really_ need the effect.

So what can a poor developer do?  Luckily, with a few CSS tricks and clever texturing, there is in fact a way to mimic this lovely style yourself, without sacrificing flexibility!  And:

* It works with _any_ text (even emojis to an extent 😲)
* It work with _any_ font (including [Font Awesome](https://fontawesome.com/), or a similar font-based icon system <i class="fas fa-thumbs-up"></i>)
* Both the text and font can change on the fly without messing up the effect

Today, I will walk you through my process so you can create the effect on your own, and I'll even give away the special Blender-made textures at the end of the article.  It's a bumpy road ahead, but hopefully you find something useful along the way.

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
Our first goal is to create leather and gold textures that looks a bit like this:

![Textured gold letters reference](reference2.jpg)

We will not be creating the actual letters in this step, but notice how the gold is clearly "painted" on to the existing bumps and crevices.  We will be using [Blender](https://www.blender.org/) achieve this effect.

{% colorquote info %}
I should also note that this does not need to be gold if you want to go for a different look.  You could also do black ink on brown leather, for example, and the steps should be pretty much the same.
{% endcolorquote %}

### Step 1.1 - Get Blender
First, you'll want to be sure you have [Blender](https://www.blender.org/download/) installed AND that you have **version 2.79b or later**.  This version has new features that we'll need.

### Step 1.2 - Find your Textures
Next, you need to find a seamless leather texture along with its matching normal map (and optional specular map).  A number of sites provide high-quality textures; [Poliigon](https://www.poliigon.com/) perhaps is the best and most popular, but it's not free for all textures.  [Texturize](http://www.texturise.club/) is another site that provides all textures royalty-free, but the selection is smaller.

Luckily, it had the [kind of leather I was looking for](http://www.texturise.club/2013/12/seamless-black-leather-texture-maps.html).  Go ahead and download the diffuse and normal texture.  You can also download the specular texture if you wish.

{% colorquote info %}
If you have your own texture and need a normal map for it, there are a number of tools that can generate one for you, <a href="http://cpetry.github.io/NormalMap-Online/">some online</a> and <a href="http://www.crazybump.com/">some for desktop use</a>.  However, you'll want to know what you're doing for these and they're outside the scope of this tutorial.
{% endcolorquote %}

### Step 1.3 - Setup the Geometry
Now we can open Blender and start preparing our textures.  This article will assume basic knowledge of Blender, but I will make an effort to be very clear about what I'm doing.

After starting Blender, the first thing we want to do is select everything in the scene (<kbd>a</kbd>) and delete it (<kbd>delete</kbd> , <kbd>enter</kbd>).  Next, let's create (<kbd>shift</kbd> + <kbd>a</kbd>) a new Mesh > Plane and scale (<kbd>s</kbd>) it by 5.  If you accidentally moved the 3D cursor and the plane is off center, you can hit <kbd>n</kbd> to bring up the properties panel and reset the position to 0.  You should have something like this:

![Basic plane](blender1.png)

Next, let's add a simple directional light to the scene.  In the main view, add (<kbd>shift</kbd> + <kbd>a</kbd>) a new Lamp > Sun.  Pull up the properties panel (<kbd>n</kbd>) once more and set the position of the lamp to (0, 0, 10), just to get it out of the way, and set the rotation to (-20, -20, 0).  You don't need to worry about where the line from the light hits the plane, because the light is only directional.

### Step 1.4 - Setup the Leather Material
Now we need to create and setup a material for our plane that will utilize the leather texture we downloaded earlier.  But before we mess with any materials, we want to make sure Blender is set to "Cycles Render" rather than "Blender Render" (top of the screen).

{% colorquote info %}
If you need any help with the following steps, refer to this excellent video, which is where I got most of my information.  It's a bit long, so I would only refer to it if you run into issues.
<br><br>
<div style="text-align: center;">
{% youtube aH6XPsEmozk %}
</div>
{% endcolorquote %}

Then, collapse the left-hand panel (<kbd>t</kbd>) to make more room, then split the main view by clicking and dragging to the left from the upper right-hand corner:

![Splitting the view](blender2.gif)

Before we can apply our leather textures, we need to UV-unwrap our plane.  This simply allows our textures to be mapped to the 3D geometry, which in our case is just a simple plane.  First, in the new right-hand view, change the type to "UV/Image Editor" in the bottom left.  The view should be blank at the moment.  Then, in the left-hand 3D view, select the plane (right-click) and hit <kbd>tab</kbd> to enter edit mode.  Then hit <kbd>u</kbd> and select "Unwrap" to UV-unwrap our plane.  If all works properly, you should see the UV coordinates in the UV/Image Editor now:

![Uwrapped UVs](blender3.png)

Hit <kbd>tab</kbd> once more to exit edit mode, then change the right-hand editor to "Node Editor," and hit <kbd>n</kbd> to close the properties panel.  This view is where we will edit our leather and gold materials, so click the big "New" button to create a material.  This will give us a default white diffuse material.  To preview how this will look rendered, hover the mouse over the left-hand 3D view and press <kbd>shift</kbd> + <kbd>z</kbd> (which can also be used to flip back to the default 3D view):

![Default material render](blender4.png)

Not much to see at the moment.  Let's select the "Diffuse BSDF" shader (right-click) and delete it.  We'll need a more complex shader for our material:  Hit <kbd>shift</kbd> + <kbd>a</kbd> and add a Shader > Principled BDSF node.  Do not be intimidated by all the options!  Just start by connecting the green BDSF output to the Surface input on the Material Output node.  Once you do that, the rendered view should look the same as it did with the default diffuse shader.

![Principled BSDF defaults](blender5.png)

Now we need to add (<kbd>shift</kbd> + <kbd>a</kbd>) a Texture > Image Texture node.  Click the Open button and find the leather texture you downloaded (the one that looks like normal leather).  After that, you can connect the color output on the image texture to the input on the Principled BDSF, and you will see the leather texture in the rendered view:

![Leather image texture](blender6.png)

This does look like the leather, but you can see that it doesn't quite look right -- the light isn't interacting with the bumps of the leather.  Of course, that shouldn't be too surprising, because we simply told Blender to slap an image on a flat plane; it doesn't know what the bumps look like.  This is where normal maps come in:

Let's add (<kbd>shift</kbd> + <kbd>a</kbd>) another Texture > Image Texture node, and open the normal map (the blue/purplish image) that accompanies the leather texture.  Even though the normal map is technically an image, it's not meant to be displayed as such, so change the "Color" drop down to "Non-Color Data."  We want to pipe this texture into the purple Normal input at the bottom of the Principled BSDF shader, but we must convert the color input to normal data beforehand.  So let's create another node (<kbd>shift</kbd> + <kbd>a</kbd>) and select Vector > Normal Map.  Finally, connect the color output of the image texture to the normal map, and send the normal map output to the Normal input on the Principled BSDF shader.  After all of that, you should be able to see that the leather now has some texture:

![Leather with normal map](blender7.png)

If you have a specular map as well, you can add (<kbd>shift</kbd> + <kbd>a</kbd>) another Texture > Image Texture, open the specular map file, set it to "Non-Color Data", and connect the output into the Specular input on the Principled BSDF shader.  The effects of this are more subtle and not strictly necessary.  You can also tinker with the roughness slider to achieve similar effects.  For me, I had to turn up the roughness to make the leather not look so plastic-like.  You may also want to turn up/down the strength of the sun lamp.  It's all a matter of preference.  Once you're satisfied, you can rotate the camera (middle-mouse-button drag) to see what the plane looks like from above, as we'll see it in the HTML:

![Complete leather](blender8.png)

### Step 1.5 - Bake the Composite Leather Texture
Now that we have a model of what our leather should look like in 3D space with 3D lighting, we can "bake" the result to another texture that we can use in HTML.

{% colorquote info %}
If you need any help with the following steps, refer to this video, which covers the basics of Cycles baking.  Again, it's long, so I would only refer to it if you run into issues.
<br><br>
<div style="text-align: center;">
{% youtube sB09T--_ZvU %}
</div>
{% endcolorquote %}

Let's start by switching our left-hand view to "UV/Image Editor."  Then click the big "New" button at the bottom to create a new image for our texture to be baked onto.  Make sure the image is the same dimensions as the original textures, and uncheck alpha, because we won't need it:  

![Creating a target for the baking](blender9.png)

Next turn your attention to the far right-hand side of the screen, where there are a bunch of options pertaining to rendering.  Scroll down and find the "Sampling" section.  Within, there are two numbers for samples: one for render and the other for preview.  The "Render" one is relevant to rendering and baking, so this number concerns us.  This is effectively the quality of our render, so crank that up to 250 or so.  The higher you go, the longer it will take.

Keep scrolling to the bottom and expand the "Bake" section, which has a big "Bake" button.  This will launch the baking process, but first we need to let Blender know where to bake the texture to.  In the node editor, <kbd>shift</kbd> + <kbd>a</kbd> to create another Texture > Image Texture.  This node will not be connected to anything; it will only serve to tell Blender where to bake our texture.  On the image texture node, select the blank image we created just a moment ago (don't open a file).

Finally, with the orphan image texture node selected (it _must be selected_ or you will overwrite one of your original textures), you can hit the big "Bake" button.  This process may take a few minutes:

![Baking the leather texture](blender10.png)

After that's complete, you should see the rendered result in UV/Image Editor view.  To save the image, click "Image" at the bottom and select "Save as Image".  You should now have an image file that looks something like this:

![Baked leather texture result](leather-texture-bake.png)
