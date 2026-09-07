# Website refresh proposal

Status: proposed scope, before implementation. Source: portfolio.md and the existing index.html.

## Direction

Tell the story of an engineer, engineering leader, and speaker whose work spans games, high-traffic web products, developer tools, and AI. Lead with recent Atlassian work while keeping the craft and personality of the earlier career.

Draft headline: **Engineering leader. Product builder. Speaker.**

Draft introduction: “I'm Matt Colman. I've built games, led engineering teams, and helped bring AI developer tools to life at Atlassian. I speak about engineering leadership, building AI teams, and the craft of making software.” Confirm preferred current role wording before final copy.

Primary homepage actions: Explore my work · Watch a talk. Keep contact easy to find.

## Navigation and content

Recommended navigation: **Projects · Speaking · Media · About · Contact**. Start as sections on a single page with direct anchor links. Give longer case studies or talks their own URLs when there is enough content to justify them. Keep Blog as a secondary/footer link. Remove Tutoring from primary navigation unless it remains an active offering; replace or remove the old résumé link once an up-to-date résumé is available.

### Projects

Use named products and outcomes rather than the current React / Games / Open Source categories. Suggested order:

1. **Jira Coding Agent** — featured project; engineering manager of 15 engineers. Explain the problem, team remit, personal contribution, and delivered product. Present the two surfaces together initially.
2. **Developer experiences in Jira** — deployments, security, and code. The notes say four experiences but name three; leave the fourth unspecified until identified.
3. **Domain search and listings** — leadership of the search and listings team across web and mobile web. Confirm the audience metric and time period before using “millions of DAU.”
4. **PlayUp / Draftstars** — lead engineer taking a product from zero to one. Clarify the relationship between the product names before writing the final title.
5. **Reading Eggs / Mathseeds / Reading Eggspress** — team of five engineers and five designers; Reading Eggs migration from Flash to HTML5 covering 120 lessons and the games arcade. Do not imply that migration scope applies to all three products.

Each project needs a short problem statement, your role, what shipped, and an outcome. Add a screenshot or demo where available. Keep the existing games showreel and selected open-source work in an Earlier work area. Avoid carrying forward unsupported market-first claims from the rough notes.

### Speaking, including workshops

Feature three talks spanning AI, leadership, and frontend craft, followed by the complete archive. Suggested featured talks: Building an AI team…, A Tale of the Flip Floppers…, and Whose Job is Animation?

Group the same talk across multiple conferences, with a separate event/recording entry for each appearance. Use event names as draft labels where the talk title is missing. Do not infer that Atlassian-related appearances were internal events.

Initial inventory:

- CSS variables for real life — Web Directions; supplied Conffab recording link.
- A Tale of the Flip Floppers. From Engineer to Manager and Back Again — Web Directions and React Day Berlin; GitNation confirms the Berlin appearance in 2023.
- Whose Job is Animation? — Web Directions and React Summit 2025; supplied GitNation recording link.
- Building an AI team when no one knows anything about AI — supplied Conffab page; event/date need confirmation.
- AtlasCamp Amsterdam 2026 — title, date, and recording to add.
- Team ’25 Barcelona — title to add; notes indicate a recording exists.
- Team ’25 Anaheim — title and recording to add; corrected draft spelling from “Annaheim.”
- Software collection, Hong Kong 2025 — confirm official event name, title, and recording.
- WeAreDevelopers Berlin 2025 — title and recording to add.
- Effective remote pair programming — Team ’21; recording to add if available.
- Rovo Dev workshops — workshop summary, audience, format, dates, and resources to add under Speaking.

Each talk should have a title, short summary, topic, appearances, and available recording/slides links. Add duration and a thumbnail when known. Never invent missing titles, dates, or abstracts. A talk can be published as a text entry before its video is ready.

### Media

Start with **Rovo Dev for tech leaders**, using the supplied YouTube URL. Add publisher, date, and a short description after checking the video. Keep this a compact section while it has one item; it can become a separate page as the collection grows. Keep conference talks in Speaking to avoid duplicates.

### About and contact

Replace the old frontend-only bio with the career story and approach to engineering leadership. Include **APAC ShipIt lead, 2021–2025** as a leadership and innovation highlight, with details of your contribution when available. Retain personality and hands-on engineering interests. Add a speaking/workshop enquiry link using the existing email address, subject to confirming it is still preferred. Confirm current location and social links when refreshing the footer.

## Recording placeholders

In the draft, show a 16:9 poster area labelled “Recording to add” for entries expected to receive an MP4. On the public site, show a simple “Recording not currently available” label until a playable source exists, or omit the media area entirely. Do not show a play button without a source, and do not promise “coming soon” unless a release is planned.

Track each recording separately: event, source URL or file, status (linked / file needed / ready), poster, captions, and slides. Existing external recordings can remain linked even if a local MP4 is added later. For repeated talks, attach each recording to the correct appearance.

When files arrive, choose video hosting based on their sizes and expected usage; keep large source MP4s outside the website Git repository. Add controls, captions, a poster, and conservative loading; avoid autoplay. Confirm which recordings can be published as part of choosing the actual files.

## Visual and technical approach

Use a cleaner, content-led evolution of the existing identity: navy (#2c3e50), muted blue (#617f96), generous spacing, readable type, and restrained motion. The {Matt:Colman} wordmark can stay if it still feels like you. Replace technology-labelled thumbnail modals with visible project summaries and clear links.

The repository is a static Bootstrap site with no package manifest. This content refresh does not need an application framework. Prefer semantic HTML, modern CSS, and minimal JavaScript; retire legacy Bootstrap/jQuery interactions as their replacements are implemented. Keep the content in one structured source if the archive becomes cumbersome to maintain, and render usable HTML without requiring client-side JavaScript for basic reading.

Update title/description, sharing metadata, headings, footer, HTTPS resource links, responsive media, keyboard focus, and navigation. Preserve useful existing anchors such as #portfolio as aliases if renamed. Establish the current hosting/publishing workflow before deployment.

## Delivery sequence

1. Agree positioning and navigation; clean up the content inventory and mark unknowns explicitly.
2. Build the revised homepage and all proposed sections with real portfolio content, draft copy, and recording placeholders.
3. Add project imagery, talk descriptions, verified event metadata, and supplied videos/captions.
4. Check mobile layout, keyboard navigation, links, metadata, and playback. Publish once the implementation and content are reviewed.

The site can be refreshed before all recordings are found. The main content gaps are the Atlassian talk titles, event dates, project screenshots/outcomes, fourth Jira experience, and preferred current introduction.

## Reference links

- [CSS variables for real life](https://conffab.com/presentation/css-variables-for-real-life/) — supplied in portfolio.md; page could not be retrieved during this review.
- [A Tale of the Flip Floppers](https://gitnation.com/contents/a-tale-of-the-flip-floppers-from-engineer-to-manager-and-back-again) — checked; confirms title and React Day Berlin 2023.
- [Whose Job is Animation?](https://gitnation.com/contents/whose-job-is-animation) — page retrieved.
- [Building an AI team](https://conffab.com/presentation/building-an-ai-team-when-no-one-knows-anything-about-ai/) — page retrieved.
- [Rovo Dev for tech leaders](https://www.youtube.com/watch?v=iE6hubTmjhY) — supplied in portfolio.md; video could not be retrieved during this review.
