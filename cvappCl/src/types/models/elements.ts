import type { BaseElement } from './element'

//................Shared Text Styling..............

export interface Typography {
    content: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: 'normal' | 'bold';
    color: string;
    lineHeight: number;
    letterSpacing: number;
    textAlign: 'left' | 'center' | 'right'
}

//...............BASICS.............//

export interface HeaderElement extends BaseElement, Typography {
    type: 'header';
}

export interface TitleElement extends BaseElement, Typography {
    type: 'title';
}

export interface TextElement extends BaseElement, Typography {
    type: 'text'
}

export interface PhotoElement extends BaseElement, Typography {
    type: 'photo';
    src: string;                //data URL or object URL
    boarderRadius: number;      //0=square, large=circle
}

//.................... Shapes & Icons...................//

interface ShapeStyle {
    fill: string;
    stroke: string;
    strokeWidth: number;
}

export interface RectangleElement extends BaseElement, ShapeStyle {
    type: 'rectangle';
    cornerRadius: number                  //only rectangles support rounded corners
}

export interface CircleElement extends BaseElement, ShapeStyle {
    type: 'circle';
}

export interface TriangleElement extends BaseElement, ShapeStyle {
    type: 'triangle'
}

export interface StarElement extends BaseElement, ShapeStyle {
    type: 'star'
}

export interface LineElement extends BaseElement {
    type: 'line';
    stroke: string;
    strokeWidth: number;
}

export interface IconElement extends BaseElement, ShapeStyle {
    type: 'icon'
}

export interface ZigZagElement extends BaseElement {
    type: 'zigzag';
    stroke: string;
    strokeWidth: number;
}

//....................Content Blocks..................//

export interface ExperienceEntry {
    compnay: string;
    role: string;
    startDate: number;
    endDate: number
    description: string [];              // one entry per bullet point 
}

export interface ExperienceElement extends BaseElement {
    type: 'experience';
    entries: ExperienceEntry[];
}

export interface EducationEntry{
    school: string;
    degeree: string;
    startDate: number;
    endDate: number;
    grade?: number;
    location?: number;
}

export interface EducationElement extends BaseElement {
    type: 'education';
    entries: EducationEntry[];
}

export interface Skill{
    name: string;
    level?: string;            
}

export interface SkillsElement extends BaseElement {
    type: 'skills';
    skills: Skill[]
}

export interface ListElement extends BaseElement {
    type: 'list';
    items: string[];
}

export type ContactItemType = 
    | 'email'
    | 'phone'
    | 'address'
    | 'linkedIn'
    | 'github'
    | 'website'
    | 'other';

export interface ContactItem {
    type: ContactItemType;
    value: string;
    label?: string            // Custom display label, mainly for other
}    


export interface ContactCardElement extends BaseElement {
    type: 'contact-card';
    name: string;
    items: ContactItem[];
}

export type LanguageLevel = 'Native' | 'Fluent' | 'Intermediate' | 'Basic'

export interface LanguageEntry {
    name: string;
    level: LanguageLevel;
}

export interface LanguageElement extends BaseElement {
    type: 'languages';
    languages: LanguageEntry[]
}

export interface TimelineDotElement extends BaseElement {
    type: 'timeline-dot';
    color: string;
    size: number
}

export interface DateBadgeElement extends BaseElement {
    type: 'date-badge';
    text: string;
    color: string
}

export interface ReferenceEntry {
    name: string;
    relation: string;
    contact: string;
}

export interface ReferenceElement extends BaseElement {
    type: 'reference'
    references: ReferenceEntry[]
}

//........................Union of every element type.........................//

export type CVElement = 
    | HeaderElement
    | TextElement
    | TitleElement
    | PhotoElement
    | RectangleElement
    | CircleElement
    | TriangleElement
    | StarElement
    | LineElement
    | IconElement
    | ZigZagElement
    | ExperienceElement
    | EducationElement
    | SkillsElement
    | ListElement
    | ContactCardElement
    | LanguageElement
    | TimelineDotElement
    | DateBadgeElement
    | ReferenceElement;