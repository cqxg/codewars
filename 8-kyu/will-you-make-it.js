const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump - mpg * fuelLeft <= 0 ? true : false;
