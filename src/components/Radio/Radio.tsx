import React from 'react';

export interface KeystoneRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text for the radio button
   */
  label?: React.ReactNode;

  /**
   * Helper or error text below the radio button
   */
  helpText?: React.ReactNode;

  /**
   * Visual state variant
   * @default 'default'
   */
  variant?: 'default' | 'warning' | 'error';
}

/**
 * KeystoneRadio component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneRadio name="choice" value="1" label="Option 1" />
 * <KeystoneRadio name="choice" value="2" label="Option 2" />
 * ```
 */
export const KeystoneRadio = React.forwardRef<HTMLInputElement, KeystoneRadioProps>(
  ({ label, helpText, variant = 'default', disabled = false, className = '', id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${radioId}-label`;
    const helpTextId = `${radioId}-help-text`;

    // Build radio classes following KDS pattern
    const radioClasses = [
      'kds-radio',
      variant === 'error' && 'kds-radio-error',
      className
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
      <div className="kds-form-control">
        <label className="kds-label">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={radioClasses}
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

KeystoneRadio.displayName = 'KeystoneRadio';
