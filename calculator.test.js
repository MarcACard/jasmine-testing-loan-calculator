describe('calculateMonthlyPayment()', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 5000, years: 5, rate: 4.5 })).toEqual('93.22');
    expect(calculateMonthlyPayment({ amount: 5534, years: 5, rate: 2 })).toEqual('97.00');
    expect(calculateMonthlyPayment({ amount: 500000, years: 30, rate: 2.1 })).toEqual('1873.20');
  });

  it("should return a result with 2 decimal places", function () {
    const sampleInputs = [
      { amount: 5534, years: 5, rate: 2 },
      { amount: 5000, years: 5, rate: 4.5 }
    ];
    
    for (input of sampleInputs) {
      const payment = calculateMonthlyPayment(input);
      const decimalIndex = payment.indexOf('.');
      const decimalPlaces = payment.length - (decimalIndex + 1);
      
      expect(decimalPlaces).toEqual(2)
    }
  });
})
