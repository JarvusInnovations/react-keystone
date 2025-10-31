# Navbar

**Component Name:** `navbar`
**Total Examples:** 1

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| Show sub-menu icons | Sub-menu icons are optional. Use the "Show sub-menu icons" control to toggle their visibility in this example.boolean | - | true, false |

---

## Default

**Story ID:** `story--components-navbar--default--primary-inner`

```html
<div class="kds-header">
<img aria-hidden="true" class="image" src="https://www.pa.gov/content/dam/copapwp-pagov/en/global/images/bannerimage.png" alt="Commonwealth of Pennsylvania">
<span class="kds-header-text">
<a href="#" class="kds-link kds-link-inline" role="link" aria-label="Link">Official Website</a> of the Commonwealth of Pennsylvania
</span>
</div>
<nav class="kds-navbar" data-controller="revealable navbar" style="min-height: 200px;">
<div class="kds-navbar-header">
<h3 style="color: lightgrey">Keystone!</h3>
<form method="get" action="#" class="d-none d-md-block">
<div class="kds-search-input p-3">
<label class="visually-hidden">Search</label>
<input type="search" class="kds-text-input w-100" placeholder="Search">
<button type="submit" class="kds-button kds-button-filled">
<span class="visually-hidden">Search</span>
<i aria-hidden="true" class="ri-search-line">
</i>
</button>
</div>
</form>
<button class="kds-navbar-toggler" data-navbar-target="toggleButton" data-action="click-&gt;revealable#toggle click-&gt;navbar#toggleLabel" aria-expanded="false">Menu
</button>
</div>
<ul class="kds-nav" data-revealable-target="content">
<li class="kds-nav-item d-md-none">
<form method="get" action="#">
<div class="kds-search-input p-3">
<label class="visually-hidden">Search</label>
<input type="search" class="kds-text-input w-100" placeholder="Search">
<button type="submit" class="kds-button kds-button-filled">
<span class="visually-hidden">Search</span>
<i aria-hidden="true" class="ri-search-line">
</i>
</button>
</div>
</form>
</li>
<li class="kds-nav-item">
<a href="#" class="kds-nav-link">Home</a>
</li>
<li class="kds-nav-item" data-controller="revealable">
<button id="navbarDropdown" class="kds-nav-link kds-dropdown-toggle" data-action="click-&gt;revealable#toggle" aria-expanded="false">
Reserve Your Spot
</button>
<ul class="kds-menu-list kds-dropdown kds-revealable" data-revealable-target="content" aria-labelledby="navbarDropdown">
<li>
<a class="kds-menu-item" href="#">
<i class="kds-icon ri-circle-fill">
</i>Sub Item 1</a>
</li>
<li>
<a class="kds-menu-item" href="#">
<i class="kds-icon ri-triangle-fill">
</i>Sub Item 2</a>
</li>
<li>
<a class="kds-menu-item" href="#">
<i class="kds-icon ri-pentagon-fill">
</i>Sub Item 3</a>
</li>
</ul>
</li>
<li class="kds-nav-item">
<a href="#" class="kds-nav-link">Camping This Weekend</a>
</li>
<li class="kds-nav-item">
<a href="#" class="kds-nav-link">Interactive Map</a>
</li>
<li class="kds-nav-item">
<a href="#" class="kds-nav-link">Fees &amp; Policies</a>
</li>
</ul>
</nav>
```

