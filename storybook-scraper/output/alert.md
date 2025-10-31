# Alert

**Component Name:** `alert`
**Total Examples:** 7

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | info, warning, error |
| type | string | - | global, local |
| closeable | boolean | - | true, false |

---

## Default

**Story ID:** `story--components-alert--global-alert-info--primary-inner`

```html
<div class="kds-alert kds-alert-global kds-alert-global-info" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

---

## Global Alert Info

**Story ID:** `story--components-alert--global-alert-info-inner`

```html
<div class="kds-alert kds-alert-global kds-alert-global-info" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

---

## Global Alert Warning

**Story ID:** `story--components-alert--global-alert-warning-inner`

```html
<div class="kds-alert kds-alert-global kds-alert-global-warning" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

---

## Global Alert Error

**Story ID:** `story--components-alert--global-alert-error-inner`

```html
<div class="kds-alert kds-alert-global kds-alert-global-error" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

---

## Local Alert Info

**Story ID:** `story--components-alert--local-alert-info-inner`

```html
<div class="kds-alert kds-alert-local kds-alert-local-info" role="alert" data-controller="presentation">
<i class="ri-information-2-line" aria-hidden="true">
</i>
<div class="kds-alert-content">
<p class="kds-alert-local-title">Alert Title
</p>
<p class="kds-alert-local-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
<button class="kds-alert-dismiss-button" aria-label="Close" title="Close" data-action="click-&gt;presentation#dismiss">
<i class="ri-close-line" aria-hidden="true">
</i>
</button>
</div>
```

---

## Local Alert Warning

**Story ID:** `story--components-alert--local-alert-warning-inner`

```html
<div class="kds-alert kds-alert-local kds-alert-local-warning" role="alert" data-controller="presentation">
<i class="ri-alert-line" aria-hidden="true">
</i>
<div class="kds-alert-content">
<p class="kds-alert-local-title">Alert Title
</p>
<p class="kds-alert-local-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
<button class="kds-alert-dismiss-button" aria-label="Close" title="Close" data-action="click-&gt;presentation#dismiss">
<i class="ri-close-line" aria-hidden="true">
</i>
</button>
</div>
```

---

## Local Alert Error

**Story ID:** `story--components-alert--local-alert-error-inner`

```html
<div class="kds-alert kds-alert-local kds-alert-local-error" role="alert" data-controller="presentation">
<i class="ri-error-warning-line" aria-hidden="true">
</i>
<div class="kds-alert-content">
<p class="kds-alert-local-title">Alert Title
</p>
<p class="kds-alert-local-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
<button class="kds-alert-dismiss-button" aria-label="Close" title="Close" data-action="click-&gt;presentation#dismiss">
<i class="ri-close-line" aria-hidden="true">
</i>
</button>
</div>
```

