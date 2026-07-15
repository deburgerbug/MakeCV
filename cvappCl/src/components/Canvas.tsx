import type { CVDocument } from '../types/models/document';
import { PAGE_WIDTH, PAGE_HEIGHT } from '../types/models/document';
import ElementRenderer from './ElementRenderer';

interface Props {
  document: CVDocument;
}

export default function Canvas({ document }: Props) {
  return (
    <div
      style={{
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        background: '#fff',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        position: 'relative',
        margin: '20px auto',
      }}
    >
      {document.elements.map((el) => (
        <ElementRenderer key={el.id} element={el} />
      ))}
    </div>
  );
}