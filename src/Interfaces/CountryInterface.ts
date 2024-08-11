export interface Countries {
  flags: Flags;
  name: Name;
  validQuestion: boolean;
  invalidQuestion: boolean;
  disabledQuestion: boolean;
  clickedAnwer: boolean;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}
