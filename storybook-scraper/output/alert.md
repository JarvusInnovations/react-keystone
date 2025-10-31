# Alert

**Component Name:** `alert`
**Total Variants:** 6

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | info, warning, error |
| type | string | - | global, local |
| closeable | boolean | - | true, false |

---

## Global Alert Info

**Story ID:** `components-alert--global-alert-info`
**Full Path:** Components/Alert

```html
<div class="kds-alert kds-alert-global kds-alert-global-info" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

**Classes:** `kds-alert kds-alert-global kds-alert-global-info`

---

## Global Alert Warning

**Story ID:** `components-alert--global-alert-warning`
**Full Path:** Components/Alert

```html
<div class="kds-alert kds-alert-global kds-alert-global-warning" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

**Classes:** `kds-alert kds-alert-global kds-alert-global-warning`

---

## Global Alert Error

**Story ID:** `components-alert--global-alert-error`
**Full Path:** Components/Alert

```html
<div class="kds-alert kds-alert-global kds-alert-global-error" role="alert" data-controller="presentation">
<div class="kds-alert-content">
<p class="kds-alert-global-title">Alert Title
</p>
<p class="kds-alert-global-message">A simple primary alert—check it out <a href="#">here</a>!</p>
</div>
</div>
```

**Classes:** `kds-alert kds-alert-global kds-alert-global-error`

---

## Local Alert Info

**Story ID:** `components-alert--local-alert-info`
**Full Path:** Components/Alert

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

**Classes:** `kds-alert kds-alert-local kds-alert-local-info`

---

## Local Alert Warning

**Story ID:** `components-alert--local-alert-warning`
**Full Path:** Components/Alert

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

**Classes:** `kds-alert kds-alert-local kds-alert-local-warning`

---

## Local Alert Error

**Story ID:** `components-alert--local-alert-error`
**Full Path:** Components/Alert

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

**Classes:** `kds-alert kds-alert-local kds-alert-local-error`

