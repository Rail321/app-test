export default () => ( 
  new Promise( ( resolve, reject ) => {
    const item = localStorage.getItem( 'todo' )
    const data = ( item && JSON.stringify( item ) ) || []
    setTimeout( () => {
      Math.random() > .2
        ? resolve( { response: { data: { data } } } )
        : reject( { response: { data: { message: 'Какая-то ошибка!' } } } )
    }, 1000 )
  } )
)