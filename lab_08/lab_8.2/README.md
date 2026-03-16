# Lab 8.2: SSR User Dashboard

## Pages

- `/dashboard` → SSR (user-specific data, notifications, analytics)
- `/about` → SSG (static page, build time)
- `/about-ssr` → SSR (server-side rendered for comparison)

## SSR vs SSG Comparison

| Feature             | SSG                  | SSR                     |
|--------------------|--------------------|------------------------|
| First Load         | Fast (pre-rendered) | Slightly slower (server generates HTML) |
| Data Freshness     | Old until rebuild    | Always fresh           |
| Server Load        | Minimal (served by CDN) | Hits server every request |
| Use Case           | Static content       | User dashboards, personalized content |

## Notes

- Dashboard fetches user-specific data on every request using `getServerSideProps`.
- About page uses `getStaticProps` to generate at build time.
- About-SSR page shows how SSR updates data on every request.

