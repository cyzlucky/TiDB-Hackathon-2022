import { lazy, Suspense } from 'react';
import { RouterObj, SuspenseLoadingProps } from '@/types/Common';
import Loading from '@/components/common/Loading';

const NotFound = lazy(() => import("@/pages/NotFound"));
const Home = lazy(() => import('@/pages/Home'));

const SuspenseLoading = (props: SuspenseLoadingProps) => {
  const { children } = props;
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
}

const routerDefault: RouterObj[] = [
  {
    path: "/",
    element: <SuspenseLoading><Home /></SuspenseLoading>,
  },
  {
    path: "*",
    element: <SuspenseLoading><NotFound /></SuspenseLoading>
  },
];

let renderRouter: RouterObj[] = routerDefault;

export {
  renderRouter,
}
