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
  "Этим утром я проснулся на дюйм выше своей кровати. Сбитый с толку, и все еще стряхивающий пыль со сна, я нащупывая включил прикроватную лампу, которая, сама по себе, была на расстоянии дюйма над столом, а ножки стола были подвешены на дюйм над полом. Вокруг моей комнаты все объекты парили, но все еще были совершенно неподвижны, как будто под водой.",
  "Неуверенно, я попытался переместить свой вес через край кровати; одеяло плыло к потолку, когда я развернул себя. Кровать была достаточно тяжелой, чтобы я мог схватиться за нее, чтобы встать и осторожно опуститься на пол. Задевая ковер пальцами ног, я смог неуклюже продвинуться к окну, открывая шторку. Утреннее небо было заполнено обширным кремовым рельефом, изрезанным и пронизанным дырами и рогами. Поверхность казалась достаточно близкой, чтобы задевать радиоантенны на крышах соседних домов, наполняя воздух бледным потусторонним свечением.",
  "Завтрак дался с трудом. Вода для моего кофе отказалась литься вниз, а вместо этого текла вверх и рассеивалась в обжигающем горячем слое тумана на уровне глаз, заставляя меня сгорбиться, чтобы мои очки прекратили сползать. Я разбил несколько яиц на сковороду, где они начали закручиваться в медленно вращающиеся диски, пока они жарились. Сыр в моем холодильнике, казалось, магнитно прилипал к потолку, вибрируя с приглушенным шумом.",
  "Из окна кухни я наблюдал попытки пешеходов схватиться за фонарные столбы, безуспешные в своей цели не дать себя втянуть в Лагранж между Землей и Луной. Лягушки носились по воздуху над крышами, прыжки придавали их движениям неожиданные скорость и траекторию, и стеклоглазые лица выражали ужас и удивление с каждым взлетом в атмосферу. Цапли, взмахивая крыльями в перевернутом полете, радостно хватали каждую из них.",
  "Когда луна приближалась все ближе и ближе, атмосфера насыщалась электрическим на запах светом, настолько пышным, что казалась жидкостью. Все содержимое ближайшего аквариума выплыло из резервуаров, стрекаясь облаками серебра блестящих усиков медуз, извивающихся черных осьминогов и щелкающих по водорослям паукообразных крабов, которые вертикально перемежались палочкообразными угрями в мельтешащем косяке ртутного блеска сарганов, поскольку они также были захвачены цаплями.",
  "В одно мгновение золотой свет внезапно поглотился черным, когда луна, казалось, перевернулась, чтобы открыть темную сторону, медленно отступая в чернильное небо. Больше не проецируя магнитным притяжением ее гравитации, предметы вокруг комнаты мягко опустились на свои места.",
  "Постепенный омбре распространяющийся от гравитации Луны до гравитации Земли медленно насыщал меня, достаточно, чтобы осознавать вес своих конечностей, пока послеобраз теплого свечения лунного света все еще звучал в моей голове. Теперь все было обмокнутым в глубокий снотворный лак, по шиколотку вокруг моих ног и мебели, возвращаясь в свою спальню. Открыты окна, комнату затопила обратно разжижающаяся ночная эссенция, батипелагическая тьма бросающая совершенный анестезирующий негатив своего объема. Мое тело было тяжелым как свинец, я едва мог оставаться пробужденным пока ложился на матрас, как нежный гул электричества в доме снова усыпил меня."
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