# Guardian Tabs

## Instructions

`npm install && npm run serve`

## Notes

There are many things I wanted to do with this but didn't really have the time to do. Some of the caveats I will add:

- Redux not integrated as this would be part of a larger app (and would have taken a fair bit longer).
- Not a very adaptive solution, responds with percentages but very small device widths probably needs some work. The icons I wanted to use became just the first letters of the title.
- No tests!
- Things like i18n and a11n have been broadly left out.
- I'm assuming the 'no server required' thing was for the fetching of the API data as this does require a server in order to do async requests to another domain that's not from a file:// url.
- Didn't know what to include for the static version (pre-rendered), `preact-cli` will serve a static version but it's not exciting without any content!

I wanted to code something from the ground up as I can't imagine there's much room at the Guardian for lots and lots of third party libraries. Perhaps I could have added more fancy CSS in like loaders etc. but I wanted to focus on speed and low file size (should be below 20kb in total).
