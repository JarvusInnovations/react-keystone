# Checkbox

**Component Name:** `checkbox`
**Total Examples:** 5

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |
| checked | boolean | - | true, false |

---

## Default

**Story ID:** `story--components-checkbox--default--primary-inner`

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
</div>
```

---

## Default

**Story ID:** `story--components-checkbox--default-inner`

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
</div>
```

---

## Disabled

**Story ID:** `story--components-checkbox--disabled-inner`

```html
<div class="kds-form-control kds-disabled">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
</div>
```

---

## Warning

**Story ID:** `story--components-checkbox--warning-inner`

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
<div class="kds-label">
<i class="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon">
</i>
<span id="text-input-help-text" class="kds-label-text-alt kds-text-warning">Alt label</span>
</div>
</div>
```

---

## Error

**Story ID:** `story--components-checkbox--error-inner`

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox kds-checkbox-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" aria-invalid="true">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
<div class="kds-label">
<i class="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon">
</i>
<span id="text-input-help-text" class="kds-label-text-alt kds-text-error">Alt label</span>
</div>
</div>
```

