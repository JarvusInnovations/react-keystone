import React from 'react';

export interface KeystoneTextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text for the input
   */
  label?: React.ReactNode;

  /**
   * Helper or error text below the input
   */
  helpText?: React.ReactNode;

  /**
   * Visual state variant
   * @default 'default'
   */
  variant?: 'default' | 'warning' | 'error';

  /**
   * Size of the label
   * @default 'md'
   */
  labelSize?: 'sm' | 'md' | 'lg';
}

/**
 * KeystoneTextInput component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneTextInput label="Email" placeholder="Enter email" />
 * <KeystoneTextInput label="Name" helpText="Required field" variant="error" />
 * ```
 */
export const KeystoneTextInput = React.forwardRef<HTMLInputElement, KeystoneTextInputProps>(
  ({ label, helpText, variant = 'default', disabled = false, className = '', id, labelSize = 'md', ...props }, ref) => {
    const inputId = id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${inputId}-label`;
    const helpTextId = `${inputId}-help-text`;

    const hasIcon = variant === 'warning' || variant === 'error';

    // Build input classes following KDS pattern
    const inputClasses = [
      'kds-text-input',
      variant === 'error' && 'kds-text-input-error',
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

    const input = (
      <input
        ref={ref}
        type="text"
        id={inputId}
        className={inputClasses}
        disabled={disabled}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helpText ? helpTextId : undefined}
        aria-invalid={variant === 'error' ? true : undefined}
        {...props}
      />
    );

    return (
      <label className="kds-form-control">
        {label && (
          <div className={`kds-label kds-label-${labelSize}`}>
            <span id={labelId} className="kds-label-text">
              {label}
            </span>
          </div>
        )}

        {hasIcon ? (
          <div className="kds-input-icon">
            {input}
            {getIcon()}
          </div>
        ) : (
          input
        )}

        {helpText && (
          <div className="kds-label">
            <span id={helpTextId} className={helpTextClasses}>
              {helpText}
            </span>
          </div>
        )}
      </label>
    );
  }
);

KeystoneTextInput.displayName = 'KeystoneTextInput';
