module.exports = ({options}) => {
	return ({
		plugins: {
			'autoprefixer': options.supportOldBrowsers ? { grid: "autoplace" } : {} ,
			'postcss-preset-env': {},
			'css-mqpacker': {sort: true},
			'cssnano': options.dev ? false : {
				preset: ['default', {
					discardComments: { removeAll: true }
				}]
			},
			'postcss-pxtorem': (options.dev ? false : { replace: true }),
		}
	})
};
