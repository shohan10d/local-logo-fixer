# Full-site SEO optimization

## What will change
- Add a self-referencing canonical URL and matching `og:url` to each public page: Home, Services, About, Events, and Contact.
- Strengthen page titles and descriptions where needed while preserving the current positioning and visible content.
- Add site and organization structured data using only confirmed information already present in the project.
- Add event structured data for the listed upcoming sessions so search engines can understand dates, formats, names, and locations.
- Improve image discovery and performance signals by keeping descriptive alt text, explicit dimensions, modern image files, and one prioritized image where appropriate.
- Verify every page renders one unique title, description, H1, canonical URL, and social description.

## Discovery limitation
- Keep crawler access enabled.
- Do not create a sitemap yet because the project has no published or custom domain; a preview address should not be submitted to search engines. Add it after the first publish or domain connection.

## Validation
- Check all five public pages in the local preview at desktop and mobile widths.
- Confirm the site compiles cleanly and rerun the SEO foundations review after the changes.

## Technical details
- Use each TanStack route’s existing `head()` configuration for metadata and JSON-LD.
- Keep shared defaults in the root route and page-specific information in leaf routes.
- Use relative canonical and `og:url` values so they resolve correctly after the site gets its final domain.
