module.exports = function (eleventyConfig) {
  // Pass through static assets from project root
  eleventyConfig.addPassthroughCopy({ "media": "media" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
  };
};
