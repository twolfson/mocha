describe('One context', function () {
  before(function () {
    this.context = this.context || [];
    this.context.push(1);
  });

  it('is isolated from other contexts', function () {
    this.context.should.equal([1]);
  });

  describe('nested', function () {
    before(function () {
      this.context.push(2);
    });

    it('is isolated from other contexts', function () {
      this.context.should.equal([1, 2]);
    });
  });

  it('is isolated from other contexts', function () {
    this.context.should.equal([1]);
  });
});

describe('Another context', function () {
  before(function () {
    this.context = this.context || [];
    this.context.push(3);
  });

  it('is isolated from the first context', function () {
    this.context.should.equal([3]);
  });

  describe('nested', function () {
    before(function () {
      this.context.push(4);
    });

    it('is isolated from the first context', function () {
      this.context.should.equal([3, 4]);
    });
  });

  it('is isolated from the first context', function () {
    this.context.should.equal([3]);
  });
});