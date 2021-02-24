import Article from './home';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';


export interface HomePageProps {};

export default function () {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  return (
    <div className="Homepage">
      <Article type={type} />
    </div>
  )
}