import Article from './Article';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export default function () {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  return (
    <div className="Homepage">
      <Article type={type} />
    </div>
  )
}