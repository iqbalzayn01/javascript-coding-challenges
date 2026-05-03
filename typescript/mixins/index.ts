export class Serializable {
  serialize(): string {
    return JSON.stringify(this);
  }

  deserialize(source: string): void {
    Object.assign(this, JSON.parse(source));
  }
}
