import React, { useState } from 'react';

export interface AccordionItem {
  /**
   * Unique identifier for the accordion item
   */
  id: string;

  /**
   * Title/header text for the accordion item
   */
  title: React.ReactNode;

  /**
   * Content to display when expanded
   */
  content: React.ReactNode;

  /**
   * Whether this item is expanded by default
   * @default false
   */
  defaultExpanded?: boolean;
}

export interface KeystoneAccordionProps {
  /**
   * Array of accordion items
   */
  items: AccordionItem[];

  /**
   * Allow multiple panels to be open at once
   * @default true
   */
  allowMultiple?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Unique ID for the accordion container
   */
  id?: string;
}

/**
 * KeystoneAccordion component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneAccordion items={[
 *   { id: '1', title: 'Section 1', content: 'Content 1', defaultExpanded: true },
 *   { id: '2', title: 'Section 2', content: 'Content 2' }
 * ]} />
 * ```
 */
export const KeystoneAccordion = ({
  items,
  allowMultiple = true,
  className = '',
  id
}: KeystoneAccordionProps) => {
  const accordionId = id || `accordion-${Math.random().toString(36).substr(2, 9)}`;

  // Track which items are expanded
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.defaultExpanded).map(item => item.id))
  );

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(itemId);
      }
      return next;
    });
  };

  const accordionClasses = ['kds-accordion', className].filter(Boolean).join(' ');

  return (
    <div className={accordionClasses} id={accordionId}>
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        const headingId = `${accordionId}-heading-${item.id}`;
        const collapseId = `${accordionId}-collapse-${item.id}`;

        return (
          <div key={item.id} className="kds-accordion-item">
            <h2 className="kds-accordion-header" id={headingId}>
              <button
                className={`kds-accordion-button${isExpanded ? '' : ' collapsed'}`}
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isExpanded}
                aria-controls={collapseId}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`kds-accordion-collapse collapse${isExpanded ? ' show' : ''}`}
              aria-labelledby={headingId}
            >
              <div className="kds-accordion-body">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

KeystoneAccordion.displayName = 'KeystoneAccordion';
