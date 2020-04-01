module.exports = {
	"extends": "eslint:all",
	"parserOptions": {
		"ecmaVersion": 6
	},
	"rules": {
		// Possible Errors
		"for-direction": "warn",						// Backwards loops can be perfectly fine in some situations
		"no-console": "warn",
		"no-constant-condition": "warn",				// Useful for debugging, e.g. replace condition with true
		"no-empty": "warn",								// Empty blocks might exist while actively developing and making a test build to check a specific feature
		"no-extra-parens": 0,							// Extra parenthesis can be useful to make calculations easier to read for humans and are unulikely to cause bugs
		"no-unreachable": "warn",						// Useful for debugging, e.g. skip a part of the code while testing
		"no-unsafe-negation": ["error", {
			"enforceForOrderingRelations": true
		}],
		"valid-typeof": ["error", {						// Enforce string comparision in typeof expression
			"requireStringLiterals": true
		}],
		
		// Best Practices
		"consistent-return": "warn",					// See 'no-unreachable'
		"curly": 0,										// No rule supports the prefered brace style
		"default-case": 0,								// Default case might be omitted without a comment
		"dot-location": "warn",
		"eqeqeq": 0,									// Only use === if necessary, not always
		"guard-for-in": "warn",
		"max-classes-per-file": "warn",					// Small helper classes are allowed inside a single file
		"no-empty-function": "warn",					// Empty functions might exist while prototyping, so only warn to allow debug builds
		"no-magic-numbers": 0,							// This rule is more annoying than useful
		"no-param-reassign": 0,							// Redefining parameters can make the code easier to understand, as no other variable has to be defined, e.g. when clamping a value
		"no-return-assign": 0,
		"no-warning-comments": "warn",
		"prefer-named-capture-group": 0,				// Stick with classic RegExes for now
		"radix": ["error", "as-needed"],				// This style targets ES 6, so we don't need to always specify the radix
		"require-unicode-regexp": 0,					// Stick with classic RegExes for now
		
		// Strict Mode
		"strict": 0,
		
		// Variables
		"no-shadow": ["error", {
			"builtinGlobals": true,
			"hoist": "functions",
			"allow": [] 
		}],
		"no-undef": ["warn", {
			"typeof": true
		}],
		"no-undefined": 0,								// We use the alternative way (no-global-assign, no-shadow-restricted-names) to prevent shadowing undefined
		"no-unused-vars": "warn",
		"no-use-before-define": ["error", "nofunc"],	// 'Function declarations are hoisted, so it's safe'
		
		// Node.js and CommonJS
		"no-sync": "warn",
		
		// Stylistic Issues
		"array-bracket-newline": ["error", "consistent"],
		"array-element-newline": 0,
		"brace-style": ["error", "stroustrup"],
		"capitalized-comments": ["warn", "always", {
			"ignoreConsecutiveComments": true,
			"ignorePattern": "console"
		}],
		"consistent-this": ["error", "self"],
		"eol-last": ["warn", "never"],
		"func-names": ["error", "as-needed"],			// This style targets ES 6, so we can make use of the automatically assigned 'name' property
		"func-style": 0,
		"function-call-argument-newline": ["error", "consistent"],
		"id-length": 0,									// Single-letter names sometimes make sense, e.g. sort((a, b) => a - b) or color.r
		"indent": ["warn", "tab", {
			"SwitchCase": 1,
			"VariableDeclarator": "first",
			"FunctionDeclaration": {
				"parameters": "first"
			},
			"FunctionExpression": {
				"parameters": "first"
			},
			"CallExpression": {
				"arguments": "first"
			},
			"ignoreComments": true
		}],
		"line-comment-position": 0,
		"lines-around-comment": ["warn", {
			"beforeBlockComment": true,
			"beforeLineComment": true,
			"allowBlockStart": true,
			"allowObjectStart": true,
			"allowArrayStart": true,
			"allowClassStart": true,
			"ignorePattern": "console"
		}],
		"max-depth": ["warn", 5],
		"max-len": ["warn", {
			"code": 175
		}],
		"max-lines": ["warn", {
			"max": 300,
			"skipBlankLines": true,
			"skipComments": true
		}],
		"max-lines-per-function": ["warn", {
			"max": 100,
			"skipBlankLines": true,
			"skipComments": true
		}],
		"max-params": ["warn", 5],
		"max-statements": ["warn", 50],
		"multiline-comment-style": ["error", "separate-lines"],
		"multiline-ternary": ["error", "always-multiline"],
		"no-bitwise": "warn",
		"no-continue": 0,
		"no-inline-comments": 0,
		"no-mixed-operators": 0,
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multiple-empty-lines": ["warn", {
			"max": 2,
			"maxEOF": 0,
			"maxBOF": 0
		}],
		"no-plusplus": 0,
		"no-tabs": 0,
		"no-ternary": 0,
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", {
			"allowAllPropertiesOnSameLine": true
		}],
		"one-var": 0,
		"padded-blocks": ["warn", "never"],
		"prefer-exponentiation-operator": 0,
		"prefer-object-spread": "warn",
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["warn", "double", {
			"avoidEscape": true
		}],
		"semi": ["error", "always"],
		"sort-keys": 0,
		"sort-vars": 0,
		"space-before-function-paren": ["error", "never"],
		"space-infix-ops": 0,							// Ternary operators should be in the form 'condition? if: else'
		"spaced-comment": "warn",
		"wrap-regex": 0,
		
		// ECMAScript 6
		"generator-star-spacing": ["error", "after"],
		"object-shorthand":  0,
		"prefer-arrow-callback": "warn",
		"prefer-const": 0,
		"prefer-destructuring": 0,
		"prefer-template": 0,
		"sort-imports": 0								// Instead of sorting alphabetically, this code style prefers two blocks of imports: external plugins and project file imports. Each block should be sorted, but the imports should not be mixed.
	}
};