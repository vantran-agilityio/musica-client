import { ReactNode } from 'react';
import { TagType } from '@/constants/common';

type Props = {
  Tag: TagType;
  children: ReactNode;
  className: string;
};

const styleMap: { [key in TagType]: string } = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl ',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-sm',
  p: 'text-base',
  span: 'text-sm'
};

const Typography = ({ Tag = TagType.p, children, className }: Props) => {
  return <Tag className={(styleMap[Tag], className)}>{children}</Tag>;
};

export default Typography;
