import { useEffect, useInsertionEffect, useLayoutEffect } from 'react'

const Child = () => {
  useEffect(() => {
    console.log('useEffect child is called');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect child is called');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect child is called');
  });
};

export default Child;