export const findExistingTags = (tagToFind, tags) => {
  const regex = new RegExp(`${tagToFind}.*`, 'i');
  return tagToFind && tags?.filter(tag => regex.test(tag.value));
};

export const findThisTag = (tagToFind, tags) =>
  tagToFind && tags?.filter(tag => tagToFind.toLowerCase() === tag.value.toLowerCase());

export const createOrFindTags = (tags, tagToCreate) => {
  const tagsFiltered = findExistingTags(tagToCreate, tags);
  if (tagsFiltered && tagsFiltered.length > 0) {
    return tagsFiltered[0];
  }
  return {
    id: undefined,
    value: tagToCreate,
  };
};
