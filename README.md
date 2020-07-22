# react-search-news
React/Redux Application for getting development news (via Hacker News API)

The site is deployed via [Github pages](https://kenzrad.github.io/react-search-news/)

## Technologies
- React (create-react-app)
- Redux (redux-toolkit, redux-persist, redux-logger)
- Axios for Hacker News API service
- Bootstrap (simple styling)
- [HN search API] (https://hn.algolia.com/api)

## What it does
- Allows users to search via the Hacker New Aloglia API (https://hn.algolia.com/api)
- Display the number of search results, search results, and a search history (last 20 items)
- If a search yields no results, suggested news is shown (top news articles)
- Duplicates search are not displayed in the search history
- State is stored so that a user can refresh the browser and still see their search history and (if relevant), results
