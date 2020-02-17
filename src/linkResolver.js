module.exports = function linkResolver(doc) {
  if (doc) {
    switch (doc.type) {
      case 'pages':
        return `/${doc.uid}`;
      case 'podcast':
        return `/${doc.uid}`;
      case 'team':
        return `/${doc.uid}`;

      default:
        if (doc.uid) {
          return `/${doc.uid}`;
        }

        return `/${doc.type}`;
    }
  }

  return '/';
}