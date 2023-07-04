export class ArrayMax3<T> extends Array<T> {
  constructor(...arr: T[]) {
    super(...arr)
  }

  override push(...items: T[]): number {
    if (this.length + items.length > 3)
      return -1

    return super.push(...items)
  }
}
