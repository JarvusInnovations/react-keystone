import React from 'react';

export interface KeystoneCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text for the checkbox
   */
  label?: React.ReactNode;

  /**
   * Helper or error text below the checkbox
   */
  helpText?: React.ReactNode;

  /**
   * Visual state variant
   * @default 'default'
   */
  variant?: 'default' | 'warning' | 'error';
}

/**
 * KeystoneCheckbox component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneCheckbox label="Remember me" />
 * <KeystoneCheckbox label="I agree" helpText="Required field" variant="error" />
 * ```
 */
export const KeystoneCheckbox = React.forwardRef<HTMLInputElement, KeystoneCheckboxProps>(
  ({ label, helpText, variant = 'default', disabled = false, className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${checkboxId}-label`;
    const helpTextId = `${checkboxId}-help-text`;

    // Build checkbox classes following KDS pattern
    const checkboxClasses = [
      'kds-checkbox',
      variant === 'error' && 'kds-checkbox-error',
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Build form control classes
    const formControlClasses = [
      'kds-form-control',
      disabled && 'kds-disabled'
    ]
      .filter(Boolean)
      .join(' ');

    // Build help text classes
    const helpTextClasses = [
      'kds-label-text-alt',
      variant === 'warning' && 'kds-text-warning',
      variant === 'error' && 'kds-text-error'
    ]
      .filter(Boolean)
      .join(' ');

    const getIcon = () => {
      if (variant === 'warning') {
        return <i className="kds-icon kds-text-warning ri-alert-fill" aria-label="Warning icon" />;
      }
      if (variant === 'error') {
        return <i className="kds-icon kds-text-error ri-error-warning-fill" aria-label="Error icon" />;
      }
      return null;
    };

    return (
      <div className={formControlClasses}>
        <label className="kds-label">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={checkboxClasses}
            disabled={disabled}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={helpText ? helpTextId : undefined}
            aria-invalid={variant === 'error' ? true : undefined}
            {...props}
          />
          {label && (
            <span id={labelId} className="kds-label-text">
              {label}
            </span>
          )}
        </label>

        {helpText && (
          <div className="kds-label">
            {getIcon()}
            <span id={helpTextId} className={helpTextClasses}>
              {helpText}
            </span>
          </div>
        )}
      </div>
    );
  }
);

KeystoneCheckbox.displayName = 'KeystoneCheckbox';
