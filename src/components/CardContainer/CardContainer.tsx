import React from 'react';
import './CardContainer.css';

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
   * Makes the container clickable with hover state
   */
  interactive?: boolean;

  /**
   * Shows selected state with visual feedback
   */
  selected?: boolean;

  /**
   * Click handler for interactive containers
   */
  onClick?: () => void;

  /**
   * Border accent color on the left side
   */
  borderAccent?: 'primary' | 'success' | 'warning' | 'error';

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
  interactive = false,
  selected = false,
  onClick,
  borderAccent,
  className = '',
  bodyClassName = ''
}: KeystoneCardContainerProps) => {
  const cardClasses = [
    'kds-card',
    interactive && 'kds-card-container-clickable',
    selected && 'kds-card-container-selected',
    borderAccent && `kds-card-container-accent-${borderAccent}`,
    className
  ].filter(Boolean).join(' ');

  const bodyClasses = ['kds-card-body', padding, bodyClassName].filter(Boolean).join(' ');

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  const cardProps = {
    className: cardClasses,
    ...(interactive && {
      role: 'button',
      tabIndex: 0,
      onClick: handleClick,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }
    })
  };

  return (
    <div {...cardProps}>
      <div className={bodyClasses}>
        {children}
      </div>
    </div>
  );
};

KeystoneCardContainer.displayName = 'KeystoneCardContainer';
