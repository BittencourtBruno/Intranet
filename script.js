//document.addEventListener('DOMContentLoaded', function() {
    //var elems = document.querySelectorAll('.carousel');
    //var instances = M.Carousel.init(elems, options);

    //var instance = M.Carousel.getInstance(elem);

    //instance.next();
    //instance.next(3); // Move next n times.

    //instance.prev();
    //instance.prev(3); // Move previous n times.

    //instance.set();
    //instance.set(3); // Set to nth slide.

    //instance.destroy();
  //});

  // Activate Carousel
  //$("#myCarousel").carousel();

  // Enable Carousel Indicators
  //$(".item").click(function(){
    //$("#myCarousel").carousel(1);
  //});

  // Enable Carousel Controls
  //$(".left").click(function(){
    //$("#myCarousel").carousel("prev");
  //});

  //$(window).load(function() {
  //$('.flexslider').flexslider({
  //  animation: "slide",
    //animationLoop: false,
    //itemWidth: 210,
    //itemMargin: 5
//  });
//});

//function setaImagem(){
//}
//window.addEventListener("load",setaImagem,false);

<SCRIPT>
<!-- Begin
var day_of_week = new Array('Dom','Seg','Ter','Qua','Qui','Sex','Sab');
var month_of_year = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');

var Calendar = new Date();

var year = Calendar.getYear();       // Retorna o ano
var month = Calendar.getMonth();    // Retorna mes (0-11)
var today = Calendar.getDate();     // Retorna dias (1-31)
var weekday = Calendar.getDay();   // Retorna dias (1-31)

var DAYS_OF_WEEK = 7;    // "constant" para o numero de dias na semana
var DAYS_OF_MONTH = 31;    // "constant" para o numero de dias no mes
var cal;    // Usado para imprimir na tela

Calendar.setDate(1);    // Comecar o calendario no dia '1'
Calendar.setMonth(march);    // Comecar o calendario com o mes atual


var TR_start = '<TR>';
var TR_end = '</TR>';
var highlight_start = '<TD WIDTH="30"><TABLE CELLSPACING=0 BORDER=1 BGCOLOR=DEDEFF BORDERCOLOR=CCCCCC><TR><TD WIDTH=20><B><CENTER>';
var highlight_end   = '</CENTER></TD></TR></TABLE></B>';
var TD_start = '<TD WIDTH="30"><CENTER>';
var TD_end = '</CENTER></TD>';

cal =  '<TABLE BORDER=1 CELLSPACING=0 CELLPADDING=0 BORDERCOLOR=BBBBBB><TR><TD>';
cal += '<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=2>' + TR_start;
cal += '<TD COLSPAN="' + DAYS_OF_WEEK + '" BGCOLOR="#EFEFEF"><CENTER><B>';
cal += month_of_year[month]  + '   ' + year + '</B>' + TD_end + TR_end;
cal += TR_start;

for(index=0; index < DAYS_OF_WEEK; index++)
{

if(weekday == index)
cal += TD_start + '<B>' + day_of_week[index] + '</B>' + TD_end;
else
cal += TD_start + day_of_week[index] + TD_end;
}

cal += TD_end + TR_end;
cal += TR_start;

for(index=0; index < Calendar.getDay(); index++)
cal += TD_start + '  ' + TD_end;

for(index=0; index < DAYS_OF_MONTH; index++)
{
if( Calendar.getDate() > index )
{
  week_day =Calendar.getDay();
  if(week_day == 0)
  cal += TR_start;
  if(week_day != DAYS_OF_WEEK)
  {
  var day  = Calendar.getDate();
  if( today==Calendar.getDate() )
  cal += highlight_start + day + highlight_end + TD_end;
  else
  cal += TD_start + day + TD_end;
  }
  if(week_day == DAYS_OF_WEEK)
  cal += TR_end;
  }
  Calendar.setDate(Calendar.getDate()+1);
}
cal += '</TD></TR></TABLE></TABLE>';

//  MOSTRAR CALENDARIO
document.write(cal);
//  End -->
</SCRIPT>
