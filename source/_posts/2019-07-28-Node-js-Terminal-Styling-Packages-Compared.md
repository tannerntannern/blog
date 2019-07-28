---
title: Node.js Terminal Styling Packages Compared
disqusId: '2019-07-28 15:42:07-"Node.js Terminal Styling Packages Compared"'
date: 2019-07-28 10:42:07
tags:
    - javascript
    - npm
---

{% asset_img "too-much-rainbow.gif" %}

There are many packages for filling your Node.js terminal programs with pretty colors.  [chalk][1] is by far the most popular, but it may be too heavy for simple use cases.  See the table below for alternatives and how they compare.

<!-- more -->


## Comparison
{% raw %}
<table>
    <thead>
        <tr>
            <th>Package</th>
            <th>Size</th>
            <th>Popularity</th>
            <th>Dependents</th>
        </tr>
    </thead>
    <tbody id="comparison"></tbody>
</table>
<script>
var packages = [
    'cli-color',
    'chalk',
    'ansi-styles',
    'colors',
    'colors-cli',
    'kleur',
];
var links = [
    function(pkg){
        return '<a href="https://www.npmjs.com/package/' + pkg + '" target="_blank">' + pkg + '</a>';
    },
    function(pkg){
        return '<a href="https://bundlephobia.com/result?p=' + pkg + '" target="_blank"><img src="https://badgen.net/bundlephobia/min/' + pkg + '"/></a>';
    },
    function(pkg){
        return '<a href="https://www.npmjs.com/package/' + pkg + '" target="_blank"><img src="https://badgen.net/npm/dm/' + pkg + '"/></a>';
    },
    function(pkg){
        return '<a href="https://www.npmjs.com/browse/depended/' + pkg + '" target="_blank"><img src="https://badgen.net/npm/dependents/' + pkg + '"/></a>';
    }
];

var tbody = document.querySelector('#comparison');
function makeRow(package) {
    var row = '<tr>';
    for(var cell of links) {
        row += '<td>' + cell(package) + '</td>'
    }
    row += '</tr>';
    tbody.innerHTML += row;
}

packages.forEach(makeRow);
</script>
{% endraw %}

[1]: https://www.npmjs.com/package.chalk
[2]: https://badgen.net/bundlephobia/min/chalk
[3]: https://bundlephobia.com/result?p=chalk
[4]: https://badgen.net/npm/dm/chalk

[5]: https://www.npmjs.com/package/ansi-styles
[6]: https://badgen.net/bundlephobia/min/ansi-styles
[7]: https://bundlephobia.com/result?p=ansi-styles
[8]: https://badgen.net/npm/dm/ansi-styles

[9]: https://www.npmjs.com/package/colors
[10]: https://badgen.net/bundlephobia/min/colors
[11]: https://bundlephobia.com/result?p=colors
[12]: https://badgen.net/npm/dm/colors

[13]: https://www.npmjs.com/package/cli-color
[14]: https://badgen.net/bundlephobia/min/cli-color
[15]: https://bundlephobia.com/result?p=cli-color
[16]: https://badgen.net/npm/dm/cli-color

[17]: https://www.npmjs.com/package/kleur
[18]: https://badgen.net/bundlephobia/min/kleur
[19]: https://bundlephobia.com/result?p=kleur
[20]: https://badgen.net/npm/dm/kleur
