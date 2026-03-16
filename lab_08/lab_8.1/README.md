# Next.js Blog — SSR vs SSG

This project demonstrates different rendering strategies in Next.js.

## SSG (Static Site Generation)

Used on:

* Home page
* Individual blog post pages
* About page

Pages are generated at build time for maximum performance.

## ISR (Incremental Static Regeneration)

Home page and post pages use:

```
revalidate: 60
```

This allows the page to be updated every 60 seconds without full rebuild.

## SSR (Server-Side Rendering)

SSR is used when data must be fresh on every request (e.g. user profile page).

It is implemented using:

```
getServerSideProps
```

## Conclusion

SSG provides best performance and scalability.
SSR provides always fresh data but is slower.
ISR gives a balance between performance and freshness.
