# FanpadWebPrototype

## Dev Notes:

### 5/12/2022:

- Added new component "poll-template"
  - Poll template uses it's own css file
- Updated styles of the data collection page for new artist
- Page route from data collection form --> poll page
- Want to add dynamic content rendering using \*ngFor directive for iframes etc.
- New assets added for new artist

# TODO: Replace the placeholder SoundCloud links in the poll iframes

### Previous:

- Added Router link from data collection page to content page

  - The route occurs when clicking the "get access" button (contained in input-form component)
  - There is no auth guard currently in place, so hypothetically the content page can be accessed by anyone (Needs to be added)

- The content page shares the same CSS file as the data collection page to avoid duplicating shared lines of css
- <b>route-animations.ts</b> includes all animations used
- <b>index.html</b> meta tag slightly modified to try and prevent auto zooming when editing form on mobile (Not confirmed to work)
- Important note about <b>content-box component:</b>
  - The initial intention was to dynamically create these boxes using this component, however, I ran into some difficulty while trying to include embedded links as variables, so for the time being all of the uppbeat content is written statically in the content-box component
