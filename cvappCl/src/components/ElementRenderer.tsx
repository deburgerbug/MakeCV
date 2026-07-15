import type { CVElement } from '../types/models/elements';

interface Props {
  element: CVElement;
}

export default function ElementRenderer({ element }: Props) {
  if (element.hidden) return null;

  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    left: element.x,
    top: element.y,
    width: element.width,
    height: element.height,
    transform: `rotate(${element.rotation}deg)`,
    opacity: element.opacity,
    zIndex: element.zIndex,
  };

  switch (element.type) {
    case 'header':
    case 'title':
    case 'text':
      return (
        <div
          style={{
            ...wrapperStyle,
            fontFamily: element.fontFamily,
            fontSize: element.fontSize,
            fontWeight: element.fontWeight,
            color: element.color,
            lineHeight: element.lineHeight,
            letterSpacing: element.letterSpacing,
            textAlign: element.textAlign,
          }}
        >
          {element.content}
        </div>
      );

    case 'rectangle':
      return (
        <div
          style={{
            ...wrapperStyle,
            background: element.fill,
            border: element.strokeWidth
              ? `${element.strokeWidth}px solid ${element.stroke}`
              : 'none',
            borderRadius: element.cornerRadius,
          }}
        />
      );

    default:
      return (
        <div
          style={{
            ...wrapperStyle,
            border: '1px dashed #999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            color: '#999',
          }}
        >
          {element.type}
        </div>
      );
  }
}