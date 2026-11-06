<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Event details, contact info, dual Google Form URLs (Book Your Stall + Become a Partner), and Collaborate card copy live in `src/config/site-config.ts` (re-exported from `src/lib/site-config.ts`); edit there, never inline — single source for placeholders.
- SEO title/description/theme live in `src/config/seo-config.ts`.
- Do not redesign the approved FIKA visual experience when making engineering changes.
