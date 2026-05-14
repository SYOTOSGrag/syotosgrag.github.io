(function () {
  const OLD_NAME = "Social Analytics";
  const NEW_NAME = "Social Media Analytics Platform";

  function replaceText(value) {
    return value && value.includes(OLD_NAME) ? value.replaceAll(OLD_NAME, NEW_NAME) : value;
  }

  function updateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      node.nodeValue = replaceText(node.nodeValue);
      node = walker.nextNode();
    }
  }

  function updateAttributes() {
    document.title = replaceText(document.title);

    document.querySelectorAll("[alt], [title], [aria-label]").forEach((element) => {
      ["alt", "title", "aria-label"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        const nextValue = replaceText(value);
        if (nextValue !== value) element.setAttribute(attribute, nextValue);
      });
    });

    document.querySelectorAll(".brand-mark").forEach((mark) => {
      mark.textContent = "SM";
    });

    document.querySelectorAll("img").forEach((image) => {
      const source = image.getAttribute("src");
      if (source === "assets/feature-board.svg") image.setAttribute("src", "assets/feature-board-renamed.svg");
      if (source === "assets/timeline-cost.svg") image.setAttribute("src", "assets/timeline-cost-renamed.svg");
    });

    document.querySelectorAll("video").forEach((video) => {
      if (video.getAttribute("poster") === "assets/team-video-poster.svg") {
        video.setAttribute("poster", "assets/team-video-poster-renamed.svg");
      }
    });
  }

  function applyBranding() {
    updateTextNodes(document.body);
    updateAttributes();
  }

  applyBranding();
  window.addEventListener("load", applyBranding);
  window.addEventListener("hashchange", () => setTimeout(applyBranding, 0));

  const observer = new MutationObserver(applyBranding);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
