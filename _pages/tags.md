---
layout: content
title: Tags
permalink: /tags/
---

<div class="all-tags">
  <ul>
    {% assign tags = site.posts | all_tags %}
    {% for tag in tags %}
      {% assign slug = tag['name'] | slugify: "raw" %}
      {% assign name = tag['name'] %}
      {% assign count = tag['count'] %}
      <li>
        <a class="tag-link"
           href="{{ site.baseurl | append: "/tags/" | append: slug | append: "/" }}"
           rel="category tag">
          #{{ name }} ({{ count }})
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
