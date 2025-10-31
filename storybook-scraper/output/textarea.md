# Textarea

**Component Name:** `textarea`
**Total Variants:** 4

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |

---

## Default

**Story ID:** `components-textarea--default`
**Full Path:** Components/Textarea

```html
<label class="kds-form-control" data-controller="textarea">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Label</span>
<span class="kds-label-text-alt" data-textarea-target="counter">
</span>
</div>
<textarea class="kds-textarea" data-textarea-target="input" data-action="input-&gt;textarea#charCount" data-max="10" data-alert-class="kds-textarea-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
</textarea>
</label>
```

**Classes:** `kds-form-control`

---

## Disabled

**Story ID:** `components-textarea--disabled`
**Full Path:** Components/Textarea

```html
<label class="kds-form-control" data-controller="textarea">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Label</span>
<span class="kds-label-text-alt" data-textarea-target="counter">
</span>
</div>
<textarea class="kds-textarea" data-textarea-target="input" data-action="input-&gt;textarea#charCount" data-max="10" data-alert-class="kds-textarea-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" disabled="">
</textarea>
</label>
```

**Classes:** `kds-form-control`

---

## Warning

**Story ID:** `components-textarea--warning`
**Full Path:** Components/Textarea

```html
<label class="kds-form-control" data-controller="textarea">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Label</span>
<span class="kds-label-text-alt" data-textarea-target="counter">
</span>
</div>
<div class="kds-input-icon">
<textarea class="kds-textarea kds-textarea-warning" data-textarea-target="input" data-action="input-&gt;textarea#charCount" data-max="10" data-alert-class="kds-textarea-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text">
</textarea>
<i class="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-warning">Helper text</span>
</div>
</label>
```

**Classes:** `kds-form-control`

---

## Error

**Story ID:** `components-textarea--error`
**Full Path:** Components/Textarea

```html
<label class="kds-form-control" data-controller="textarea">
<div class="kds-label">
<span id="text-input-label" class="kds-label-text">Label</span>
<span class="kds-label-text-alt" data-textarea-target="counter">
</span>
</div>
<div class="kds-input-icon">
<textarea class="kds-textarea kds-textarea-error" data-textarea-target="input" data-action="input-&gt;textarea#charCount" data-max="10" data-alert-class="kds-textarea-error" tabindex="0" aria-labelledby="text-input-label" aria-describedby="text-input-help-text" aria-invalid="true">
</textarea>
<i class="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon">
</i>
</div>
<div class="kds-label">
<span id="text-input-help-text" class="kds-label-text-alt kds-text-error">Helper text</span>
</div>
</label>
```

**Classes:** `kds-form-control`

