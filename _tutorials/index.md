---
title: Tutorials
layout: index
---

<div class="terminal-content">
    <div class="terminal-command">$ ls --tutorials</div>
    <ul>
    {% for p in site.tutorials %}
        {% if p.layout != "index" %}
            <li>
                <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
    </ul>
</div>