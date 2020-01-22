// show/hide about box
$(document).ready(function() {
  $("#about").hide();
  // $("#speechbubble").hide();
});
$("#abtbtn").click(function() {
  $("#about").toggle();
});

// english sample text
var sampEN = [
  "This morning I woke up an inch above my bed. Disoriented and still shaking off the dust of sleep, I fumblingly turned on my bedside lamp, which itself was an inch midair above the table, the table’s feet suspended an inch above the floor. Around my room, every object was levitating yet perfectly still, as if suspended buoyant underwater.",
  "Tentatively, I attempted to shift my weight over the side of the bed, the duvet floating up towards the ceiling as I unwrapped myself. The bed was heavy enough that I could grab onto it to get myself upright and carefully lower myself onto the floor. Scraping the carpet with my toes, I was able to clumsily propel myself to the window, opening the blind. The morning sky was filled by an expansive creamish terrain, pockmarked and riddled with divots and horns. Its surface seemed close enough to scrape the radio antennae on the roofs of neighbouring homes, filling the air with a pale otherworldly glow.",
  "Breakfast was difficult. The water for my coffee refused to pour downwards, instead streaming upwards and dissipating into a scalding hot stratum of fog at about eye level, forcing me to hunch over to stop my glasses from clamming up. I cracked some eggs onto the frying pan, where they began to hover in slowly-spinning discs as they fried. The cheese in my fridge all seemed to be sticking magnetically to its ceiling, vibrating with a dull hum.",
  "From the kitchen window I watched as pedestrians grappled unsuccessfully at lampposts to stop themselves from being pulled into the Lagrange between the Earth and the Moon. Frogs flung through the air above the roofs, their jumps having propelled them at unexpected speeds and trajectories, each glassy-eyed face a picture of terror and surprise as they rocketed into the atmosphere. Inverted-flying herons snapped each one up with glee.",
  "As the moon loomed closer and closer, the atmosphere was saturated in an electric-tasting light so lush it seemed like a liquid. The entire contents of the nearby aquarium had floated free of the tanks, forming a silver cloud layer of jellyfish spooling their shiny tendrils, writhing black octopuses, and spider crabs snapping at algae, all punctuated by rod-like vertical eels and shoals of mercury-tinted garfish murmurating as they too were snapped up by the herons.",
  "In a single moment, the golden light was suddenly subsumed by black as the moon seemed to flip over itself to reveal its dark side, receding slowly into the inky sky. No longer projected by the magnetic pull of its gravity, the objects around the room softly descended onto their respective places.",
  "The gradual ombre from the moon’s gravity to the earth’s slowly saturated me enough to make me aware of the weight of my limbs, the afterimage of the warm glow of lunar light still ringing in my head. Everything was now dipped in a deep soporific lacquer, filling ankle-deep around my feet and furniture as I waded back to my bedroom. The windows open, the liquescent essence of night had flooded back into the room, a bathypelagic dark casting a perfect anaesthetic negative of its volume. My body heavy as lead, I could barely stay awake as I lay on the mattress, the gentle hum of the house’s electricity lulling me once more into sleep."
];

