(function () {
  const h = React.createElement;
  const { useEffect, useState } = React;

  const routes = [
    { path: "/", label: "Home" },
    { path: "/problem", label: "Problem" },
    { path: "/solution", label: "Solution" },
    { path: "/feasibility", label: "Feasibility" },
    { path: "/team", label: "Team" }
  ];

  const featurePreview = [
    {
      icon: "chart",
      title: "Engagement analytics",
      body:
        "Track likes, comments, shares, reach, attention, and trend movement so creators can see which content performs best and why."
    },
    {
      icon: "clock",
      title: "Posting recommendations",
      body:
        "Use historical engagement patterns to recommend posting windows that align with audience activity and visibility."
    },
    {
      icon: "panel",
      title: "Content performance panel",
      body:
        "Highlight top-performing posts, compare formats, and turn raw numbers into practical next steps for future content."
    }
  ];

  const problemPoints = [
    {
      title: "Creators depend on trial and judgment",
      body:
        "Many creators still post based on instinct, broad trends, or imitation. That approach can work briefly, but it does not explain whether a specific audience responds to timing, format, topic, caption structure, or visual style."
    },
    {
      title: "Performance changes from post to post",
      body:
        "When content decisions are not connected to audience data, quality becomes unbalanced. One post may receive strong attention while the next receives little interaction, leaving creators without a clear reason for the difference."
    },
    {
      title: "Platforms lose activity when creators lose clarity",
      body:
        "Inconsistent creator success can reduce platform activity, user satisfaction, and long-term retention. Better creator guidance strengthens both individual accounts and the larger social media ecosystem."
    }
  ];

  const workflowSteps = [
    "Connect social media accounts securely.",
    "Collect post performance data across likes, comments, shares, reach, and audience attention.",
    "Identify patterns in timing, content format, engagement changes, and audience behavior.",
    "Generate personalized recommendations that are easy to understand and immediately usable.",
    "Update insights continuously so creators can adjust strategy as their audience changes."
  ];

  const timeline = [
    ["Research", "Define user needs, benchmark analytics tools, and map the performance data required for useful recommendations."],
    ["System design", "Plan account connection, data collection, dashboard structure, and recommendation logic."],
    ["Development", "Build the core platform, analytics views, performance panel, and posting recommendation engine."],
    ["Testing", "Validate data accuracy, usability, security expectations, and stability before launch."],
    ["Final execution", "Prepare deployment, refine interface language, and release the platform for user feedback."]
  ];

  const budget = [
    ["Development and analytics team", "$148,000"],
    ["Software infrastructure", "$31,000"],
    ["Analytics tools and testing", "$22,000"],
    ["Launch readiness and support", "$10,000"]
  ];

  const teamMembers = [
    ["JA", "Jennifer Abreu", "Presentation Video", "Recorded the presentation video for the project."],
    ["YS", "Yaimin Sosa", "Script and Submission", "Created the script and handled submitting the completed work."],
    ["SU", "Sharp Uddin", "PowerPoint Presentation", "Created the PowerPoint presentation for the project."],
    ["KZ", "Kevin Zhuo", "Web Designer", "Designed and built the website for the project."]
  ];

  function usePath() {
    const getHashPath = () => {
      const hashPath = window.location.hash.replace(/^#/, "");
      return hashPath || "/";
    };
    const [path, setPath] = useState(getHashPath());

    useEffect(() => {
      const onHashChange = () => setPath(getHashPath());
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return [path, setPath];
  }

  function goTo(path, setPath) {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPath(path);
  }

  function Icon({ name }) {
    const paths = {
      chart: ["M4 19V5", "M4 19h16", "M8 16v-5", "M12 16V8", "M16 16v-8"],
      clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 7v5l3 2"],
      panel: ["M4 5h16v14H4Z", "M8 9h8", "M8 13h5", "M15 13h1", "M8 16h8"],
      target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z", "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"],
      shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", "M9 12l2 2 4-5"],
      spark: ["M12 2l1.4 5.2L18 9l-4.6 1.8L12 16l-1.4-5.2L6 9l4.6-1.8Z", "M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"],
      users: ["M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 19c0-1.7-1.1-3.2-2.7-3.8", "M17 3.4a4 4 0 0 1 0 7.2"],
      video: ["M4 7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z", "M17 10l4-2v8l-4-2"]
    };

    return h(
      "svg",
      {
        className: "icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      },
      (paths[name] || paths.spark).map((d) => h("path", { key: d, d }))
    );
  }

  function LinkButton({ children, path, setPath, variant }) {
    return h(
      "a",
      {
        href: `#${path}`,
        className: `button ${variant || "primary"}`,
        onClick: (event) => {
          event.preventDefault();
          goTo(path, setPath);
        }
      },
      children
    );
  }

  function Layout({ page, setPath, children }) {
    return h(
      React.Fragment,
      null,
      h(
        "header",
        { className: "site-header" },
        h(
          "a",
          {
            href: "#/",
            className: "brand",
            onClick: (event) => {
              event.preventDefault();
              goTo("/", setPath);
            }
          },
          h("span", { className: "brand-mark" }, "SM"),
          h("span", null, "Social Media Analytics Platform")
        ),
        h(
          "nav",
          { className: "nav-links", "aria-label": "Main navigation" },
          routes.map((route) =>
            h(
              "a",
              {
                key: route.path,
                href: `#${route.path}`,
                className: page === route.path ? "active" : "",
                onClick: (event) => {
                  event.preventDefault();
                  goTo(route.path, setPath);
                }
              },
              route.label
            )
          )
        )
      ),
      h("main", null, children),
      h(
        "footer",
        { className: "site-footer" },
        h("p", null, "Social Media Analytics Platform transforms creator performance data into clearer strategy, stronger content, and healthier platform engagement."),
        h(
          "div",
          { className: "footer-links" },
          routes.map((route) =>
            h(
              "a",
              {
                key: route.path,
              href: `#${route.path}`,
                onClick: (event) => {
                  event.preventDefault();
                  goTo(route.path, setPath);
                }
              },
              route.label
            )
          )
        )
      )
    );
  }

  function Eyebrow({ children }) {
    return h("p", { className: "eyebrow" }, children);
  }

  function SectionHeader({ eyebrow, title, body }) {
    return h(
      "div",
      { className: "section-header" },
      eyebrow ? h(Eyebrow, null, eyebrow) : null,
      h("h2", null, title),
      body ? h("p", null, body) : null
    );
  }

  function FeatureCard({ item }) {
    return h(
      "article",
      { className: "feature-card" },
      h("div", { className: "feature-icon" }, h(Icon, { name: item.icon })),
      h("h3", null, item.title),
      h("p", null, item.body)
    );
  }

  function StatStrip() {
    return h(
      "div",
      { className: "stat-strip" },
      h("div", null, h("strong", null, "6 months"), h("span", null, "structured build timeline")),
      h("div", null, h("strong", null, "$211K"), h("span", null, "estimated project cost")),
      h("div", null, h("strong", null, "3 core tools"), h("span", null, "analytics, recommendations, performance panel"))
    );
  }

  function Home({ setPath }) {
    return h(
      React.Fragment,
      null,
      h(
        "section",
        { className: "home-hero" },
        h(
          "div",
          { className: "hero-shade" },
          h(
            "div",
            { className: "hero-copy" },
            h(Eyebrow, null, "Data-driven insights for stronger content"),
            h("h1", null, "Social Media Analytics Platform turns creator guesswork into measurable growth."),
            h(
              "p",
              null,
              "Social media moves quickly, and millions of posts compete for attention every day. Social Media Analytics Platform helps creators and platforms understand what audiences respond to, why engagement changes, and how content can improve over time."
            ),
            h(
              "div",
              { className: "hero-actions" },
              h(LinkButton, { path: "/solution", setPath }, "Explore the solution"),
              h(LinkButton, { path: "/problem", setPath, variant: "secondary" }, "Understand the problem")
            )
          )
        )
      ),
      h(
        "section",
        { className: "band intro-band" },
        h("div", { className: "page-grid two" },
          h(
            "div",
            null,
            h(SectionHeader, {
              eyebrow: "Introduction",
              title: "A platform built for the current social media environment",
              body:
                "The proposal begins with a simple reality: creators are not struggling because they lack effort. They struggle because they often lack awareness of what benefits their audience. Social Media Analytics Platform addresses that gap by translating engagement behavior into clearer content decisions."
            }),
            h(
              "p",
              { className: "rich-copy" },
              "Over the past decade, visual-based content, mobile viewing, short videos, and interactive media have changed how people pay attention online. Creators can recognize trends, but without deeper insight into timing, audience behavior, and content structure, their results remain inconsistent."
            )
          ),
          h(StatStrip, null)
        )
      ),
      h(
        "section",
        { className: "band" },
        h(SectionHeader, {
          eyebrow: "Key features",
          title: "Important capabilities, previewed simply",
          body:
            "The full solution is explained in detail later, but the platform is centered on three practical tools that help users understand performance and take action."
        }),
        h("div", { className: "card-grid" }, featurePreview.map((item) => h(FeatureCard, { key: item.title, item })))
      ),
      h(
        "section",
        { className: "cta-band" },
        h("div", null,
          h("h2", null, "A stronger feedback loop for creators and platforms"),
          h("p", null, "When creators understand their audience, content quality improves. When content improves, platforms benefit from stronger engagement, retention, and long-term value."),
          h(LinkButton, { path: "/feasibility", setPath, variant: "light" }, "View feasibility")
        )
      )
    );
  }

  function Problem({ setPath }) {
    return h(
      React.Fragment,
      null,
      h(
        "section",
        { className: "page-hero compact problem-hero" },
        h(Eyebrow, null, "The challenge"),
        h("h1", null, "Creators are producing content without enough useful feedback."),
        h(
          "p",
          null,
          "The problem is not a lack of content. The problem is that creators are expected to make strategic decisions from scattered numbers, changing trends, and incomplete audience insight."
        )
      ),
      h(
        "section",
        { className: "band" },
        h("div", { className: "problem-layout" },
          h(
            "div",
            { className: "problem-copy" },
            h(SectionHeader, {
              eyebrow: "Problem statement",
              title: "Inconsistent engagement makes content strategy unstable",
              body:
                "The proposal identifies inconsistent content among social media creators as the central issue. Without data-driven decision making, creators rely on guesswork or broad trends that may not apply to their specific audience."
            }),
            h(
              "p",
              { className: "rich-copy" },
              "This creates a cycle: creators post, wait for results, compare surface-level numbers, and then try again without knowing what actually caused the outcome. The process can be discouraging for creators and inefficient for platforms that depend on active, satisfied users."
            )
          ),
          h(
            "div",
            { className: "signal-panel" },
            h("img", { src: "assets/problem-signals.svg", alt: "Abstract engagement signal chart showing inconsistent content performance" })
          )
        )
      ),
      h(
        "section",
        { className: "band muted" },
        h(SectionHeader, {
          eyebrow: "Impact",
          title: "The issue affects more than one post",
          body:
            "When creator performance feels random, the consequences spread across content quality, audience trust, and platform activity."
        }),
        h(
          "div",
          { className: "stacked-list" },
          problemPoints.map((point, index) =>
            h(
              "article",
              { className: "stacked-item", key: point.title },
              h("span", null, `0${index + 1}`),
              h("div", null, h("h3", null, point.title), h("p", null, point.body))
            )
          )
        )
      ),
      h(
        "section",
        { className: "band" },
        h("div", { className: "page-grid two" },
          h(
            "div",
            null,
            h(Eyebrow, null, "Need"),
            h("h2", null, "Creators need interpretation, not just numbers"),
            h("p", { className: "rich-copy" }, "Standard metrics can tell users what happened, but they do not always explain what to do next. A useful platform must connect engagement data to recommendations that creators can apply to future posts.")
          ),
          h(
            "div",
            { className: "quote-panel" },
            h("p", null, "A creator should be able to answer: What content worked? When was my audience most active? Which format should I repeat? What should I change before the next post?")
          )
        )
      )
    );
  }

  function Solution({ setPath }) {
    return h(
      React.Fragment,
      null,
      h(
        "section",
        { className: "page-hero compact solution-hero" },
        h(Eyebrow, null, "Proposed solution"),
        h("h1", null, "An integrated analytics platform that converts performance data into action."),
        h(
          "p",
          null,
          "Social Media Analytics Platform connects to social media accounts, studies post performance over time, recognizes useful patterns, and generates recommendations creators can understand without needing to be data analysts."
        )
      ),
      h(
        "section",
        { className: "band feature-board-section" },
        h(SectionHeader, {
          eyebrow: "Feature overview",
          title: "A clearer version of the platform feature board",
          body:
            "The screenshot concept has been rebuilt as a sharp product graphic so the platform's dashboard, workflow, and benefits are readable on the website."
        }),
        h(
          "figure",
          { className: "feature-board-frame" },
          h("img", { src: "assets/feature-board-renamed.svg", alt: "Clean feature board for the Social Media Analytics Platform showing dashboard metrics, key features, workflow, and benefits" }),
          h("figcaption", null, "Feature board recreated from the screenshot concept with proposal-based wording.")
        )
      ),
      h(
        "section",
        { className: "band muted" },
        h(SectionHeader, {
          eyebrow: "How it works",
          title: "A straightforward process from connection to recommendation",
          body:
            "The platform is designed to make analytics feel practical. Users connect accounts, the system studies performance, and recommendations update as audience behavior changes."
        }),
        h(
          "ol",
          { className: "workflow-list" },
          workflowSteps.map((step, index) =>
            h("li", { key: step }, h("span", null, index + 1), h("p", null, step))
          )
        )
      ),
      h(
        "section",
        { className: "band" },
        h(SectionHeader, {
          eyebrow: "Key features explained",
          title: "Three tools that make content decisions more reliable",
          body:
            "Each feature is written around a practical user outcome: understand performance, choose better timing, and repeat what works."
        }),
        h(
          "div",
          { className: "detail-grid" },
          h(
            "article",
            null,
            h(Icon, { name: "chart" }),
            h("h3", null, "Engagement analytics"),
            h("p", null, "Tracks comments, shares, likes, reach, attention, and performance trends. Instead of only displaying numbers, it explains which content produced the strongest response and where engagement changed.")
          ),
          h(
            "article",
            null,
            h(Icon, { name: "clock" }),
            h("h3", null, "Posting recommendations"),
            h("p", null, "Uses past data and audience activity to suggest optimal posting windows. The goal is to increase visibility by helping creators publish when their audience is most likely to respond.")
          ),
          h(
            "article",
            null,
            h(Icon, { name: "panel" }),
            h("h3", null, "Content performance panel"),
            h("p", null, "Highlights top-performing posts and compares content formats. This helps creators stay aware of what is popular with their target audience and plan stronger future content.")
          )
        )
      ),
      h(
        "section",
        { className: "cta-band teal" },
        h("div", null,
          h("h2", null, "Benefits for both sides of the platform"),
          h("p", null, "Creators gain clearer audience understanding, less uncertainty, and stronger content performance. Social media companies gain healthier engagement, more active creators, and stronger competitive positioning."),
          h(LinkButton, { path: "/feasibility", setPath, variant: "light" }, "See the build plan")
        )
      )
    );
  }

  function Feasibility() {
    return h(
      React.Fragment,
      null,
      h(
        "section",
        { className: "page-hero compact feasibility-hero" },
        h(Eyebrow, null, "Feasibility, cost, and qualifications"),
        h("h1", null, "A structured six-month project with a clear cost estimate."),
        h(
          "p",
          null,
          "The proposal estimates that Social Media Analytics Platform can be developed in approximately six months through research, system design, development, testing, and final execution."
        )
      ),
      h(
        "section",
        { className: "band timeline-section" },
        h("div", { className: "page-grid two" },
          h(
            "div",
            null,
            h(SectionHeader, {
              eyebrow: "Timeline",
              title: "Development phases reduce launch risk",
              body:
                "A staged timeline gives the team room to research user needs, design a stable system, test analytics accuracy, and adjust the product before launch."
            }),
            h(
              "div",
              { className: "timeline-list" },
              timeline.map(([title, body]) =>
                h("article", { key: title }, h("h3", null, title), h("p", null, body))
              )
            )
          ),
          h("img", { className: "timeline-image", src: "assets/timeline-cost-renamed.svg", alt: "Six month feasibility and cost visual for Social Media Analytics Platform" })
        )
      ),
      h(
        "section",
        { className: "band muted" },
        h(SectionHeader, {
          eyebrow: "Cost",
          title: "Estimated project cost: $211,000",
          body:
            "The largest portion of the budget supports skilled developers and data analysts. Additional funding supports infrastructure, analytics tools, testing, and launch readiness."
        }),
        h(
          "div",
          { className: "budget-grid" },
          budget.map(([label, amount]) =>
            h("article", { key: label }, h("span", null, label), h("strong", null, amount))
          )
        )
      ),
      h(
        "section",
        { className: "band" },
        h("div", { className: "page-grid two" },
          h(
            "div",
            null,
            h(Eyebrow, null, "Qualifications"),
            h("h2", null, "Built by a team prepared to connect analytics with usability"),
            h(
              "p",
              { className: "rich-copy" },
              "The proposal highlights experience in data analytics, social media analysis, and research projects, with practical work in Python, SQL, and Excel. Those skills support the platform's main purpose: identifying patterns and explaining them in a simple, practical way."
            )
          ),
          h(
            "div",
            { className: "qualification-panel" },
            h("div", null, h(Icon, { name: "target" }), h("span", null, "Data analytics and pattern recognition")),
            h("div", null, h(Icon, { name: "users" }), h("span", null, "Social media audience research")),
            h("div", null, h(Icon, { name: "shield" }), h("span", null, "User-friendly reporting and stable testing"))
          )
        )
      ),
      h(
        "section",
        { className: "cta-band final" },
        h("div", null,
          h("h2", null, "Social Media Analytics Platform is practical, useful, and ready to pitch."),
          h("p", null, "The platform addresses a real gap in the social media industry by helping creators understand their audience, improve content quality, and create value for the platforms they use.")
        )
      )
    );
  }

  function Team() {
    return h(
      React.Fragment,
      null,
      h(
        "section",
        { className: "page-hero compact team-hero" },
        h(
          "div",
          { className: "team-hero-inner" },
          h(
            "div",
            { className: "team-hero-copy" },
            h(Eyebrow, null, "Who we are"),
            h("h1", null, "Meet the project team."),
            h(
              "p",
              null,
              "Each person had a specific role in developing and presenting the Social Media Analytics Platform project, from writing and submission to presentation materials, video, and web design."
            )
          ),
          h(
            "figure",
            { className: "team-hero-media", "aria-label": "Students collaborating on a social media analytics project" },
            h("img", {
              src: "assets/team-analytics-team-photo.jpg",
              alt: "Team members collaborating around social media analytics dashboards"
            })
          )
        )
      ),
      h(
        "section",
        { className: "band team-section" },
        h(SectionHeader, {
          eyebrow: "Team members",
          title: "A collaborative group with clear project responsibilities",
          body: "These roles describe what each team member handled for the class project and presentation."
        }),
        h(
          "div",
          { className: "team-grid" },
          teamMembers.map(([initials, name, role, body]) =>
            h(
              "article",
              { className: "team-card", key: name },
              h("div", { className: "team-avatar", "aria-hidden": "true" }, initials),
              h("div", null, h("h3", null, name), h("span", null, role), h("p", null, body))
            )
          )
        )
      ),
      h(
        "section",
        { className: "band muted team-video-section" },
        h(SectionHeader, {
          eyebrow: "Team video",
          title: "Our roles and project work",
          body: "The video below introduces the team members and explains how our work came together for the final project."
        }),
        h(
          "div",
          { className: "video-frame" },
          h(
            "video",
            {
              controls: true,
              playsInline: true,
              preload: "none",
              poster: "assets/team-video-poster-renamed.svg"
            },
            h("source", { src: "assets/videos/team-video.mov", type: "video/quicktime" }),
            "Your browser does not support this video format."
          )
        )
      )
    );
  }

  function App() {
    const [path, setPath] = usePath();
    const normalizedPath = routes.some((route) => route.path === path) ? path : "/";
    let page = h(Home, { setPath });

    if (normalizedPath === "/problem") page = h(Problem, { setPath });
    if (normalizedPath === "/solution") page = h(Solution, { setPath });
    if (normalizedPath === "/feasibility") page = h(Feasibility, { setPath });
    if (normalizedPath === "/team") page = h(Team, { setPath });

    return h(Layout, { page: normalizedPath, setPath }, page);
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
