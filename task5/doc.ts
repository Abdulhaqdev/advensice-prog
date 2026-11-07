import type { Copyable } from "./clone.ts";

export class Document implements Copyable<Document> {
  private id: number;
  private title: string;
  private content: string;
  private author: string;
  private tags: string[];

  constructor(
    id: number,
    title: string,
    content: string,
    author: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags.slice();
  }

  static from(source: Document): Document {
    return new Document(
      source.getId(),
      source.getTitle(),
      source.getContent(),
      source.getAuthor(),
      source.getTags()
    );
  }

  clone(): Document {
    return Document.from(this);
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }

  getTags(): string[] {
    return this.tags;
  }

  toString(): string {
    return `${this.id} | ${this.title} | ${this.content} | ${this.author} | teglar: ${this.tags.join(" / ")}`;
  }
}
