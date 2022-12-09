document.addEventListener('DOMContentLoaded', () => {
  handleChangeLocationDropdown();
  handleMobileMenuToggle();
  handleActiveMenuItems();
});
const handleChangeLocationDropdown = () => {
  const changeLocationButton = document.getElementById('changeLocationButton');
  const changeLocationDropdown = document.getElementById(
    'changeLocationDropdown',
  );
  const handleClick = (event) => {
    changeLocationDropdown.classList.toggle('hidden');
  };

  changeLocationButton.addEventListener('click', handleClick);
};
const handleMobileMenuToggle = () => {
  const mobileButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const handleMobileClick = () => {
    mobileMenu.classList.toggle('hidden');
    mobileButton.classList.toggle('open');
  };
  mobileButton.addEventListener('click', handleMobileClick);
};
const handleActiveMenuItems = () => {
  const { pathname, search } = window.location;
  const menuItem =
    document.querySelector(`.white__left [href="${pathname}"] svg`) ||
    document.querySelector(`.white__left [href="${pathname}${search}"] svg`);

  menuItem.style.fill = '#f19e15';
};
