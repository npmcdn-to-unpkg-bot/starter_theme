module.exports = {
	main: {
		options: {
			mode: 'zip',
			archive: './release/project.<%= pkg.version %>.zip'
		},
		expand: true,
		cwd: 'release/<%= pkg.version %>/',
		src: ['**/*'],
		dest: 'project/'
	}
};