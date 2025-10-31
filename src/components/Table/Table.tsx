import React from 'react';

export interface TableColumn {
  /**
   * Column header text
   */
  header: React.ReactNode;

  /**
   * Accessor key for row data
   */
  key: string;
}

export interface KeystoneTableProps {
  /**
   * Table title
   */
  title?: React.ReactNode;

  /**
   * Column definitions
   */
  columns: TableColumn[];

  /**
   * Table row data
   */
  data: Record<string, React.ReactNode>[];

  /**
   * Use first column as row headers
   * @default false
   */
  firstColumnAsHeader?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * KeystoneTable component following Pennsylvania Keystone Design System patterns
 *
 * @example
 * ```tsx
 * <KeystoneTable
 *   title="Financial Data"
 *   columns={[
 *     { header: 'Quarter', key: 'quarter' },
 *     { header: 'Revenue', key: 'revenue' }
 *   ]}
 *   data={[
 *     { quarter: 'Q1 2024', revenue: '$100,000' },
 *     { quarter: 'Q2 2024', revenue: '$120,000' }
 *   ]}
 *   firstColumnAsHeader
 * />
 * ```
 */
export const KeystoneTable = ({
  title,
  columns,
  data,
  firstColumnAsHeader = false,
  className = ''
}: KeystoneTableProps) => {
  const tableClasses = ['kds-table', className].filter(Boolean).join(' ');

  return (
    <>
      {title && <h2 className="kds-table-title">{title}</h2>}
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => {
                const content = row[column.key];
                const isFirstColumn = colIndex === 0 && firstColumnAsHeader;

                return isFirstColumn ? (
                  <th key={colIndex} scope="row">
                    {content}
                  </th>
                ) : (
                  <td key={colIndex}>{content}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

KeystoneTable.displayName = 'KeystoneTable';
