document.addEventListener('DOMContentLoaded', () => {
  const changeLocationButton = document.getElementById('changeLocationButton');
  const changeLocationDropdown = document.getElementById(
    'changeLocationDropdown',
  );
  const handleClick = (event) => {
    changeLocationDropdown.classList.toggle('hidden');
  };

  changeLocationButton.addEventListener('click', handleClick);
});
