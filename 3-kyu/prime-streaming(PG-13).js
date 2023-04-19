class Primes {
  static *stream() {
    yield 2;
    yield 3;
    const primes = [2, 3];
    let candidate = 5;
    while (true) {
      let isPrime = true;
      for (let i = 1; primes[i] * primes[i] <= candidate; i++) {
        if (candidate % primes[i] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
        yield candidate;
      }
      candidate += 2;
    }
  }
}

const primeStream = Primes.stream();

for (let i = 0; i < 10; i++) {
  primeStream.next().value;
}
