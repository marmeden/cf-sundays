// CONSULTA EN DB
// SELECT id FROM carf_vikrentcar_places WHERE name NOT LIKE '%Estación%' AND name NOT LIKE '%hotel%' AND name NOT LIKE '%aeropuerto%'


$(document).ready(function(){       //Error happens here, $ is not defined.
    console.log("hey");

    let start = moment("01-01-2018", "DD-MM-YYYY");
    let end =  moment("31-12-2018", "DD-MM-YYYY");

    var arr = [];
    let tmp = start.clone().day(7);
    if( tmp.isAfter(start, 'd') ){
      arr.push(tmp.format('YYYY-MM-DD'));
    }
    while( tmp.isBefore(end) ){
      tmp.add(7, 'days');
      arr.push(tmp.format('YYYY-MM-DD'));
    }

    var datesString = '';

    for(var i = 0; i<arr.length;i++){
        datesString = datesString + arr[i] + ", ";
    }

    datesString = datesString.substring(0, datesString.length - 1);
    datesString = datesString.substring(0, datesString.length - 1);
    //console.log(arr);

    var places = [1, 3, 8, 11, 18, 22, 23, 30, 31, 35, 38, 41, 43, 45, 47, 55, 57, 58, 60, 64, 65, 66, 68, 69, 70, 74, 75, 80, 82, 87, 88, 89, 90, 91, 93, 95, 98, 99, 100, 102, 107, 108, 109, 111, 112, 115, 116, 119, 125, 127, 129, 133, 140, 142, 144, 145, 146, 147, 155, 156, 157, 158, 159, 160, 161, 162, 163, 165, 166, 167, 171, 172, 174, 177, 179, 180, 181, 182, 183, 186, 189];

    for (var i = 0; i<places.length;i++){
        // for(var j = 0; i<arr.length; i++){
        // 	console.log("in");
        //
        	var hey = $("<p>UPDATE `carf_vikrentcar_places` SET `closingdays` = '"+datesString+"' WHERE id = "+places[i]+";</p>");
        //
        	$("body").append(hey);
        // }


    }
    // function generateString(length){
    //     var text = "";
    //     var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    //
    //     for( var i=0; i < length; i++ )
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));
    //     console.log(text);
    //     return text;
    // }
    //
    // var idInicial = 14975;
    // var iniString = "rg318";
    //
    // var finString = "100";
    // var numCupones = 200;
    //
    //
    // for(i=0;i<numCupones;i++){
    //     console.log(i);
    //     var midString = generateString(8);
    //     var code = iniString+midString+finString;
    //     var myId = idInicial + i;
    //     var myquery = "<p>INSERT INTO `carf_vikrentcar_coupons`(`id`, `code`, `type`, `percentot`, `value`, `datevalid`, `allvehicles`, `idcars`, `mintotord`) VALUES ('"+myId+"','"+code+"','2','2','100.00','','1','','');</p>";
    //                 $("body").append(myquery);
    // }
});
