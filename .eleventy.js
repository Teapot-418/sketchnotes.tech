module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('*.css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('assets');

    const markdown = require('markdown-it');
    const markdownAttributes = require('markdown-it-attrs');
    const markdownLibrary = markdown().use(markdownAttributes);
    eleventyConfig.setLibrary('md', markdownLibrary);

    const embedYoutube = require('eleventy-plugin-youtube-embed');
    eleventyConfig.addPlugin(embedYoutube);

    const pluginRss = require('@11ty/eleventy-plugin-rss');
    eleventyConfig.addPlugin(pluginRss);
};
