# The Law Firm of Tejan-Jalloh & Fode Amb Dabor — Website Source Package

## Included
- 10 responsive HTML pages
- Responsive navigation and dropdown menus
- Detailed homepage matching the approved blue/navy/silver UI direction
- Local image assets derived from the approved UI reference so the visual style remains consistent
- Practice area, attorney, resources, testimonials, contact, privacy, terms, and disclaimer pages
- FAQ accordion, testimonial slider, newsletter and consultation form interactions
- Mobile / tablet / desktop responsive CSS
- SEO title and meta description tags
- No framework or build step required

## Run locally
Open `index.html` directly in a browser, or run a local web server from this folder:

```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.

## Deploy
Upload the contents of this folder to your website document root (`public_html`, `www`, or equivalent). `index.html` is the homepage.

## Important before going live
The UI supplied for this project contains sample business information. Replace/verify before launch:
- phone number
- email address
- office address
- office hours
- attorney biographies and credentials
- case/result statistics and monetary recoveries
- client testimonials
- practice-area claims
- social profile links
- legal/privacy copy

The website forms are currently front-end demo forms: they validate and show a success message, but do not email or store submissions. Connect them to your preferred backend/API before production.

## File structure
```
index.html
about.html
practice-areas.html
attorneys.html
resources.html
testimonials.html
contact.html
privacy.html
terms.html
disclaimer.html
assets/
  css/styles.css
  js/main.js
  images/
reference/homepage-ui-reference.png
```
