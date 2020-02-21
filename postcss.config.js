module.exports = {
    parser: require('postcss-comment'),
    plugins: [
        require('postcss-import'),
        require('postcss-media-variables'),
        require('postcss-custom-media'),
        require('postcss-variables'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-media-variables'),
        require('postcss-media-minmax'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-current-selector'),
        require('autoprefixer'),
        require('postcss-inline-svg'),
        require("postcss-selector-not"),
        require('postcss-url')({
            url: "rebase"
        }),
        require('postcss-font-magician')({
            variants: {
                'Reenie Beanie': {
                }
            },
            foundries: ['google'],
            hosted: ['./src/fonts', './shared/fonts']
        })
    ]
}



