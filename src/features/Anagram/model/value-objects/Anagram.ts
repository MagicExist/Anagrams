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
    const cleaned = str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")     
    .replace(/[^\p{L}\p{N}]/gu, "")      

    return cleaned.split("").sort().join("")
  }
}