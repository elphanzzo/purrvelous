# Purrvelous Website (Phase 1 prototype)

## How to open it

1. Unzip the folder anywhere on your computer.
2. Double-click `index.html`. It opens in your browser.
3. Keep the folder together. `index.html` needs the `css`, `js` and `assets` folders next to it.

Works best in Chrome or Edge. An internet connection is needed only for the fonts. Without it the site still works but uses system fonts.

## Where to edit things

| What you want to change | File |
| --- | --- |
| Any text, in English or Bangla | `js/data.js` |
| Product name, price, features, specs | `js/data.js`, the `PRODUCTS` section |
| Phone, email, delivery charges, Facebook link | `js/data.js`, the `STORE` section at the top |
| Turn a Coming Soon category live | `js/data.js`, change `status: "soon"` to `status: "live"` in `CATEGORIES` |
| Blog posts (text, meta title, meta description, FAQ) | `js/blog.js` |
| FAQ, About story, policies | `js/data.js`, the `FAQ`, `ABOUT` and `POLICIES` sections |
| Colours, fonts, spacing | `css/style.css`, the `:root` block at the top |

Open these files in any text editor. VS Code is free and makes it easier. After saving, refresh the browser.

## Photo notes

The "Photo notes" button in the top bar shows what photo to take for every image slot. It also highlights every placeholder detail in yellow (bag size, capacity, delivery times, return window, support hours). Replace those before launch.

## Blog and SEO

Each post in `js/blog.js` has its own focus keyword, meta title, meta description, FAQ and schema markup. Turn on Photo notes to see these on each article.

Health articles are marked for vet review. Have a vet read them before you publish.

Search engines cannot index this prototype's blog pages yet, because they use # links. Phase 2 gives every post a real address like purrvelous.com/blog/cat-vaccination-schedule-bangladesh so Google can find them.

## What is not real yet

Cart, wishlist, accounts, orders and reviews are saved only in the browser you are using. Nobody else sees them and clearing your browser data erases them. Forms do not send anything yet. All of this becomes real in Phase 2 when the backend and admin panel are added.

## Do not upload this folder as your live store

It works on a host, but orders would not reach you. Wait for Phase 2.
