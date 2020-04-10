_06 April 2020_
# Lazy Dynamic-Programming for Edit Distance
_I recently stumbled upon the edit distance problem again while working on an [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.6/query-dsl-fuzzy-query.html) problem at work. It gave me fond memories of the wonder and joy of studying algorithms. However well-trodden a path, another clever "trick" lies waiting to be found. Using the power of lazy evaluation to solve the edit distance problem is a beautiful rendition of an old favourite, yet current problem._

_Based on the paper [Lazy Dynamic-Programming Can be Eager](http://users.monash.edu/~lloyd/tildeStrings/Alignment/92.IPL.html) by Dr. L. Allison (1992)._

## The Problem
Given 2 strings A and B, find the Levenshtein distance, the minimum number of point-mutations (delete, insert, substitutions) required to transform them into identical strings.

For example, the word pair ("cgggtatccaa", "ccctaggtccca") has an edit distance of 6

- DEL a[1] "g" -> "cggtatccaa"
- SUB a[1] "g" for "c" -> "ccgtatccaa"
- SUB a[2] "g" for "c" -> "ccctatccaa"
- INS a[5] "g" -> "ccctagtccaa"
- INS a[6] "g" -> "ccctaggtccaa"
- SUB a[10] "a" for "c" -> "ccctaggtccca"
  
Note that there may be multiple sets of point-mutations that arrive at the same solution.

The edit distance problem is useful in a variety of applications including DNA sequencing, spell-check, and spam filtering.

The following code samples are provided in Python where applicable and Haskell to demonstrate the constrast between the imperative and functional solutions.

## Subproblems

The solution to this problem comes from the insight that the cost of mutating a string can be minimised by taking the fewest mutations required for `a[:1], a[:2]..,a`. Note that a similar principle applies if we check from the last character of the string `a[-1], a[-2:].., a`.

To take the example above, ("cgggtatccaa", "ccctaggtccca"), if we start from the last character of either string, conversion of (`a[-1]`, `b[-1]`), ("a", "a") requires a cost of 0. Then looking at  (`a[-2:]`, `b[-2:]`), ("aa", "ca"), the cost relies on the cost of the previous comparison, ("a", "a") and potential additions or deletions ("", "a"), ("a", ""). The last 2 are our base cases at cost 1.

From this insight, we derive the following rules:

- The cost of converting substrings of a to b to each other is not incremented if the strings are of the same length and the characters being examined match. 
- In all other cases, a point-mutation is required so 1 is added to the minimum of 3 costs.

## Naive Solution: O(3<sup>N</sup>)
_where N = min(|A|, |B|)._

By checking all possible mutations recursively, we can incrementally build to the solution for the entire string. So far nothing special between either implementations.

### Python Implementation
```py
def edit_distance_rec(a, b):
    if len(a) == 0:
        return len(b)
    if len(b) == 0:
        return len(a)
    if a[-1] == b[-1]:
        return edit_distance_rec(a[:-1], b[:-1])
    else:
        return 1 + min(edit_distance_rec(a[:-1], b),
                       edit_distance_rec(a, b[:-1]),
                       edit_distance_rec(a[:-1], b[:-1]))
```

### Haskell Implementation
```hs
recursiveEd :: String -> String -> Int
recursiveEd [] b = length b
recursiveEd a [] = length a
recursiveEd a b =   let tailA = tail a
                        tailB = tail b
                    in
                        if (head a) == (head b) then (recursiveEd tailA tailB) 
                        else 1 + minimum [recursiveEd tailA tailB, recursiveEd tailA b, recursiveEd a tailB]
```

## Tabular Dynamic Programming (O(|A| * |B|))
The previous solution works but is slow as there are recurring sub-problems that are not exploited. Dynamic programming is typically used to cache these previous edit values to avoid re-computation.

![](md-assets/inkedtable.jpg)

### Python Implementation
```py
def edit_distance(a, b):
    memo = [[0] * (len(a)+1) for _ in range(len(b)+1)]
    memo[0] = [x for x in range(len(a)+1)]
    for i, row in enumerate(memo):
        row[0] = i
    for i in range(1, len(b)+1):
        for j in range(1, len(a)+1):
            if b[i-1] == a[j-1]:
                memo[i][j] = memo[i-1][j-1]
            else:
                memo[i][j] = min(memo[i-1][j]+1, memo[i][j-1]+1, memo[i-1][j-1]+1)
    return memo[-1][-1], memo
```

### Intuitive but Slow Haskell Implementation
DP in a functional language with immutable variables utilises the caching property of unevaluated values, [thunks](https://wiki.haskell.org/Thunk) in Haskell. Each row is built recursively by taking as input the previous row, the row count, and character being compared.

A better in-depth explanation of how DP problems are implemented in Haskell can be found [here](http://travis.athougies.net/posts/2018-05-05-dynamic-programming-is-recursion.html). 

```hs
dynProgEdSlow :: String -> String -> Int
dynProgEdSlow [] b = length b
dynProgEdSlow a [] = length a
dynProgEdSlow a b = 
    let 
        nextRow :: [Int] -> Char -> [Int]
        nextRow prevRow ac = 
            let diagonals = zipWith (\bc v -> if bc == ac then v-1 else v) b prevRow
                lefts = thisRow
                ups = tail prevRow
                mins = zipWith min diagonals $ zipWith min lefts ups
                rowCount = head prevRow + 1
                thisRow = rowCount:zipWith (\min bc -> min + 1) mins b
            in thisRow
        table = [0..length b]:zipWith nextRow table a
    in last $ last table
```

### Suggested Haskell Implementation
This is a copy of the implementation provided in the original paper.
```hs
dynProgEd :: String -> String -> Int
dynProgEd [] b = length b
dynProgEd a [] = length a
dynProgEd a b = 
    let 
        nextRows :: [Int] -> [Char] -> [[Int]]
        nextRows _ [] = []
        nextRows prevRow (ax:axs) = 
            let 
                doRow :: [Char] -> [Int] -> Int -> [Int]
                doRow [] _ _ = []
                doRow (bx:bxs) (nw:n) w =
                    let me = if ax == bx then nw 
                        else 1 + min3 w nw (head n)
                    in me:doRow bxs n me
                firstElement = 1 + (head prevRow)
                thisRow = firstElement:(doRow b prevRow firstElement)
            in thisRow:nextRows thisRow axs
        table = [0..length b]:nextRows (head table) a
    in last $ last table
```

```hs
min3 :: Ord a => a -> a -> a -> a
min3 a b c = min a $ min b c
```

## Lazy Dynamic Programming O(|A| * (1 + D A B)) 
### Haskell Implementation
This is a copy of the implementation provided in the original paper.
```hs
lazyDynProgEd :: String -> String -> Int
lazyDynProgEd [] b = length b
lazyDynProgEd a [] = length a
lazyDynProgEd a b = 
    let mainDiag = oneDiag a b (head uppers) (-1:(head lowers))
        uppers = eachDiag a b (mainDiag:uppers)
        lowers = eachDiag b a (mainDiag:lowers)
        oneDiag :: String -> String -> [Int] -> [Int] -> [Int]
        oneDiag a b diagAbove diagBelow =
            let 
                doDiag :: String -> String -> Int -> [Int] -> [Int] -> [Int]
                doDiag [] _ _ _ _ = []
                doDiag _ [] _ _ _ = []
                doDiag (ax:axs) (bx:bxs) nw n w =
                    let me = if ax == bx then nw
                        else 1 + specialMin3 (head w) nw (head n)
                    in me:(doDiag axs bxs me (tail n) (tail w))
                firstElement = 1 + head diagBelow
                thisDiag = firstElement:(doDiag a b firstElement diagAbove (tail diagBelow))
            in thisDiag
        eachDiag :: String -> String -> [[Int]] -> [[Int]]
        eachDiag a [] diags = []
        eachDiag a (bx:bxs) (lastDiag:diags) =
            let nextDiag = head $ tail diags
            in (oneDiag a bxs nextDiag lastDiag):(eachDiag a bxs diags)
        lengthDiff = (length a) - (length b)
    in last (if lengthDiff == 0 then mainDiag 
    else if lengthDiff > 0 then (lowers !! (lengthDiff-1)) 
    else (uppers !! (abs (lengthDiff)-1)))
```

```hs
specialMin3 :: Ord a => a -> a -> a -> a
specialMin3 a b c = if a < b then a else min b c
```

## References
Allison, L. (1992). Lazy dynamic-programming can be eager. Information Processing Letters, 43(4), 207-212. doi:10.1016/0020-0190(92)90202-7