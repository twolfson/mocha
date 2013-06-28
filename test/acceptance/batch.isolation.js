var assert = require('assert');
describe('One context', function () {
  before(function () {
    console.log('before1');
    this.context = this.context || [];
    this.context.push(1);
  });

  afterEach(function () {
    console.log('local afterEach');
  });

  it('is isolated from other contexts', function () {
    console.log('it1');
    assert.deepEqual(this.context, [1]);
  });

  describe('nested', function () {
    before(function () {
      console.log('before2');
      this.context.push(2);
    });

    afterEach(function () {
      console.log('local afterEach2');
    });

    it('is isolated from other contexts', function () {
      console.log('it3');
      assert.deepEqual(this.context, [1, 2]);
    });

    it('is isolated from other contexts(2)', function () {
      console.log('it4');
      assert.deepEqual(this.context, [1, 2]);
    });
  });

  it('is isolated from other contexts', function () {
    console.log('it1b');
    assert.deepEqual(this.context, [1]);
  });
});

// describe('Another context', function () {
//   before(function () {
//     console.log(this.context);
//     this.context = this.context || [];
//     this.context.push(3);
//   });

//   it('is isolated from the first context', function () {
//     assert.deepEqual(this.context, [3]);
//   });

//   describe('nested', function () {
//     before(function () {
//       this.context.push(4);
//     });

//     it('is isolated from the first context', function () {
//       assert.deepEqual(this.context, [3, 4]);
//     });
//   });

//   it('is isolated from the first context', function () {
//     assert.deepEqual(this.context, [3]);
//   });
// });

afterEach(function () {
  console.log('global afterEach');
  // var key;
  // for (key in this) {
  //   delete this[key];
  // }
});