// russian sample text
var sampRU = [
  "Этим утром я проснулся на дюйм выше своей кровати. Дезориентированный и все еще стряхивающий пыль со сна, я неуклюже включил свою прикроватную лампу, которая находилась на расстоянии дюйма над столом, а ножки стола были подвешены на дюйм над полом. Вокруг моей комнаты каждый объект парил, но все еще совершенно неподвижен, как будто под водой.",
  "Неуверенно я попытался переместить свой вес через край кровати, одеяло плыло к потолку, когда я развернул себя. Кровать была достаточно тяжелой, чтобы я мог схватиться за нее, чтобы встать и осторожно опуститься на пол. Соскреб ковер с пальцев ног, я смог неуклюже подняться к окну, открывая шторку. Утреннее небо было заполнено обширной кремовой местностью, изрезанной и пронизанной воронками и рогами. Его поверхность казалась достаточно близкой, чтобы царапать радиоантенны на крышах соседних домов, наполняя воздух бледным потусторонним светом.",
  "Завтрак был сложным. Вода для моего кофе отказалась литься вниз, а вместо этого текла вверх и рассеивалась в обжигающем горячем слое тумана на уровне глаз, заставляя меня сгорбиться, чтобы не заткнуть мои очки. Я взломал несколько яиц на сковороде, где они начали парить в медленно вращающихся дисках, пока они жарились. Сыр в моем холодильнике, казалось, магнитно прилипал к потолку, вибрируя с глухим гулом.",
  "Из окна кухни я наблюдал, как пешеходы безуспешно боролись за фонарные столбы, чтобы не дать себя втянуть в Лагранж между Землей и Луной. Лягушки летали по воздуху над крышами, их прыжки приводили их в движение с неожиданной скоростью и траекториями, каждое лицо со стеклянными глазами представляло собой ужас и удивление, когда они взлетали в атмосферу. Перевернутые летающие цапли с радостью схватили каждого из них.",
  "Когда луна приближалась все ближе и ближе, атмосфера была насыщена электрическим вкусом света, таким пышным, что казалось жидкостью. Все содержимое близлежащего аквариума выплыло из резервуаров, образовав серебряный облачный слой с медузами, извергающими блестящие усики, извивающихся черных осьминогов и паукообразных крабов, щелкающих по водорослям, и все они перемежаются вертикальными угрями в виде палочек и косяками ртути. тонированный гарпорчание бормотало, поскольку они также были захвачены цаплями.",
  "В одно мгновение золотой свет внезапно сменился черным, когда луна, казалось, перевернулась, открывая темную сторону, медленно отступая в чернильное небо. Больше не проецируемые магнитным притяжением его гравитации, предметы вокруг комнаты мягко опустились на свои места.",
  "Постепенный омбре от гравитации луны до Земли медленно насыщал меня настолько, что я осознавал вес моих конечностей, остаточное изображение теплого свечения лунного света, все еще звучащего в моей голове. Теперь все было погружено в глубокий снотворный лак, по лодыжке вокруг моих ног и мебели, пока я возвращался в свою спальню. Окна открылись, в комнату снова залилась жидкая ночная сущность, и банипелагическая темнота отразила идеальный анестетик в своем объеме. Мое тело было тяжелым, как свинец, я едва могла заснуть, лежа на матрасе, нежный гул электричества дома снова усыпил меня."
];

// english/russian toggle
$("#l-en").click(function(){
  $(tester1).text(sampEN[0]);
  $(tester2).text(sampEN[1]);
  $(tester3).text(sampEN[2]);
  $(tester4).text(sampEN[3]);
  $(tester5).text(sampEN[4]);
  $(tester6).text(sampEN[5]);
  $(tester7).text(sampEN[6]);
});
$("#l-ru").click(function(){
  $(tester1).text(sampRU[0]);
  $(tester2).text(sampRU[1]);
  $(tester3).text(sampRU[2]);
  $(tester4).text(sampRU[3]);
  $(tester5).text(sampRU[4]);
  $(tester6).text(sampRU[5]);
  $(tester7).text(sampRU[6]);
});

// font size sliders
var size1 = document.getElementById("slider1");
var size2 = document.getElementById("slider2");
var size3 = document.getElementById("slider3");
var size4 = document.getElementById("slider4");
var size5 = document.getElementById("slider5");
var size6 = document.getElementById("slider6");
var size7 = document.getElementById("slider7");
size1.oninput = function() {
  $("#tester1").css("font-size", this.value + "px");
  $("#testercaption1 span#size").text(this.value + "px");
}
size2.oninput = function() {
  $("#tester2").css("font-size", this.value + "px");
  $("#testercaption2 span#size").text(this.value + "px");
}
size3.oninput = function() {
  $("#tester3").css("font-size", this.value + "px");
  $("#testercaption3 span#size").text(this.value + "px");
}
size4.oninput = function() {
  $("#tester4").css("font-size", this.value + "px");
  $("#testercaption4 span#size").text(this.value + "px");
}
size5.oninput = function() {
  $("#tester5").css("font-size", this.value + "px");
  $("#testercaption5 span#size").text(this.value + "px");
}
size6.oninput = function() {
  $("#tester6").css("font-size", this.value + "px");
  $("#testercaption6 span#size").text(this.value + "px");
}
size7.oninput = function() {
  $("#tester7").css("font-size", this.value + "px");
  $("#testercaption7 span#size").text(this.value + "px");
}