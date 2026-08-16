---
layout: page
title: Research & Publications
permalink: /researchs/
---

<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
    <div>
        <h1 class="h2 text-light fw-bold mb-1">
            <i class="bi bi-cpu-fill text-info"></i> Research Archives &amp; Publications
        </h1>
        <p class="text-secondary mb-0">Original papers, technical notes, and research works in AI Security &amp; Systems Defense.</p>
    </div>
    <a href="/publications/" class="cyber-btn cyber-btn-primary btn-sm">
        <i class="bi bi-journal-bookmark-fill"></i> Publications &amp; Preprints
    </a>
</div>

<div class="d-flex flex-column gap-3">
    {% assign sorted_researchs = site.researchs | sort: 'date' | reverse %}
    {% for p in sorted_researchs %}
    {% if p.title and p.title != "" %}
    <div class="paper-item-card">
        <div class="paper-meta">
            <span class="cyber-badge badge-cyan">{{ p.category | default: "Research" }}</span>
            <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> {{ p.date | default: site.time | date: site.ntruongn.date_format }}</span>
        </div>
        <h3 class="paper-title">
            <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
        </h3>
        {% if p.description %}
        <p class="paper-abstract">{{ p.description }}</p>
        {% endif %}
        <div class="d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 font-monospace small">
            <span class="text-muted">Author: {{ site.author.name }}</span>
            <a href="{{ p.url | relative_url }}" class="cyber-btn cyber-btn-outline btn-sm">Read Full Paper &rarr;</a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
