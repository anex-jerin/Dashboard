import React, { useState } from 'react';
import { useGetTransactionsQuery } from '../state/api';

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetTransactionsQuery(
    page,
    pageSize,
    search,
    sort
  );
  console.log(data);

  return <div>Transactions</div>;
};

export default Transactions;
