export class Anagram {
  private readonly value: string
  private readonly key: string

  constructor(input: string) {
    const trimmed = input.trim()

    if (!trimmed) {
      throw new Error("Anagram cannot be empty")
    }

    this.value = trimmed
    this.key = Anagram.generateKey(trimmed)
  }

  isAnagramOf(other: Anagram): boolean {
    return this.key === other.key
  }

  getValue(): string {
    return this.value
  }

  private static generateKey(str: string): string {
    return str
      .toLowerCase()
      .replace(/\s+/g, "")   
      .split("")
      .sort()
      .join("")
  }
}