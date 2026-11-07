import { Document } from "./doc.ts";

export class DocumentFactory {
  private andoza: Document;

  constructor(prototype: Document) {
    this.andoza = prototype;
  }

  cloneDocument(): Document {
    return this.andoza.clone();
  }
}
