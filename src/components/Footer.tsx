import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Footer = (props: FooterProps): JSX.Element => (
  <>
		<h3>Sample footer</h3>
	</>
);

export default withDatasourceCheck()<FooterProps>(Footer);
