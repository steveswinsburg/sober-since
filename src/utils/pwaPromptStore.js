let savedPrompt = null;

export const setSavedPrompt = (event) => {
  savedPrompt = event;
};

export const getSavedPrompt = () => savedPrompt;
