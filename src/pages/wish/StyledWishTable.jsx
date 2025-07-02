import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  border-collapse: collapse;

  thead {
    background-color: #f3f4f6;
    color: #374151;
    text-align: left;
  }

  th,
  td {
    padding: 0.75rem 1rem;
  }

  tbody tr {
    border-bottom: 1px solid #e5e7eb;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .blue {
    color: #2563eb;
  }

  .green {
    color: #059669;
  }

  .yellow {
    color: #ca8a04;
  }

  .purple {
    color: #7c3aed;
  }

  .red {
    color: #ef4444;
  }
`

export const CancelButton = styled.button`
  font-size: 0.875rem;
  color: #dc2626;
  border: 1px solid #ef4444;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: #fef2f2;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  button {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #d1d5db;
    background-color: white;
    font-size: 0.875rem;
    cursor: pointer;

    &.active {
      background-color: #2563eb;
      color: white;
    }

    &:hover {
      background-color: #dbeafe;
    }
  }
`
