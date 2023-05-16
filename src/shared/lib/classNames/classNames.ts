type Mods = Record<string, boolean | string>; // Record - специальный тип в ts, который обозначает, что в качестве ключа будет использоваться стринг, а в качестве ключа булеан либо стринг(в данном случае)

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' '); // Возвращается массив кортежей(фиксированное кол-во аргуметов(в данном случае 2), [свойство, значение])
}

