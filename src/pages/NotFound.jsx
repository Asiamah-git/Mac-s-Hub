// src/pages/NotFound.jsx
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <section className="py-12 text-center">
      <Helmet>
        <title>Page Not Found | Mac's Hub</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn’t exist. Return to Mac's Hub and explore how we can help your startup succeed."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Page Not Found | Mac's Hub" />
        <meta
          property="og:description"
          content="The page you’re searching for isn’t here. Head back to Mac's Hub to learn more."
        />
        <meta property="og:image" content="/images/newlogo.png" />
        <meta property="og:url" content="https://yourdomain.com/404" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found | Mac's Hub" />
        <meta
          name="twitter:description"
          content="This page doesn’t exist. Visit Mac's Hub homepage instead."
        />
        <meta name="twitter:image" content="/images/newlogo.png" />
      </Helmet>

      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
    </section>
  );
}
