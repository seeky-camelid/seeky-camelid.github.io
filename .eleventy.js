// Config file: https://www.11ty.dev/docs/config/
module.exports = function(eleventyConfig) {
    // Add style sheet as passthrough copy: https://www.11ty.dev/docs/copy/
    // Copy src/style.css to build/src/style.css
    eleventyConfig.addPassthroughCopy("./src/style.css")
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/sass/");
  // Return your Object options:
  return {
    dir: {
      input: "src",     // Site input including all markdown content
      output: "build"   // Generated site output
    },
    markdownTemplateEngine: "njk", // Use nunjucks as template engine (default was liquid)
    htmlTemplateEngine: "njk"      // Use nunjucks as template engine (default was liquid)
  }
};