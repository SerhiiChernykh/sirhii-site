export const scrollToElementId = (id) => {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuActive.value = false;
  }
};