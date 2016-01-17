module.exports = {
  clean: ["<%= path.js %>/*.js", "!<%= path.js %>/*.min.js"],
  options: {
    force: true
  }
}