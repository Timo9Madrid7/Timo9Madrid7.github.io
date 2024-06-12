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
      #   text: Download CV
      #   url: uploads/resume.pdf
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
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-skills
    content:
      title: Skills
      username: admin
    design:
      show_skill_percentage: true
  - block: resume-languages
    content:
      title: Languages
      username: admin
  - block: markdown
    content:
      title: '🔎 More About Me'
      subtitle: ''
      text: |-
        📢 I started playing football ⚽️ when I was in middle school, and this sport has significantly transformed me. The most noticeable change is my appearance. Before discovering football, I was slightly overweight, but I lost a lot of weight after it became one of my hobbies. I also love watching football matches, especially those of [Real Madrid](https://www.realmadrid.com).

        I also enjoy watching animations 📺, particularly Japanese ones. The first anime I watched was [Guilty Crown](https://guilty-crown.jp/), and since then, it has become a part of my life. Besides animation, I am passionate about movies, with suspense films being my favorite genre.

        Traveling is another activity I find enjoyable. While the beautiful scenery is captivating, what I cherish the most are the people who accompany me on these journeys. I have visited several countries, including France, Spain, and Switzerland (💕).

        When I'm at home, I like to play video and PC games 🎮, especially CS. I've played for over 1,600 hours and have achieved the rank of Master Guardian Elite. I also enjoy a variety of other games. You can check out 👁️ my [Steam profile](https://steamcommunity.com/id/Timo9Madrid7/). If you want to play with me, feel free to add me to your friend list.
    design:
      columns: '1'
---
