import { graphql } from 'gatsby';

export const sectionHeadings = graphql`
	fragment sectionHeadings on SectionHeadingsJson {
		id
		subtitle
		title {
			text
			accent
		}
		big
		modifier
		caption
	}
`;

export default sectionHeadings;
