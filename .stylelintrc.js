module.exports = {
	extends: [
		"stylelint-config-standard",
		"stylelint-a11y/recommended",
		"stylelint-config-prettier",
	],
	plugins: [
		"stylelint-a11y",
		"stylelint-declaration-block-no-ignored-properties",
		"stylelint-order",
		"stylelint-scss",
		"stylelint-use-nesting",
	],
	rules: {
		"declaration-block-no-duplicate-properties": true,
		"shorthand-property-no-redundant-values": true,
		"value-keyword-case": "lower",
		"declaration-property-value-blacklist": [
			{
				"/.*/": [/transparent/i],
			},
			{
				message: "Keyword `transparent` is not allowed.",
			},
		],
		"property-no-unknown": [
			true,
			{
				ignoreProperties: ["composes"],
			},
		],
		"length-zero-no-unit": true,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				except: ["first-nested"],
				ignore: ["after-comment"],
			},
		],
		"a11y/no-obsolete-attribute": true,
		"a11y/no-obsolete-element": true,
		"csstools/use-nesting": "always",
		"at-rule-no-unknown": null,
		"scss/at-function-parentheses-space-before": "never",
		"scss/at-import-no-partial-leading-underscore": true,
		"scss/at-import-partial-extension-blacklist": ["scss"],
		"scss/at-mixin-argumentless-call-parentheses": "always",
		"scss/at-rule-no-unknown": true,
		"scss/dollar-variable-no-missing-interpolation": true,
		"scss/double-slash-comment-whitespace-inside": "always",
		"scss/map-keys-quotes": "always",
		"scss/no-duplicate-dollar-variables": true,
		"scss/operator-no-unspaced": true,
		"scss/selector-no-redundant-nesting-selector": true,
		"plugin/declaration-block-no-ignored-properties": true,
		"order/order": [["dollar-variables", "custom-properties", "declarations"]],
		"order/properties-order": [
			[
				"composes",
				"content",
				"position",
				"inset",
				"inset-block",
				"inset-block-start",
				"inset-block-end",
				"inset-inline",
				"inset-inline-start",
				"inset-inline-end",
				"top",
				"right",
				"bottom",
				"left",
				"z-index",
				"display",
				"visibility",
				"grid",
				"grid-template",
				"grid-template-areas",
				"grid-template-rows",
				"grid-template-columns",
				"grid-gap",
				"grid-row-gap",
				"grid-column-gap",
				"grid-auto-rows",
				"grid-auto-columns",
				"grid-auto-flow",
				"grid-row",
				"grid-row-start",
				"grid-row-end",
				"grid-column",
				"grid-column-start",
				"grid-column-end",
				"grid-area",
				"flex",
				"flex-grow",
				"flex-shrink",
				"flex-basis",
				"flex-direction",
				"flex-flow",
				"flex-wrap",
				"justify-content",
				"justify-items",
				"justify-self",
				"align-content",
				"align-items",
				"align-self",
				"place-content",
				"place-items",
				"place-self",
				"order",
				"float",
				"clear",
				"block-size",
				"min-block-size",
				"max-block-size",
				"inline-size",
				"min-inline-size",
				"max-inline-size",
				"width",
				"min-width",
				"max-width",
				"height",
				"min-height",
				"max-height",
				"overflow",
				"overflow-x",
				"overflow-y",
				"shape-outside",
				"shape-margin",
				"shape-image-threshold",
				"clip",
				"clip-path",
				"box-sizing",
				"margin-block",
				"margin-block-start",
				"margin-block-end",
				"margin-inline",
				"margin-inline-start",
				"margin-inline-end",
				"margin",
				"margin-top",
				"margin-right",
				"margin-bottom",
				"margin-left",
				"padding-block",
				"padding-block-start",
				"padding-block-end",
				"padding-inline",
				"padding-inline-start",
				"padding-inline-end",
				"padding",
				"padding-top",
				"padding-right",
				"padding-bottom",
				"padding-left",
				"outline",
				"outline-width",
				"outline-style",
				"outline-color",
				"outline-offset",
				"border",
				"border-block",
				"border-block-width",
				"border-block-style",
				"border-block-color",
				"border-block-start",
				"border-block-start-width",
				"border-block-start-style",
				"border-block-start-color",
				"border-block-end",
				"border-block-end-width",
				"border-block-end-style",
				"border-block-end-color",
				"border-inline",
				"border-inline-width",
				"border-inline-style",
				"border-inline-color",
				"border-inline-start",
				"border-inline-start-width",
				"border-inline-start-style",
				"border-inline-start-color",
				"border-inline-end",
				"border-inline-end-width",
				"border-inline-end-style",
				"border-inline-end-color",
				"border-end-end-radius",
				"border-end-start-radius",
				"border-start-end-radius",
				"border-start-start-radius",
				"border-width",
				"border-style",
				"border-color",
				"border-top",
				"border-top-width",
				"border-top-style",
				"border-top-color",
				"border-right",
				"border-right-width",
				"border-right-style",
				"border-right-color",
				"border-bottom",
				"border-bottom-width",
				"border-bottom-style",
				"border-bottom-color",
				"border-left",
				"border-left-width",
				"border-left-style",
				"border-left-color",
				"border-radius",
				"border-top-left-radius",
				"border-top-right-radius",
				"border-bottom-right-radius",
				"border-bottom-left-radius",
				"border-image",
				"border-image-source",
				"border-image-slice",
				"border-image-width",
				"border-image-outset",
				"border-image-repeat",
				"border-top-image",
				"border-right-image",
				"border-bottom-image",
				"border-left-image",
				"border-corner-image",
				"border-top-left-image",
				"border-top-right-image",
				"border-bottom-right-image",
				"border-bottom-left-image",
				"border-spacing",
				"border-collapse",
				"background",
				"background-color",
				"background-image",
				"background-attachment",
				"background-position",
				"background-position-x",
				"background-position-y",
				"background-clip",
				"background-origin",
				"background-size",
				"background-repeat",
				"box-decoration-break",
				"box-shadow",
				"color",
				"table-layout",
				"caption-side",
				"empty-cells",
				"list-style",
				"list-style-position",
				"list-style-type",
				"list-style-image",
				"quotes",
				"counter-increment",
				"counter-reset",
				"vertical-align",
				"text-align",
				"text-align-last",
				"text-decoration",
				"text-emphasis",
				"text-emphasis-position",
				"text-emphasis-style",
				"text-emphasis-color",
				"text-indent",
				"text-justify",
				"text-outline",
				"text-transform",
				"text-wrap",
				"text-overflow",
				"text-overflow-ellipsis",
				"text-overflow-mode",
				"text-shadow",
				"white-space",
				"word-spacing",
				"word-wrap",
				"word-break",
				"overflow-wrap",
				"tab-size",
				"hyphens",
				"letter-spacing",
				"font",
				"font-family",
				"font-size",
				"font-weight",
				"font-style",
				"font-variant",
				"font-size-adjust",
				"font-stretch",
				"line-height",
				"opacity",
				"filter",
				"resize",
				"cursor",
				"appearance",
				"transition",
				"transition-property",
				"transition-duration",
				"transition-timing-function",
				"transition-delay",
				"transform",
				"transform-origin",
				"animation",
				"animation-name",
				"animation-duration",
				"animation-play-state",
				"animation-timing-function",
				"animation-delay",
				"animation-iteration-count",
				"animation-direction",
				"animation-fill-mode",
				"pointer-events",
				"unicode-bidi",
				"direction",
				"columns",
				"column-span",
				"column-width",
				"column-count",
				"column-fill",
				"column-gap",
				"column-rule",
				"column-rule-width",
				"column-rule-style",
				"column-rule-color",
				"break-before",
				"break-inside",
				"break-after",
				"page-break-before",
				"page-break-inside",
				"page-break-after",
				"orphans",
				"widows",
				"zoom",
				"max-zoom",
				"min-zoom",
				"user-zoom",
				"orientation",
				"user-select",
				"fill",
				"stroke",
			],
			{ unspecified: "bottomAlphabetical" },
		],
	},
}
