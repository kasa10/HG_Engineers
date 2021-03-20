(function () {
	const burger = document.querySelector('.burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');

		if ( document.querySelector('.burger_bl').style.display=='none')
		{
			document.querySelector('.burger_bl').style.display='block';
			document.querySelector('.map2').style.width='1000px';
		}
		else {
			document.querySelector('.burger_bl').style.display = 'none';
			document.querySelector('.map2').style.width = '1300px';
		}

	});
}());






















