# Local SEO Operations

This guide is for the Lovely Bitez owner or manager after the website is live.
The goal is to keep business information accurate and useful for customers and
search engines.

## Weekly

- Check Google Business Profile for customer questions and new reviews.
- Reply to reviews professionally, including critical reviews.
- Upload recent real photos of food, storefront, seating, and team activity.
- Confirm the most important menu items are still available.
- Check that phone, order, map, and Instagram links still work.

## Monthly

- Review Google Search Console performance.
- Look for searches such as:
  - Lovely Bitez
  - Lovely Bitez Kundrathur
  - Lovely Bitez Thirumudivakkam
  - Fried chicken in Kundrathur
  - Burgers in Kundrathur
  - Desserts in Kundrathur
  - Fast food in Kundrathur
- Update menu availability, descriptions, and images in `data/site.ts`.
- Add new owner-approved photos to `public/images`.
- Confirm opening hours across the website, Google Business Profile, food apps,
  Instagram, and directory listings.

## NAP Consistency

Keep the same name, address, and phone number everywhere:

```txt
Name: Lovely Bitez
Address: No. 10, Kavarai Street, Kundrathur, Thirumudivakkam, Chennai, Tamil Nadu 600069, India
Phone: +91 74485 56600
```

Use the same website URL everywhere after the real domain is connected.

## Google Business Profile

- Claim and verify the profile.
- Add the real website URL.
- Add correct opening hours.
- Add service options only if accurate.
- Add photos regularly.
- Add menu details only when verified.
- Reply to customer reviews with calm, useful responses.

## Honest Review Requests

Ask genuine customers for honest Google reviews after a real purchase or visit.
Do not offer rewards for positive reviews, write fake reviews, pressure people,
or copy reviews onto the website as if they were testimonials.

Suggested wording:

```txt
Thank you for visiting Lovely Bitez. If you enjoyed your food, your honest Google review helps local customers find us.
```

## Content Updates

Good updates:

- New real food photos
- Confirmed menu changes
- Updated hours
- Seasonal specials if they are real
- Better descriptions for verified menu items
- Accurate delivery or takeaway notes

Avoid:

- Keyword stuffing
- Fake rankings
- Fake review schema
- Thin duplicate pages
- Paid backlink schemes
- Unverified branch addresses or hours

## Search Console Checks

Watch for:

- Pages not indexed
- Sitemap errors
- Mobile usability issues
- Core Web Vitals issues
- Search queries with high impressions but low clicks
- Broken canonical URLs after a domain change

When changing domains, update `NEXT_PUBLIC_SITE_URL`, redeploy, then resubmit
the sitemap in Google Search Console.
