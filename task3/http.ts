type Sarlavha = {
  nom: string;
  qiymat: string;
};

export class HttpClient {
  private manzil = "";
  private yol = "/";
  private usul = "GET";
  private sarlavhalar: Sarlavha[] = [];
  private matn = "";

  setUri(uri: string): this {
    this.manzil = uri;
    return this;
  }

  setPath(path: string): this {
    this.yol = path.startsWith("/") ? path : `/${path}`;
    return this;
  }

  get(): this {
    return this.usulniQoy("GET");
  }

  post(): this {
    return this.usulniQoy("POST");
  }

  delete(): this {
    return this.usulniQoy("DELETE");
  }

  update(): this {
    return this.usulniQoy("UPDATE");
  }

  addHeader(name: string, value: string): this {
    this.sarlavhalar.push({ nom: name, qiymat: value });
    return this;
  }

  setBody(body: string): this {
    this.matn = body;
    return this;
  }

  build(): string {
    const qatorlar = [
      `${this.usul} ${this.yol} HTTP/1.1`,
      `Host: ${this.manzil}`,
    ];

    for (const sarlavha of this.sarlavhalar) {
      qatorlar.push(`${sarlavha.nom}: ${sarlavha.qiymat}`);
    }

    if (this.matn.length > 0) {
      qatorlar.push("");
      qatorlar.push(this.matn);
    }

    return qatorlar.join("\r\n");
  }

  private usulniQoy(usul: string): this {
    this.usul = usul;
    return this;
  }
}
