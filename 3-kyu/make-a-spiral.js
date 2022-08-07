const spiralize = (size) =>
  Array(size)
    .fill(Array(size).fill())
    .map((itemUpper, indexUpper) =>
      itemUpper.map((itemInside, indexInside) =>
        Number(
          (indexUpper < size / 2 &&
            indexUpper % 2 === 0 &&
            indexInside >= indexUpper - 2 &&
            indexInside <= size - indexUpper - 1) ||
            ((size - indexInside) % 2 === 1 &&
              indexUpper > size - indexInside - 1 &&
              indexUpper <= indexInside) ||
            ((size - indexUpper) % 2 === 1 &&
              indexInside > size - indexUpper - 1 &&
              indexInside < indexUpper) ||
            (indexInside % 2 === 0 &&
              indexUpper > indexInside + 1 &&
              indexUpper < size - indexInside)
        )
      )
    );
