import React from 'react';

export interface KeystoneSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Label text for the select
   */
  label?: React.ReactNode;

  /**
   * Helper or error text below the select
   */
  helpText?: React.ReactNode;

  /**
   * Visual state variant
   * @default 'default'
   */
  variant?: 'default' | 'warning' | 'error';

  /**
   * Select options
   */
  children: React.ReactNode;
}

/**
 * KeystoneSelect component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneSelect label="Choose an option">
 *   <option value="">Select...</option>
 *   <option value="1">Option 1</option>
 * </KeystoneSelect>
 * ```
 */
export const KeystoneSelect = React.forwardRef<HTMLSelectElement, KeystoneSelectProps>(
  ({ label, helpText, variant = 'default', disabled = false, className = '', id, children, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${selectId}-label`;
    const helpTextId = `${selectId}-help-text`;

    const hasIcon = variant === 'warning' || variant === 'error';

    // Build select classes following KDS pattern
    const selectClasses = [
      'kds-select',
      variant === 'warning' && 'kds-select-warning',
      variant === 'error' && 'kds-select-error',
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

    const select = (
      <select
        ref={ref}
        id={selectId}
        className={selectClasses}
        disabled={disabled}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helpText ? helpTextId : undefined}
        aria-invalid={variant === 'error' ? true : undefined}
        {...props}
      >
        {children}
      </select>
    );

    return (
      <label className="kds-form-control">
        {label && (
          <div className="kds-label">
            <span id={labelId} className="kds-label-text">
              {label}
            </span>
          </div>
        )}

        {hasIcon ? (
          <div className="kds-input-icon">
            {select}
            {getIcon()}
          </div>
        ) : (
          select
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

KeystoneSelect.displayName = 'KeystoneSelect';
