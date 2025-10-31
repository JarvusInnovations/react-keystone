# Radio

**Component Name:** `radio`
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

**Story ID:** `components-radio--default`
**Full Path:** Components/Radio

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="radio" class="kds-radio" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Some choice</span>
</label>
</div>
```

**Classes:** `kds-form-control`

---

## Disabled

**Story ID:** `components-radio--disabled`
**Full Path:** Components/Radio

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="radio" class="kds-radio" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
<span id="text-input-label" class="kds-label-text">Some choice</span>
</label>
</div>
```

**Classes:** `kds-form-control`

---

## Warning

**Story ID:** `components-radio--warning`
**Full Path:** Components/Radio

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="radio" class="kds-radio" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<span id="text-input-label" class="kds-label-text">Some choice</span>
</label>
<div class="kds-label">
<i class="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon">
</i>
<span id="text-input-help-text" class="kds-label-text-alt kds-text-warning">Help text message</span>
</div>
</div>
```

**Classes:** `kds-form-control`

---

## Error

**Story ID:** `components-radio--error`
**Full Path:** Components/Radio

```html
<div class="kds-form-control">
<label class="kds-label">
<input type="radio" class="kds-radio kds-radio-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" aria-invalid="true">
<span id="text-input-label" class="kds-label-text">Some choice</span>
</label>
<div class="kds-label">
<i class="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon">
</i>
<span id="text-input-help-text" class="kds-label-text-alt kds-text-error">Help text message</span>
</div>
</div>
```

**Classes:** `kds-form-control`

