// components/FilaLista.tsx
import React from 'react';

interface RowProps {
  content: string;
}

const ListRow: React.FC<RowProps> = ({ content }) => {
  return <li>{content}</li>;
};

export default ListRow;