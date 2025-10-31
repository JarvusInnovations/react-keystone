export interface KeystoneIconObjectProps {
  /**
   * RemixIcon class name (e.g., 'ri-hand-heart-line')
   */
  icon: string;

  /**
   * Size of the icon object
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Accessible label for the icon
   */
  ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneIconObject component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneIconObject icon='ri-hand-heart-line' ariaLabel='Hand with heart icon' />
 * <KeystoneIconObject icon='ri-user-line' size='sm' ariaLabel='User icon' />
 * ```
 */
export const KeystoneIconObject = ({
  icon,
  size = 'lg',
  ariaLabel,
  className = ''
}: KeystoneIconObjectProps) => {
  // Build icon object classes
  const iconObjectClasses = [
    'kds-icon-object',
    `kds-icon-object-${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={iconObjectClasses} aria-label={ariaLabel}>
      <i className={icon} />
    </div>
  );
};

KeystoneIconObject.displayName = 'KeystoneIconObject';
