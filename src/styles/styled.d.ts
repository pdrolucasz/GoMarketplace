import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      icon: string;

      background: string;
      bakcgroundProduct: string;
      text: string;
    };
  }
}
