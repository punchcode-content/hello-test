function hello(name) {
    if (!name) {
        return "Hello!"
    }
    return "Hello, " + name + "!"
}

module.exports = hello