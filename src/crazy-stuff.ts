// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type A1 = Sort<[]>;
type B1 = [];
type C1 = Expect<Equal<A1, B1>>;

type A2 = Sort<[1]>;
type B2 = [1];
type C2 = Expect<Equal<A2, B2>>;

type A3 = Sort<[2, 1]>;
type B3 = [1, 2];
type C3 = Expect<Equal<A3, B3>>;

type A4 = Sort<[0, 0, 0]>;
type B4 = [0, 0, 0];
type C4 = Expect<Equal<A4, B4>>;

type A5 = Sort<[1, 2, 3]>;
type B5 = [1, 2, 3];
type C5 = Expect<Equal<A5, B5>>;

type A6 = Sort<[3, 2, 1]>;
type B6 = [1, 2, 3];
type C6 = Expect<Equal<A6, B6>>;

type A7 = Sort<[3, 2, 1, 2]>;
type B7 = [1, 2, 2, 3];
type C7 = Expect<Equal<A7, B7>>;

type A8 = Sort<[3, 2, 0, 1, 0, 0, 0]>;
type B8 = [0, 0, 0, 0, 1, 2, 3];
type C8 = Expect<Equal<A8, B8>>;

type A9 = Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>;
type B9 = [2, 4, 5, 6, 6, 6, 7, 8, 9];
type C9 = Expect<Equal<A9, B9>>;

type A10 = Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>;
type B10 = [1, 1, 1, 1, 1, 1, 1, 1, 2];
type C10 = Expect<Equal<A10, B10>>;

type A11 = Sort<[], true>;
type B11 = [];
type C11 = Expect<Equal<A11, B11>>;

type A12 = Sort<[1], true>;
type B12 = [1];
type C12 = Expect<Equal<A12, B12>>;

type A13 = Sort<[2, 1], true>;
type B13 = [2, 1];
type C13 = Expect<Equal<A13, B13>>;

type A14 = Sort<[0, 0, 0], true>;
type B14 = [0, 0, 0];
type C14 = Expect<Equal<A14, B14>>;

type A15 = Sort<[1, 2, 3], true>;
type B15 = [3, 2, 1];
type C15 = Expect<Equal<A15, B15>>;

type A16 = Sort<[3, 2, 1], true>;
type B16 = [3, 2, 1];
type C16 = Expect<Equal<A16, B16>>;

type A17 = Sort<[3, 2, 1, 2], true>;
type B17 = [3, 2, 2, 1];
type C17 = Expect<Equal<A17, B17>>;

type A18 = Sort<[3, 2, 0, 1, 0, 0, 0], true>;
type B18 = [3, 2, 1, 0, 0, 0, 0];
type C18 = Expect<Equal<A18, B18>>;

type A19 = Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>;
type B19 = [9, 8, 7, 6, 6, 6, 5, 4, 2];
type C19 = Expect<Equal<A19, B19>>;

// ============= Your Code Here =============

/*

Floats?
Negative Numbers?
Negative Zero?

quicksort: @gvergnaud https://github.com/type-challenges/type-challenges/issues/856
quicksort: @uuid11 https://github.com/type-challenges/type-challenges/issues/833
mergesort: @krryan https://github.com/type-challenges/type-challenges/issues/1257
selectionsort: @EnderShadow8 https://github.com/type-challenges/type-challenges/issues/2283
radixsort: @okayu29 https://github.com/type-challenges/type-challenges/issues/6350

*/



// ============== Alternatives ==============

// Insertion Sort
// @ianbunag
type Numeric = number | bigint | string
type s = string;

type Length<
  Type extends Numeric,
  Counter extends 1[] = [],
