import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SeoProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  type = 'website', 
  image,
  url
}) => {
  const { t } = useTranslation();
  
  const siteName = t('collegeName', { defaultValue: 'College Ilia' });
  const defaultTitle = t('collegeName', { defaultValue: 'College Ilia' });
  const defaultDescription = t('home.heroSubtitle', { defaultValue: 'College Ilia offers modern professional education programs.' });
  // Default image is the college logo
  const defaultImage = 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/CollegeNewWebsiteMandatory/collegeLogo_1_30.png';

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default Seo;
