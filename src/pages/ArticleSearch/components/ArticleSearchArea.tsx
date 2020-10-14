import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import useDebounce from '../../../hooks/useDebounce';

const { Search } = Input;

interface ArticleSearchAreaProps {
 loading?: boolean,
 onSearch?: (searchText: string) => void,
}


const ArticleSearchArea: React.FC<ArticleSearchAreaProps> = ({ loading = false, onSearch = () => {} }) => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch])

  return (
    <Search placeholder="Start typing to search for a wikipedia article (at least 3 characters)" loading={loading} onChange={(e) => setSearch(e.target.value)} />
  );
}

export default ArticleSearchArea;
