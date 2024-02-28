const { execSync } = require('child_process');

// Config file: https://www.11ty.dev/docs/config/
module.exports = function(eleventyConfig) {
    // Add style sheet as passthrough copy: https://www.11ty.dev/docs/copy/
    // Copy src/style.css to build/src/style.css
    eleventyConfig.addPassthroughCopy("./src/style.css")
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addFilter('firstCommitDate', function (file) {
    try {
      const command = `git log --reverse --pretty=format:"%ad" --date=short -- ${file} | head -1`;
      const firstCommitDate = execSync(command).toString().trim();
      return firstCommitDate;
    } catch (error) {
      console.error(`Error getting first commit date for file ${file}:`, error);
      return '';
    }
  });

  eleventyConfig.addFilter('lastCommitDate', function (file) {
    try {
      const command = `git log --pretty=format:"%ad" --date=short -- ${file} | head -1`;
      const lastCommitDate = execSync(command).toString().trim();
      return lastCommitDate;
    } catch (error) {
      console.error(`Error getting first commit date for file ${file}:`, error);
      return '';
    }
  });

  eleventyConfig.addFilter('htmlDateString', function (dateObj) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    var s = new Date(dateObj).toLocaleDateString('en-US', options);
    return s;
  });

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