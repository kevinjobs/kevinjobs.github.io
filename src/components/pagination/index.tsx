import Paging from './pagination';

export interface PaginationProps {
  type?: string,
  current?: number,
  totals?: number,
  pages?: number,
  onPrev: React.MouseEventHandler<HTMLElement>,
  onNext: React.MouseEventHandler<HTMLElement>
}

export default function (props: PaginationProps) {
  return <Paging {...props} />
}