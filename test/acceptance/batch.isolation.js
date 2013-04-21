console.log('aaa');
describe('One context', function () {
  before(function () {
    this.context = '1';
  });

  it('is isolated from other contexts', function () {
    console.log(this.context);
    this.context.should.equal('1');
  });

  describe('nested', function () {
    it('is isolated from other contexts', function () {
      console.log(this.context);
      this.context.should.equal('1');
    });
  });
});

describe('Another context', function () {
  before(function () {
    this.context = '2';
  });

  it('is isolated from the first context', function () {
    console.log(this.context);
    this.context.should.equal('2');
  });

  describe('nested', function () {
    it('is isolated from the first context', function () {
      console.log(this.context);
      this.context.should.equal('2');
    });
  });
});