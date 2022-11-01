module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ts', '.tsx', '.js', '.json'],
					alias: {
						'@global': './src/_global',
						'@components': './src/components',
						'@hooks': './src/hooks',
						'@pages': './src/pages',
						'@routes': './src/routes',
					},
				},
			],
		],
	};
};