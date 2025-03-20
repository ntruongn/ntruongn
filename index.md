---
title: home
layout: index
---

<div class="terminal-content">
    <div class="terminal-command">$ ls --researchs</div>
    <ul>
    {% assign sorted_researchs = site.researchs | sort: 'date' | reverse %}
    {% for p in sorted_researchs limit: 5 %}
    {% if p.layout != "index" %}
        <li>
            <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
        </li>
    {% endif %}
    {% endfor %}
    </ul>
    <a href="/researchs" class="text-danger">[See more...]</a>
</div>

<div class="terminal-content">
    <div class="terminal-command">$ ls --tutorials</div>
    <ul>
    {% assign sorted_tutorials = site.tutorials | sort: 'date' | reverse %}
    {% for p in sorted_tutorials limit: 5 %}
    {% if p.layout != "index" %}
        <li>
            <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
        </li>
    {% endif %}
    {% endfor %}
    </ul>
    <a href="/tutorials" class="text-danger">[See more...]</a>
</div>

<div class="terminal-content">
    <div class="terminal-command">$ ls --posts</div>
    <ul>
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for p in sorted_posts limit: 5 %}
    {% if p.layout != "index" %}
        <li>
            <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
        </li>
    {% endif %}
    {% endfor %}
    </ul>
    <a href="/posts" class="text-danger">[See more...]</a>
</div>

<div class="terminal-content">
    <div class="terminal-command">$ ls --disclosures</div>
    <ul>
    {% assign sorted_disclosures = site.disclosures | sort: 'date' | reverse %}
    {% for p in sorted_disclosures limit: 5 %}
    {% if p.layout != "index" %}
        <li>
            <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
        </li>
    {% endif %}
    {% endfor %}
    </ul>
    <a href="/disclosures" class="text-danger">[See more...]</a>
</div>