import { Anagram } from "../model/value-objects/Anagram";

export class AnagramPresenter {
    check(a: string, b: string): boolean {
        const first = new Anagram(a)
        const second = new Anagram(b)

        return first.isAnagramOf(second)
    }
}