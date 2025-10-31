# Textarea

**Component Name:** `textarea`
**Total Examples:** 5

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| variant | string | - | default, warning, error |
| disabled | boolean | - | true, false |
| with help text | boolean | - | true, false |

---

## Default

**Story ID:** `story--components-textarea--default--primary-inner`

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

---

## Default

**Story ID:** `story--components-textarea--default-inner`

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

---

## Disabled

**Story ID:** `story--components-textarea--disabled-inner`

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

---

## Warning

**Story ID:** `story--components-textarea--warning-inner`

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

---

## Error

**Story ID:** `story--components-textarea--error-inner`

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

