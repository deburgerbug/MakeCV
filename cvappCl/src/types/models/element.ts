export type ElementType = 
   | 'header'
   | 'text'
   | 'title'
   | 'photo'
   | 'rectangle'
   | 'circle'
   | 'triangle'
   | 'star'
   | 'line'
   | 'icon'
   | 'zigzag'
   | 'experience'
   | 'education'
   | 'skills'
   | 'list'
   | 'contact-card'
   | 'languages'
   | 'timeline-dot'
   | 'date-badge'
   | 'reference';

export interface BaseElement {
    id: string;
    type: ElementType;
    name?: string;
    x: number;
    y: number;
    width: number;
    height:number;
    rotation: number;
    zIndex: number;
    locked: boolean;
    hidden: boolean;
    opacity: number;
}