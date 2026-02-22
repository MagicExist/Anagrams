export class Anagram {
  // Original user input (trimmed)
  private readonly value: string

  // Canonical normalized representation used for comparison
  private readonly key: string

  constructor(input: string) {
    // Remove leading/trailing whitespace
    const trimmed = input.trim()

    // Enforce invariant: an Anagram cannot be empty
    if (!trimmed) {
      throw new Error("Anagram cannot be empty")
    }

    // Store original value
    this.value = trimmed

    // Precompute normalized key for efficient comparison
    this.key = Anagram.generateKey(trimmed)
  }

  /**
   * Compares this anagram with another one.
   * Two anagrams are equal if their normalized keys match.
   */
  isAnagramOf(other: Anagram): boolean {
    return this.key === other.key
  }

  /**
   * Returns the original input value.
   */
  getValue(): string {
    return this.value
  }

  /**
   * Generates a canonical representation of a string.
   * 
   * Steps:
   * 1. Lowercase everything (case-insensitive comparison)
   * 2. Normalize to NFD form (separates letters from accents)
   * 3. Remove diacritic marks (á -> a, ñ -> n, ã -> a)
   * 4. Remove all non-letter and non-number characters
   * 5. Sort characters alphabetically
   * 
   * The result is used as the internal comparison key.
   */
  private static generateKey(str: string): string {
    const cleaned = str
      .toLowerCase()
      .normalize("NFD")                  // Separate accent marks
      .replace(/\p{Diacritic}/gu, "")    // Remove accents
      .replace(/[^\p{L}\p{N}]/gu, "")    // Keep only letters & numbers (Unicode safe)

    // Sort characters to create canonical form
    return cleaned.split("").sort().join("")
  }
}