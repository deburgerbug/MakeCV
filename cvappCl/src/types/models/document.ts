import type { CVElement } from "./elements";

export const PAGE_WIDTH  = 794;
export const PAGE_HEIGHT = 1123;

export interface CVDocument { 
    id: string;            
    name: string;
    elements: CVElement[];
    createdAt: string;
    updatedAt: string;
}

export interface DocumentStore { 
    version: number;
    documents: Record <string, CVDocument>;
    lastOpened: string | null;         // id of the last-edited document, for "resume where you left off"
}

export const STORAGE_KEY = 'cv-builder-v1';

export const CURRENT_STORAGE_VERSION = 1;

export function createEmptyStore(): DocumentStore {
    return {
        version: CURRENT_STORAGE_VERSION,
        documents: {},
        lastOpened: null,
    };
}
