# SBA-10: Advanced React - Recipe Discovery App
**Author:** Jameka Haggins 

For this project, you will build a client-side “Recipe Discovery” application. This project will serve as a comprehensive demonstration of your mastery of advanced React concepts. The application will allow users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of “favorite” recipes.
You will use a free, public API for recipe data and implement a varietys of hooks, state management patterns, and routing solutions to create a feature-rich, single-page application (SPA).
---
## Reflection

The most challenging part of this project was managing the asynchronous nature of React. As seen in my commit history, I initially struggled with race conditions specifically when trying to format and split recipe instructions before the API data had fully arrived. I learned the hard way that if you try to manipulate data (like using `.split()` or `.map()`) before checking if the data is actually there, the app will crash.
Fixing this by restructuring the logic to sit behind loading" and "error guards was a huge turning point. It taught me that in React, the order of your if statements is just as important as the logic itself.
###Design Decisions & Lessons Learned

1. Centralizing the Switchboard: Early on, I realized that calling routes in multiple places was making the app unpredictable. I decided to consolidate all routing logic into a single switchboard in `App.jsx`. This made the navigation flow much clearer and easier to debug when links weren't pointing to the right places.
2. Custom Hook Efficiency: I chose to make the `useFetch` hook highly generic. This allowed me to reuse the same fetching logic for categories, specific recipes, and search results. While I ran into a few typos, like using the search parameter s= instead of the category parameter c=, having a single hook made it much easier to find and fix those small errors.
3. Data Persistence: I decided to use a `useLocalStorage` hook within my `FavoritesContext`. This was a key decision to ensure a better user experience; it felt wrong to have a favorites list that vanished every time the page refreshed. Learning that `localStorage` should be handled synchronously rather than with async/await was a big AH HA moment for me.
4. UI Scannability: For the Recipe Detail page, I chose to split the raw instruction string into an ordered list and dynamically collect ingredients from the API's separate fields. I felt that as a cooking app, readability was the most important feature. If the text stayed as a Wall of Text the app wouldn't be very useful in a real kitchen.
