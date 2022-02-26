export default function(context){
  if(!sessionStorage.getItem('SESSION')){
      context.redirect("/intro")
  }
}
