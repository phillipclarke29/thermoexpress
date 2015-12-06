describe('Thermo Express', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Thermostat');
    var thermo = element(by.css('value="h2"'));
    expect(thermo.getText()).toEqual("Thermostat");
  });
});
