import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

// type FooterProps = ComponentProps & {
//   fields: {
//     heading: Field<string>;
//   };
// };

const Footer = (props: any): JSX.Element => {
  console.log(props);
  return (
    <>
      <h3>Sample footer</h3>
    </>
  );
}

export default withDatasourceCheck()<any>(Footer);
