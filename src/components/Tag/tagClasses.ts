/**
 * Tag color variants.
 *
 * KDS 2.0.2 renamed the tag modifier classes from semantic names
 * (`kds-tag-primary`, `kds-tag-success`, ...) to color names (`kds-tag-blue`,
 * `kds-tag-green`, ...). Both spellings are accepted as `variant` values, and
 * both class names are emitted so a page styled by either KDS 2.0.1 or 2.0.2
 * renders correctly. The 2.0.1 class names will be dropped in the next major.
 */
export type KeystoneTagVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'blue'
  | 'gray'
  | 'green'
  | 'red'
  | 'yellow';

const LEGACY_TO_COLOR: Record<string, string> = {
  primary: 'blue',
  secondary: 'gray',
  success: 'green',
  error: 'red',
  warning: 'yellow'
};

const COLOR_TO_LEGACY: Record<string, string> = Object.fromEntries(
  Object.entries(LEGACY_TO_COLOR).map(([legacy, color]) => [color, legacy])
);

/**
 * Returns the KDS tag classes for a variant: the base `kds-tag` plus the
 * 2.0.2 color modifier and its 2.0.1 semantic equivalent.
 */
export function tagClasses(variant: KeystoneTagVariant): string {
  const color = LEGACY_TO_COLOR[variant] ?? variant;
  const legacy = COLOR_TO_LEGACY[color];
  return ['kds-tag', `kds-tag-${color}`, legacy && `kds-tag-${legacy}`].filter(Boolean).join(' ');
}
