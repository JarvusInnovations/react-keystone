# Text input

**Component Name:** `text-input`
**Total Examples:** 5

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |

---

## Default

**Story ID:** `story--components-text-input--default--primary-inner`

```html
<label class="kds-form-control">
<div class="kds-label kds-label-md">
<span id="text-input-label" class="kds-label-text">Label</span>
</div>
<input type="text" class="kds-text-input" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
</label>
```

---

## Default

**Story ID:** `story--components-text-input--default-inner`

```html
<label class="kds-form-control">
<div class="kds-label kds-label-md">
<span id="text-input-label" class="kds-label-text">Label</span>
</div>
<input type="text" class="kds-text-input" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
</label>
```

---

## Disabled

**Story ID:** `story--components-text-input--disabled-inner`

```html
<label class="kds-form-control">
<div class="kds-label kds-label-md">
<span id="text-input-label" class="kds-label-text">Label</span>
</div>
<input type="text" class="kds-text-input" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
</label>
```

---

## Warning

**Story ID:** `story--components-text-input--warning-inner`

```html
<label class="kds-form-control">
<div class="kds-label kds-label-md">
<span id="text-input-label" class="kds-label-text">Label</span>
</div>
<div class="kds-input-icon">
<input type="text" class="kds-text-input" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<i class="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-warning">Helper text</span>
</div>
</label>
```

---

## Error

**Story ID:** `story--components-text-input--error-inner`

```html
<label class="kds-form-control">
<div class="kds-label kds-label-md">
<span id="text-input-label" class="kds-label-text">Label</span>
</div>
<div class="kds-input-icon">
<input type="text" class="kds-text-input kds-text-input-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" aria-invalid="true">
<i class="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-error">Helper text</span>
</div>
</label>
```

