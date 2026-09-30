# Make client logos work locally

## What will change
- Import the uploaded website source into this project without its Git history or generated files.
- Download each logo from the original project's asset storage into a normal local `public/client-logos` folder.
- Update the “Companies we have worked with” section to use local `/client-logos/...` paths instead of Lovable-only asset pointers.
- Remove the obsolete logo pointer files so the source is straightforward to edit with OpenCode or another local editor.

## Verification
- Start the site through the existing local preview.
- Confirm all 22 company logos load successfully and visually inspect the section at desktop and mobile widths.
- Check the latest build and browser error logs.

## Technical details
- Preserve the existing page design and logo sizing.
- Keep the uploaded project’s current TanStack/Vite structure.
- Exclude `.git`, dependencies, and generated build output while importing.
