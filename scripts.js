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
  const { pathname } = window.location;
  let menuItem;
  if (/MapsandSchedules/i.test(pathname)) {
    menuItem = document.querySelector('#mapsAndSchedules svg');
  }
  if (/TraveltoNYC/i.test(pathname)) {
    menuItem = document.querySelector('#travelToNYC svg');
  }
  if (/Tripplanner/i.test(pathname)) {
    menuItem = document.querySelector('#tripPlanner svg');
  }
  if (/PurchaseTickets/i.test(pathname)) {
    menuItem = document.querySelector('#purchaseTickets svg');
  }

  if (menuItem) {
    menuItem.style.fill = '#f19e15';
    console.dir({ menuItem });
  }
};
