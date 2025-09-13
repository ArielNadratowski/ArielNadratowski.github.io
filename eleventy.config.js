module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setIncludesDirectory("../_includes");
};