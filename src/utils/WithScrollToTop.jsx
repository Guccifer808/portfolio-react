import { useEffect } from 'react';

export default function withScrollToTop(Component) {
  function WithScrollToTop(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <Component {...props} />;
  }

  return WithScrollToTop;
}
