/**
* Author: Guillermo David Paredes Torrez
* Email: gdavid.ptorrez@gmail.com
*/

//  Creacion de nuestra clase Fecha Actual
class fechaActual{

	_options = {

		formato: 'dd/mm/yyyy',
		fechaActual : '25/02/1991'
	}
	

	let ObtenerFechaACtual = function(formatoFecha){

		if(typeof formatoFecha === 'undefined') && _options.formato || _options.formato = formatoFecha;

		let _objetoDate = new Date();

		let _objetoDateGeneral = {
			diaActual : _objetoDate.getDay(),
			mesActual : _objetoDate.getMonth(),
			anioActual : _objetoDate.getYear()
		}

		

		switch (formatoFecha){

			case 'dd/mm/yyyy':
				_options.fechaActual = _objetoDateGeneral.diaActual + '/' + _objetoDateGeneral.mesActual  '/' + _objetoDateGeneral.anioActual;
				console.log('dd/mm/yyyy');
			break;
			case 'dd/yyyy/mm':
			_options.fechaActual = _objetoDateGeneral.diaActual + '/' + _objetoDateGeneral.anioActual  '/' + _objetoDateGeneral.mesActual;
				console.log('dd/yyyy/mm');
			break;
			case 'mm/dd/yyyy':
			_options.fechaActual = _objetoDateGeneral.mesActual + '/' + _objetoDateGeneral.diaActual  '/' + _objetoDateGeneral.anioActual;
				console.log('dd/mm/yyyy');
			break;
			case 'mm/yyyy/dd':
			_options.fechaActual = _objetoDateGeneral.mesActual + '/' + _objetoDateGeneral.anioActual  '/' + _objetoDateGeneral.diaActual;
				console.log('dd/mm/yyyy');
			break;
			case 'yyyy/dd/mm':
			_options.fechaActual = _objetoDateGeneral.anioActual + '/' + _objetoDateGeneral.diaActual  '/' + _objetoDateGeneral.mesActual;
				console.log('dd/mm/yyyy');
			break;
			case 'yyyy/mm/dd':
			_options.fechaActual = _objetoDateGeneral.anioActual + '/' + _objetoDateGeneral.mesActual  '/' + _objetoDateGeneral.diaActual;
			;
				console.log('dd/mm/yyyy');
			break;
		}

		return _options.fechaActual;
	}



}