export interface Developer {
  writeCode(): string;
}

export class JavaDeveloper implements Developer {
  writeCode(): string {
    return "Java dasturchisi o'yin mantiqini yozdi";
  }
}

export class CppDeveloper implements Developer {
  writeCode(): string {
    return "C++ dasturchisi o'yin dvijogini yozdi";
  }
}
