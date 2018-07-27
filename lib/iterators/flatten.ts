import { fromGenerator } from '../utils/fromGenerator';

export function flatten<T>(iterables: Iterable<Iterable<T>>): Iterable<T> {
  return fromGenerator(function* () {
    for (const element of iterables) {
      yield* element;
    }
  });
}
