document.addEventListener('DOMContentLoaded', () => {
  const changeLocationButton = document.getElementById('changeLocationButton');
  const changeLocationDropdown = document.getElementById(
    'changeLocationDropdown',
  );
  const handleClick = (event) => {
    changeLocationDropdown.classList.toggle('hidden');
  };

  changeLocationButton.addEventListener('click', handleClick);

  const mobileButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const handleMobileClick = () => {
    mobileMenu.classList.toggle('hidden');
  };
  mobileButton.addEventListener('click', handleMobileClick);
});
