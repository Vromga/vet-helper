import { AbbrCityAndStreetPipe } from './abbreviation-cities.pipe';

describe('AbbreviationCitiesPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbrCityAndStreetPipe();
    expect(pipe).toBeTruthy();
  });
});
