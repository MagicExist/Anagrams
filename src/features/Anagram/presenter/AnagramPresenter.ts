import { Anagram } from "../model/value-objects/Anagram";

/**
 * AnagramPresenter
 *
 * Responsible for coordinating the anagram check
 * between the View and the Domain (Value Object).
 *
 * This class contains presentation logic,
 * but no UI and no infrastructure code.
 */
export class AnagramPresenter {

  /**
   * Receives two raw string inputs from the View,
   * creates corresponding Anagram Value Objects,
   * and returns whether they are anagrams.
   *
   * @param a - First word input
   * @param b - Second word input
   * @returns boolean indicating if both inputs are anagrams
   */
  check(a: string, b: string): boolean {
    // Create Value Objects (domain layer)
    const first = new Anagram(a)
    const second = new Anagram(b)

    // Delegate comparison to domain logic
    return first.isAnagramOf(second)
  }
}