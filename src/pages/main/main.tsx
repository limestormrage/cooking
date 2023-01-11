import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../store/useStores';

function Main(): JSX.Element {
  const { categoriesStore: { getCategories } } = useStores();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <h1>main</h1>
  );
}

export default observer(Main);
