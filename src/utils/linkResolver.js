exports.linkResolver = function linkResolver(doc) {
  // Route for blog posts
  if (doc.type === "article") {
    return "/article/" + doc.uid
  }

  // Homepage route fallback
  return "/"
}
