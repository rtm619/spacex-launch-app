import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Metadata = ({
  pageTitle, metaTitle, metaDescription, metaKeywords,
}) => (
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="title" content={metaTitle} />
    <meta name="description" content={metaDescription} />
    <meta name="keywords" content={metaKeywords} />
  </Helmet>
);

Metadata.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string,
  metaKeywords: PropTypes.string,
};

Metadata.defaultProps = {
  metaDescription: '',
  metaKeywords: '',
};

export default Metadata;
