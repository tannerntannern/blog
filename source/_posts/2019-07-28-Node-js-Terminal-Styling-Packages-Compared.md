---
title: Node.js Terminal Styling Packages Compared
disqusId: '2019-07-28 15:42:07-"Node.js Terminal Styling Packages Compared"'
date: 2019-07-28 10:42:07
tags:
    - javascript
    - npm
---

{% asset_img "too-much-rainbow.gif" %}

There are many packages for filling your Node.js terminal programs with pretty colors.  [chalk](https://www.npmjs.com/package/chalk) is by far the most popular, but it may be too heavy for simple use cases.  You may find some of these alternatives to be useful:

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
    'kleur',
    'colors-cli',
    'colors',
    'ansi-styles',
    'chalk',
    'cli-color',
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
