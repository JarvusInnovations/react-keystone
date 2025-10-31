# Select

**Component Name:** `select`
**Total Examples:** 5

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |

---

## Default

**Story ID:** `story--components-select--default--primary-inner`

```html
<label class="kds-form-control">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Pick the best fantasy franchise</span>
</div>
<select class="kds-select" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<option disabled="" selected="">
</option>
<option value="1">Star Wars</option>
<option value="2">Harry Potter</option>
<option value="3">Lord of the Rings</option>
<option value="4">Planet of the Apes</option>
<option value="5">Star Trek</option>
</select>
</label>
```

---

## Default

**Story ID:** `story--components-select--default-inner`

```html
<label class="kds-form-control">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Pick the best fantasy franchise</span>
</div>
<select class="kds-select" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<option disabled="" selected="">
</option>
<option value="1">Star Wars</option>
<option value="2">Harry Potter</option>
<option value="3">Lord of the Rings</option>
<option value="4">Planet of the Apes</option>
<option value="5">Star Trek</option>
</select>
</label>
```

---

## Disabled

**Story ID:** `story--components-select--disabled-inner`

```html
<label class="kds-form-control">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Pick the best fantasy franchise</span>
</div>
<select class="kds-select" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
<option disabled="" selected="">
</option>
<option value="1">Star Wars</option>
<option value="2">Harry Potter</option>
<option value="3">Lord of the Rings</option>
<option value="4">Planet of the Apes</option>
<option value="5">Star Trek</option>
</select>
</label>
```

---

## Warning

**Story ID:** `story--components-select--warning-inner`

```html
<label class="kds-form-control">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Pick the best fantasy franchise</span>
</div>
<div class="kds-input-icon">
<select class="kds-select kds-select-warning" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
<option disabled="" selected="">
</option>
<option value="1">Star Wars</option>
<option value="2">Harry Potter</option>
<option value="3">Lord of the Rings</option>
<option value="4">Planet of the Apes</option>
<option value="5">Star Trek</option>
</select>
<i class="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-warning">Alt label</span>
</div>
</label>
```

---

## Error

**Story ID:** `story--components-select--error-inner`

```html
<label class="kds-form-control">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Pick the best fantasy franchise</span>
</div>
<div class="kds-input-icon">
<select class="kds-select kds-select-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" aria-invalid="true">
<option disabled="" selected="">
</option>
<option value="1">Star Wars</option>
<option value="2">Harry Potter</option>
<option value="3">Lord of the Rings</option>
<option value="4">Planet of the Apes</option>
<option value="5">Star Trek</option>
</select>
<i class="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-error">Alt label</span>
</div>
</label>
```

