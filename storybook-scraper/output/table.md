# Table

**Component Name:** `table`
**Total Examples:** 1

## Component Props

| Name | Type | Default | Options |
|------|------|---------|---------|
| Headers | Column headers for the tablearray | - | - |
| Rows | Table rowsarray | - | - |
| First column as header | Renders the first column as header cellsboolean | - | true, false |
| First row as header | Controls the visibility of the table headerboolean | - | true, false |
| Title | Title for the tablestring | - | - |
| Show title | Controls the visibility of the table titleboolean | - | true, false |

---

## Default

**Story ID:** `story--components-table--default--primary-inner`

```html
<h2 class="kds-table-title">Financial Performance</h2>
<table class="kds-table">
<thead>
<tr>
<th>Quarter</th>
<th>Revenue</th>
<th>Expenses</th>
<th>Profit</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Q1 2024</th>
<td>$100,000</td>
<td>$80,000</td>
<td>$20,000</td>
</tr>
<tr>
<th scope="row">Q2 2024</th>
<td>$120,000</td>
<td>$85,000</td>
<td>$35,000</td>
</tr>
<tr>
<th scope="row">Q3 2024</th>
<td>$150,000</td>
<td>$95,000</td>
<td>$55,000</td>
</tr>
</tbody>
</table>
```

