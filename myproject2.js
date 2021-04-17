function makeqst (mp3file, artistnames , thecorrectans){
return {
	mp3file : mp3file,
	artistnames : artistnames,
	thecorrectans : thecorrectans
};
}

var qst1 = makeqst("songs/50-cent-window-shopper_6FlzYOMO(1).mp3",["Eminem","50cent","kendrick Lamar","Snoop dogg"],"50cent")
var qst2 = makeqst("songs/florence-the-machine-stand-by-me_vDc5DzOt.mp3",["Florence and the machine","Celine Dion","Avril Lavigne","London Grammar"],"Florence and the machine")
var qst3 = makeqst("songs/dio-holy-diver_J4eJbIbd.mp3",["Def Leppard","Aerosmith","Ronnie James DIO","Alice Cooper"],"Ronnie James DIO")
var qst4 = makeqst("songs/orden-ogan-gunman_K0OMUo2D.mp3",["ManOWar","Ordan Ogan","Turisas","Powerwolf"],"Ordan Ogan")
var qst5 = makeqst("songs/asian-kung-fu-generation-blood-circulator_bZt42zkI.mp3",["Asian Kung-Fu Generation","DOES","Eve","SpyAir"],"Asian Kung-Fu Generation")
var qst6 = makeqst("songs/radio-gaga-lyrics_esgzl6U9.mp3",["Queen","Kiss","Twisted Sisters","Disturbed"],"Queen")
var qst7 = makeqst("songs/spice-girls-wannabe-lyrics_kENXxIPC.mp3",["T.a.T.u","Spice Girls","jojo","S club 7"],"Spice Girls")
var qst8 = makeqst("songs/bones-of-ribbons_Epc6p5fn.mp3",["London Grammar","Lana Del Rey","Daughter","Birdy"],"London Grammar")
var qst9 = makeqst("songs/powerwolf-demons-are-a-girl-s-best-friend-official-video-napalm-records-1_ZC1upY2s.mp3",["Sabaton","Powerwolf","Nightwish","HammerFall"],"Powerwolf")
var qst10 = makeqst("songs/amy-macdonald-this-is-the-life-lyrics_2FDlwD7p.mp3",["Katie Melua","KT Tunstall","Sia","Amy MacDonald"],"Amy MacDonald")
var qst11 = makeqst("songs/frank-sinatra-fly-me-to-the-moon_Jb1KUHab.mp3",["Johnny Cash","Franck Sinatra","Nat King Cole","Bing Crosby"],"Franck Sinatra")
var qst12 = makeqst("songs/foo-fighters-the-pretender_YGNvy0qH.mp3",["SoundGarden","Kings Of Leon","Pearl Jam","Foo Fighters"],"Foo Fighters")
var qst13 = makeqst("songs/final-fantasy-viii-eyes-on-me-by-faye-wong_RR179lGD.mp3",["Cecilia Cheung","Na Ying","Faye Wong","Sandy Lam"],"Faye Wong")
var qst14 = makeqst("songs/bobby-blue-bland-aint-no-love-in-the-heart-of-the-city-lyrics_S8MjekXk.mp3",["Louis Armstrong","Tony Bennett","Harry Connick, Jr","Bobby Blue Bland"],"Bobby Blue Bland")
var qst15 = makeqst("songs/louis-armstrong-what-a-wonderful-world-lyrics_VB3DSXjG.mp3",["Vic Damone","Louis Armstrong","Dean Martin","Bobby Darin"],"Louis Armstrong")
var qst16 = makeqst("songs/the-killers-read-my-mind-official-music-video_ViAOxQs5.mp3",["The Killers","Survivor","The Kooks","Keane"],"The Killers")
var qst17 = makeqst("songs/the-final-countdown-europe-lyrics_GZH6varP.mp3",["Firehouse","Whitesnake","Europe","Scorpions"],"Europe")
var qst18 = makeqst("songs/sabaton-bismarck-official-music-video_wP68PozO.mp3",["Wind Rose","Turisas","Arch Enemy","Sabaton"],"Sabaton")
var qst19 = makeqst("songs/rem-losing-my-religion-official-music-video_9ZptMDG3.mp3",["The Dream Syndicate","REM","Filthy Friends","Triumph"],"REM")
var qst20 = makeqst("songs/red-hot-chilli-peppers-dani-california-lyrics_SFhn2tRT.mp3",["Red Hot Chilli Peppers","Faith No More","Jane's Addiction","Rage Against The Machine"],"Red Hot Chilli Peppers")
var allmyquestions = [qst1,qst2,qst3,qst4,qst5,qst6,qst7,qst8,qst9,qst10,qst11,qst12,qst13,qst14,qst15,qst16,qst17,qst18,qst19,qst20]

function displayAnswer (array){
for ( var i = 0 ; i < array.length ; i++){
	$("#ans"+i).text(array[i])
}
}

displayAnswer(allmyquestions[0].artistnames)

function bigger(allmyquestions){
	var i = 1
	function GetNext (){
		displayAnswer(allmyquestions[i].artistnames)
		var nextSong = allmyquestions[i].mp3file
		$('#music')[0].src = nextSong
		i++
		}
	return GetNext
}

var nextAnswer = bigger(allmyquestions)
$("#btnChanger").click(function(){
})

var answer;
var changer = 0
$("#ans0").click(function(event){
	CounterAndCheck(event.target.textContent)
})
$("#ans1").click(function(event){
	CounterAndCheck(event.target.textContent)
})
$("#ans2").click(function(event){
	CounterAndCheck(event.target.textContent)
})
$("#ans3").click(function(event){
	CounterAndCheck(event.target.textContent)
})

var mycounter = 0
function CounterAndCheck(answer) {
if(answer === allmyquestions[changer].thecorrectans){
 mycounter = mycounter + 1
}
else {
	mycounter = mycounter - 1
}
console.log (mycounter)

document.getElementById("myscore").innerHTML ="SCORE : " + mycounter + " " +"["+ currentQuestion +"/" +allmyquestions.length + "]"
changer++
currentQuestion++
nextAnswer()
}
var currentQuestion = 2

