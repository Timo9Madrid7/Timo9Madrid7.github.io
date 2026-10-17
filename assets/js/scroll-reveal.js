(() => {
  if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches || !("IntersectionObserver" in window)) {
    return;
  }

  const revealGroups = [];
  const reveal = (element, kind, delay = 0) => {
    element.dataset.scrollReveal = kind;
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  };

  const path = window.location.pathname.replace(/\/+$/, "/");
  if (path === "/post/" || path === "/education/") {
    document.querySelectorAll("article, [role='article']").forEach((article, index) => {
      reveal(article, "float", Math.min(index * 90, 540));
      revealGroups.push([article]);
    });
  }

  if (path === "/") {
    const experienceLists = [...document.querySelectorAll("#experience ol")]
      .filter((list) => list.getBoundingClientRect().width > 0);
    const educationLists = [...document.querySelectorAll("#education ol")]
      .filter((list) => list.getBoundingClientRect().width > 0);
    const experienceItems = experienceLists.flatMap((list) => [...list.children]);
    const educationItems = educationLists.flatMap((list) => [...list.children]);
    const timelineLength = Math.max(experienceItems.length, educationItems.length);
    const synchronizeColumns = window.matchMedia("(min-width: 1200px)").matches;

    for (let index = 0; index < timelineLength; index += 1) {
      const pair = [];
      if (experienceItems[index]) {
        reveal(experienceItems[index], "timeline-left", Math.min(index * 75, 375));
        pair.push(experienceItems[index]);
        if (!synchronizeColumns) {
          revealGroups.push([experienceItems[index]]);
        }
      }
      if (educationItems[index]) {
        reveal(educationItems[index], "timeline-right", Math.min(index * 75, 375));
        pair.push(educationItems[index]);
        if (!synchronizeColumns) {
          revealGroups.push([educationItems[index]]);
        }
      }
      if (synchronizeColumns && pair.length) {
        revealGroups.push(pair);
      }
    }

    const skillBars = [...document.querySelectorAll("#skills .skills-percent")];
    for (const bar of skillBars) {
      const targetWidth = bar.style.width;
      if (targetWidth) {
        bar.dataset.targetWidth = targetWidth;
        bar.style.width = "0";
      }
    }

    for (const circle of document.querySelectorAll("#languages circle[style*='stroke-dashoffset']")) {
      const targetOffset = circle.style.strokeDashoffset;
      const radius = Number(circle.getAttribute("r"));
      if (targetOffset && Number.isFinite(radius)) {
        circle.dataset.targetOffset = targetOffset;
        circle.style.strokeDashoffset = String(2 * Math.PI * radius);
      }
    }
  }

  if (!revealGroups.length && !document.querySelector("#skills .skills-percent[data-target-width], #languages circle[data-target-offset]")) {
    return;
  }

  document.documentElement.classList.add("motion-ready");

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      if (entry.target.id === "skills") {
        for (const bar of entry.target.querySelectorAll(".skills-percent[data-target-width]")) {
          bar.style.width = bar.dataset.targetWidth;
        }
      }
      if (entry.target.id === "languages") {
        for (const circle of entry.target.querySelectorAll("circle[data-target-offset]")) {
          circle.style.strokeDashoffset = circle.dataset.targetOffset;
        }
      }

      for (const group of revealGroups) {
        if (group.includes(entry.target)) {
          for (const element of group) {
            const clearReveal = (event) => {
              if (event.target !== element) {
                return;
              }
              element.removeEventListener("animationend", clearReveal);
              element.classList.remove("is-visible");
              element.removeAttribute("data-scroll-reveal");
              element.style.removeProperty("--reveal-delay");
            };
            element.addEventListener("animationend", clearReveal);
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
          break;
        }
      }

      observer.unobserve(entry.target);
    }
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.1,
  });

  for (const group of revealGroups) {
    for (const element of group) {
      observer.observe(element);
    }
  }

  for (const section of document.querySelectorAll("#skills, #languages")) {
    if (section.querySelector("[data-target-width], [data-target-offset]")) {
      observer.observe(section);
    }
  }
})();
