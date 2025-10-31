import React from 'react';

export interface KeystoneCardContainerProps {
  /**
   * Card container content
   */
  children: React.ReactNode;

  /**
   * Bootstrap padding classes (e.g., 'p-4', 'px-3 py-4')
   * @default ''
   */
  padding?: string;

  /**
   * Additional CSS classes for the card wrapper
   */
  className?: string;

  /**
   * Additional CSS classes for the card body
   */
  bodyClassName?: string;
}

/**
 * KeystoneCardContainer - A simple card wrapper component for layout and form containers
 *
 * This component provides a clean card container without the structured content
 * features of KeystoneCard. Use this for:
 * - Form containers
 * - Generic content sections
 * - Layout wrappers
 *
 * For structured content with titles, links, images, etc., use KeystoneCard instead.
 *
 * @example
 * ```tsx
 * <KeystoneCardContainer padding="p-4">
 *   <h2>Form Title</h2>
 *   <KeystoneTextInput label="Name" />
 *   <KeystoneButton>Submit</KeystoneButton>
 * </KeystoneCardContainer>
 * ```
 */
export const KeystoneCardContainer = ({
  children,
  padding = '',
  className = '',
  bodyClassName = ''
}: KeystoneCardContainerProps) => {
  const cardClasses = ['kds-card', className].filter(Boolean).join(' ');
  const bodyClasses = ['kds-card-body', padding, bodyClassName].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      <div className={bodyClasses}>
        {children}
      </div>
    </div>
  );
};

KeystoneCardContainer.displayName = 'KeystoneCardContainer';
