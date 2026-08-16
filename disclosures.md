---
layout: page
title: Security Advisories & Disclosures
permalink: /disclosures/
---

<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
    <div>
        <h1 class="h2 text-light fw-bold mb-1">
            <i class="bi bi-shield-exclamation text-warning"></i> Security Advisories &amp; Disclosures
        </h1>
        <p class="text-secondary mb-0">Responsible vulnerability disclosures, threat advisories, and security analyses.</p>
    </div>
    <span class="cyber-badge badge-amber">Vulnerability Archive</span>
</div>

<div class="d-flex flex-column gap-3">
    {% assign sorted_disclosures = site.disclosures | sort: 'date' | reverse %}
    {% for p in sorted_disclosures %}
    {% if p.title and p.title != "" %}
    <div class="paper-item-card">
        <div class="paper-meta">
            <span class="cyber-badge badge-amber">{{ p.vuln_type | default: "Advisory" }}</span>
            {% if p.severity %}<span class="badge bg-danger">{{ p.severity }}</span>{% endif %}
            <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> {{ p.date | default: site.time | date: site.ntruongn.date_format }}</span>
        </div>
        <h3 class="paper-title">
            <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
        </h3>
        {% if p.cve %}
        <p class="small font-monospace text-warning mb-1">CVE: {{ p.cve }}</p>
        {% endif %}
        <div class="d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 font-monospace small">
            <span class="text-muted">Status: Coordinated Disclosure</span>
            <a href="{{ p.url | relative_url }}" class="cyber-btn cyber-btn-outline btn-sm">View Advisory &rarr;</a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