> =
  `${Type}` extends `${s}${s}${s}${s}${s}${
      s}${s}${s}${s}${s}${infer PastTen
     }`
  ? Length<PastTen, [...Counter, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>
  : `${Type}` extends `${s}${infer PastOne}`
    ? Length<PastOne,[...Counter, 1]>
    : Counter['length']

/**
 * Determine if digit is greater than comparator
 *
 * @example
 * type Greater = GreaterThanDigit<9, 0> // true
 * type Less = GreaterThanDigit<0, 9> // false
 * type Equal = GreaterThanDigit<0, 0> // false
 */
type GreaterThanDigit<
  First extends Numeric,
  Second extends Numeric
> =
  `0123456789` extends
    `${string}${Second}${string}${First}${string}`
  ? true
  : false

/**
 * Determine if numeric value is greater than
 * comparator of equal length
 *
 * @example
 * type Greater = GreaterThanDigits<9, 0> // true
 * type Less = GreaterThanDigits<0, 9> // false
 * type Equal = GreaterThanDigits<0, 0> // false
 * type Multiple = GreaterThanDigits<20, 10> // true
 */
type GreaterThanDigits<
  X extends Numeric,
  Y extends Numeric,
> = `${X}` extends `${infer X1}${infer XRest}`
  ? `${Y}` extends `${infer Y1}${infer YRest}`
    ? X1 extends Y1
      ? GreaterThanDigits<XRest, YRest>
      : GreaterThanDigit<X1, Y1>
    : never
  : GreaterThanDigit<X, Y>

/**
 * Determine if numeric value is greater than
 * comparator of varying length
 *
 * @example
 * type Greater = GreaterThan<9, 0> // true
 * type Less = GreaterThan<0, 9> // false
 * type Equal = GreaterThan<0, 0> // false
 * type Multiple = GreaterThan<20, 10> // true
 * type VaryingLength = GreaterThan<9, 10> // true
 */
type GreaterThan<
  X extends Numeric,
  Y extends Numeric,
  XLen extends number = Length<X>,
  YLen extends number = Length<Y>
> = XLen extends YLen
    ? GreaterThanDigits<X, Y>
    : GreaterThan<XLen, YLen>

type InsertSorted<
  Entries,
  Entry extends Numeric,
  Descending extends boolean = false
> =
  Entries extends [
    infer Current extends Numeric,
    ...infer Rest,
  ]
  // Less than or equal condition if descending flag is false
  ? GreaterThan<Entry, Current> extends Descending
    ? [Entry, ...Entries]
    : [Current, ...InsertSorted<Rest, Entry, Descending>]
  : [Entry]

type Sort<
  Type,
  Descending extends boolean = false,
  Sorted = [],
> =
  Type extends [
    infer Head extends Numeric,
    ...infer Tail,
  ]
  ? Sort<
      Tail,
      Descending,
      InsertSorted<Sorted, Head, Descending>
    >
  : Sorted







// ============== Alternatives ==============
// Bubble Sort
// @KK-AI-LL
type Sort<
  T extends number[],
  B2S extends boolean = false
> =
  B2S extends true
  ? Reverse<BubbleSort<T>>
  : BubbleSort<T>

type BubbleSort<
  T extends number[],
  V extends number = 0
> =
  V extends T['length']
  ? T
  : BubbleSort<
      BubbleSortOnce<T>,
      AddOne<V> & number
    >

type BubbleSortOnce<T extends number[]> =
  T extends [
    infer X extends number,
    infer Y extends number,
    ...infer Rest extends number[]
  ]
  ? GreaterThan<X, Y> extends true
    ? [Y, ...BubbleSort<[X, ...Rest]>]
    : [X, ...BubbleSort<[Y, ...Rest]>]
  : T

type GreaterThan<
  X extends number,
  Y extends number
> =
  NumberToArray<X> extends [
    ...NumberToArray<Y>,
    1,
    ...unknown[]
  ]
  ? true
  : false

type NumberToArray<
  T extends number,
  Acc extends 1[] = []
> =
  Acc['length'] extends T
  ? Acc
  : NumberToArray<T,[...Acc, 1]>

type AddOne<T extends number> = [
  ...NumberToArray<T>,
  1,
]['length']

type Reverse<T extends any[]> =
  T extends [infer X, ...infer R]
  ? [...Reverse<R>, X]
  : []