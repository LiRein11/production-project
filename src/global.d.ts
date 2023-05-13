declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
} // Для того, чтобы нормально работали импорты с module.scss
