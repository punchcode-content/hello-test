const hello = require('../hello');
const assert = require('assert');

describe("hello function", function () {
    it("says hello", function () {
        assert.equal(hello(), "Hello!")
    })

    it("says hello to a specific person", function () {
        assert.equal(hello("Scout"), "Hello, Scout!")
    })
})