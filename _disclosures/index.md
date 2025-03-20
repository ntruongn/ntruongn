---
title: Disclosures
layout: index
---

<div class="terminal-content">
    <div class="terminal-command">$ ls --disclosures</div>
    <ul>
    {% for p in site.disclosures %}
        {% if p.layout != "index" %}
            <li>
                <a href="{{ p.url | relative_url }}">./ [{{ p.date | default: site.time | date: date_format }}] - {{ p.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
    </ul>
</div>