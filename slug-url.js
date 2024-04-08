function slugify(text) {
    return text
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading and trailing whitespace
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove non-word characters except hyphens
      .replace(/--+/g, '-'); // Replace consecutive hyphens with a single hyphen
  }
  
  const storyTitle = "7 Essential JavaScript Utility Functions for Your Web Projects!";
  const slugifiedTitle = slugify(storyTitle);
  console.log(slugifiedTitle); 
