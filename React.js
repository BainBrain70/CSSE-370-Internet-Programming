const e = React.createElement;

function ReactButton(){
	return e(
  	'button',
 	 { onClick: () => alert('My React seems to be working!!!!') },
 	 'React Button'
	);
}


const domContainer = document.querySelector('#React_container');
ReactDOM.render(e(ReactButton), domContainer);
