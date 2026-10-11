---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-06-12
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
        # text: Download Resume
        # url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: bakground.jpg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: resume-experience
    id: experience
    content:
      username: admin
    design:
      css_class: resume-col-left resume-only-experience
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-experience
    id: education
    content:
      username: admin
    design:
      css_class: resume-col-right resume-only-education
      # Hugo date format
      date_format: 'January 2006'
      # Keep source order as Experience then Education; CSS will hide Experience in this block.
      is_education_first: false
  - block: resume-skills
    id: skills
    content:
      title: Skills
      username: admin
    design:
      css_class: resume-col-full
      show_skill_percentage: true
  - block: resume-languages
    id: languages
    content:
      title: Languages
      username: admin
    design:
      css_class: resume-col-full
---
