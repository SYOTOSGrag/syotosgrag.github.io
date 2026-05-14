# Social Media Analytics Platform Static Website

This is the no-server version of the Social Media Analytics Platform website.

Open `index.html` by double-clicking it. No Node.js server is required.

Navigation uses regular HTML files:

- `index.html`
- `problem.html`
- `solution.html`
- `feasibility.html`
- `team.html`

The team video is loaded from `assets/videos/team-video.mp4`, so keep the `assets` folder with the HTML files when moving or uploading the site.

The original `.mov` video was converted/remuxed to `.mp4` because Chrome and many Windows browsers handle MP4 video more reliably inside an HTML `<video>` tag. The video uses `preload="metadata"`, so the browser only loads basic video information before someone presses play.
