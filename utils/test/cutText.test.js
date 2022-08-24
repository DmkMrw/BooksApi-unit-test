const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {

  it('should return an error if "content" arg is not a string', () => {
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function() {}, 20)).to.equal('Error');
  });

  it('should return an error if "content" arg length is 0', () => {
    expect(cutText(0, 20)).to.equal('Error');
  });

  it('should return an error if "maxLength" arg is not a number', () => {
    expect(cutText('abc', 'abc')).to.equal('Error');
    expect(cutText('abc', {})).to.equal('Error');
    expect(cutText('abc', [])).to.equal('Error');
    expect(cutText('abc', undefined)).to.equal('Error');
    expect(cutText('abc', function () { })).to.equal('Error');
  });

  it('should return an error if "maxLength" is lower or equal 0', () => {
    expect(cutText('abc', 0)).to.equal('Error')
    expect(cutText('abc', -1)).to.equal('Error')
  });

  it('should return "content" without changes if proper args', () => {
    expect(cutText('abc', 40)).to.equal('abc');
    expect(cutText('abc', 11)).to.equal('abc');
  });

  it('should return good cut "content" if proper args', () => {
    expect(cutText('abc de', 3)).to.equal('abc...')
    expect(cutText('Lorem Ipsum dolor sit amet', 5)).to.equal('Lorem...');
    expect(cutText('Lorem Ipsum dolor sit amet', 14)).to.equal('Lorem Ipsum...');
  });
});