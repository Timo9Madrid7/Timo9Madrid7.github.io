---
title: Post
summary: My all posts with details
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: post
    content:
      title: Post
      page_type: post
      count: 0
      filters:
        folders:
          - post
      offset: 0
      order: desc 
    design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]
---
