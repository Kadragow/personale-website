export const getCssVariable = (name: string): string => {
  const styles: CSSStyleDeclaration = getComputedStyle(document.body);
  const value: string = styles.getPropertyValue(name);

  return value;
};
