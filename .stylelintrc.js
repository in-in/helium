module.exports = {
	extends: ["stylelint-config-recommended-scss", "stylelint-a11y/recommended"],
	plugins: [
		"stylelint-a11y",
		"stylelint-declaration-block-no-ignored-properties",
		"stylelint-order",
		"stylelint-scss",
		"stylelint-use-nesting",
	],
	rules: {
		"declaration-block-no-duplicate-properties": true,
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
		"plugin/declaration-block-no-ignored-properties": true,
		"order/order": [["dollar-variables", "custom-properties", "declarations"]],
		"order/properties-order": [
			[
				"composes",
				"content",
				"position",
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
				"min-width",
				"min-height",
				"max-width",
				"max-height",
				"width",
				"height",
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
				"margin-block-end",
				"margin-block-start",
				"margin-inline",
				"margin-inline-end",
				"margin-inline-start",
				"margin",
				"margin-top",
				"margin-right",
				"margin-bottom",
				"margin-left",
				"padding-block",
				"padding-block-end",
				"padding-block-start",
				"padding-inline",
				"padding-inline-end",
				"padding-inline-start",
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
				"border-spacing",
				"border-collapse",
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
