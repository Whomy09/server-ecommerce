import { Models } from './models';

export interface GetDocumentParams<Collection extends keyof Models> {
  collection: Collection;
  docId: string;
}
