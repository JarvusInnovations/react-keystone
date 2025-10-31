# Checkbox

**Component Name:** `checkbox`
**Total Variants:** 4

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |
| checked | boolean | - | true, false |

---

## Default

**Story ID:** `components-checkbox--default`
**Full Path:** Components/Checkbox

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
</div>
```

**Classes:** `kds-form-control`

---

## Disabled

**Story ID:** `components-checkbox--disabled`
**Full Path:** Components/Checkbox

```html
<div class="kds-form-control kds-disabled">
<label class="kds-label">
<input type="checkbox" class="kds-checkbox" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
<span id="text-input-label" class="kds-label-text">Remember me</span>
</label>
</div>
```

**Classes:** `kds-form-control kds-disabled`

---

## Warning

**Story ID:** `components-checkbox--warning`
**Full Path:** Components/Checkbox

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

**Classes:** `kds-form-control`

---

## Error

**Story ID:** `components-checkbox--error`
**Full Path:** Components/Checkbox

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

**Classes:** `kds-form-control`

