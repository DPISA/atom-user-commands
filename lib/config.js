( function( module ) {
	module.exports = {
		commands: {
			type: 'array',
			default: [],
			items: {
				type: 'object',
				properties: {
					name: {
						type: 'string'
					},
					selector: {
						type: 'string',
						default: 'atom-workspace'
					},
					command: {
						type: 'string'
					},
					arguments: {
						type: 'array',
						default: [],
						items: {
							type: 'string',
						}
					},
					options: {
						type: 'object',
						properties: {
							cwd: {
								type: 'string'
							}
						},
						default : {}
					}
				}
			},
			title: '[{ selector : "", command : "", options: ""}]',
			description: 'Variables are {priject}, {path}, and {absPath}'
		}
	}
} )( module );
