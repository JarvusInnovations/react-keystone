# Card

**Component Name:** `card`
**Total Variants:** 4

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| With image | Show image in the cardboolean | - | true, false |
| Image URL | Custom URL for the card media imagestring | - | - |
| With icon | Show icon in the cardboolean | - | true, false |
| As card group | Show as a card groupboolean | - | true, false |
| Card text | Custom text for the card bodystring | - | - |
| Link type | Type of link to display in the cardstring | - | no-link, link-with-label-icon, link-with-icon-only |
| Link label | Custom label for the card linkstring | - | - |
| Card title | Custom title for the cardstring | - | - |
| Tag text | Custom text for the tag in the headerstring | - | - |
| Tag color | Color of the tag in the headerstring | - | Choose option..., primary, secondary, success, error, warning |
| With date | Show date in the card headerboolean | - | true, false |
| Date | Date to display in the headerstring | - | - |

---

## Card

**Story ID:** `components-card--card`
**Full Path:** Components/Card

```html
<div class="kds-card">
<img class="kds-card-img-top" src="https://www.visitmyrtlebeach.com/sites/default/files/styles/single_image_component/public/legacy/images/tunnel_1_124a8b69-db96-4940-8198-60241cd1fcd4.jpg.webp?itok=_SPUKNnY" alt="Cool gradient">
<div class="kds-card-body">
<div class="kds-card-header">
<span class="kds-tag kds-tag-primary">Fact of the Day</span>
<span class="kds-label kds-label-md kds-text-normal">2025-05-20</span>
</div>
<h3 class="kds-card-title">
Did You Know There is a Tunnel Under Ocean Blvd?!
</h3>
<p class="kds-card-text">
The Jergins Tunnel located beneath Ocean Boulevard in Long Beach, California is a pedestrian tunnel that was built in 1927 to provide safe access from the Jergins Trust Building to the beach and the Pike amusement zone, passing under the busy thoroughfare. It was known for its ornate tile work and shops. The Jergins Tunnel was closed to the public in 1967.
</p>
<a href="#" class="kds-card-labeled-link" role="link" aria-label="See More">
<span>See More</span>
<i class="ri-arrow-right-line">
</i>
</a>
</div>
</div>
```

**Classes:** `kds-card`

---

## Image card

**Story ID:** `components-card--image-card`
**Full Path:** Components/Card

```html
<div class="kds-card">
<img class="kds-card-img-top" src="https://www.visitmyrtlebeach.com/sites/default/files/styles/single_image_component/public/legacy/images/tunnel_1_124a8b69-db96-4940-8198-60241cd1fcd4.jpg.webp?itok=_SPUKNnY" alt="Cool gradient">
<div class="kds-card-body">
<div class="kds-card-header">
<span class="kds-tag kds-tag-primary">Fact of the Day</span>
<span class="kds-label kds-label-md kds-text-normal">2025-05-20</span>
</div>
<h3 class="kds-card-title">
Did You Know There is a Tunnel Under Ocean Blvd?
</h3>
<p class="kds-card-text">
The Jergins Tunnel located beneath Ocean Boulevard in Long Beach, California is a pedestrian tunnel that was built in 1927 to provide safe access from the Jergins Trust Building to the beach and the Pike amusement zone, passing under the busy thoroughfare. It was known for its ornate tile work and shops. The Jergins Tunnel was closed to the public in 1967.
</p>
<a href="#" class="kds-card-labeled-link" role="link" aria-label="See More">
<span>See More</span>
<i class="ri-arrow-right-line">
</i>
</a>
</div>
</div>
```

**Classes:** `kds-card`

---

## Icon card

**Story ID:** `components-card--icon-card`
**Full Path:** Components/Card

```html
<div class="kds-card">
<div class="kds-card-body">
<div class="kds-icon-object kds-icon-object-lg" aria-label="Hand with heart icon">
<i class="ri-hand-heart-line">
</i>
</div>
<h3 class="kds-card-title">
Did You Know There is a Tunnel Under Ocean Blvd?
</h3>
<p class="kds-card-text">
The Jergins Tunnel located beneath Ocean Boulevard in Long Beach, California is a pedestrian tunnel that was built in 1927 to provide safe access from the Jergins Trust Building to the beach and the Pike amusement zone, passing under the busy thoroughfare. It was known for its ornate tile work and shops. The Jergins Tunnel was closed to the public in 1967.
</p>
<a href="#" class="kds-card-labeled-link" role="link" aria-label="See More">
<span>See More</span>
<i class="ri-arrow-right-line">
</i>
</a>
</div>
</div>
```

**Classes:** `kds-card`

---

## Plain card

**Story ID:** `components-card--plain-card`
**Full Path:** Components/Card

```html
<div class="kds-card">
<div class="kds-card-body">
<h3 class="kds-card-title">
Did You Know There is a Tunnel Under Ocean Blvd?
</h3>
<p class="kds-card-text">
The Jergins Tunnel located beneath Ocean Boulevard in Long Beach, California is a pedestrian tunnel that was built in 1927 to provide safe access from the Jergins Trust Building to the beach and the Pike amusement zone, passing under the busy thoroughfare. It was known for its ornate tile work and shops. The Jergins Tunnel was closed to the public in 1967.
</p>
<a href="#" class="kds-card-labeled-link" role="link" aria-label="See More">
<span>See More</span>
<i class="ri-arrow-right-line">
</i>
</a>
</div>
</div>
```

**Classes:** `kds-card`

