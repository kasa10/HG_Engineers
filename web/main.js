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

	const radio2 = document.querySelector('.radio2');
	radio2.addEventListener('click', () => {
		// radio2.classList.toggle('radio2');

		if ( document.querySelector('.txt2').style.display=='none')
		{
			document.querySelector('.txt2').style.display='inline-block';
			document.querySelector('.txt1').style.display='none';
		}
		else {
			document.querySelector('.txt2').style.display = 'none';
			document.querySelector('.txt1').style.display='inline-block';
		}

	});

}());
























