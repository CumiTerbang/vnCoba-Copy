coba_cerita = [
    label, "coba_cerita",

    scene, {src:"black"},

    box, {pos:"center", back:"none"},
    text, {align:"center", value:"Gitarringsek\nTimunHijau Team", effect:"fade", duration:4},
    text, {align:"center", value:"iseng - iseng aja 2013", effect:"fade", duration:3},
    box, {show:false},

    animation, [ "test",
        2, "dissolve",
        1, "translate 0 -80",
        0.5, "scale 1.05",
        0.5, "translate 0 18"
    ],

    overlay, {src:"ini-gbr/titleCopy.png", effect:"test"},
    scene, {src:"ini-gbr/bg01.jpg", effct:"dissolve"},

    /*preload, ["demo/vina01.png", "demo/vina02.png", "demo/town03.mp3", "demo/town03.ogg", "demo/theend.mp4", "demo/theend.ogv"],*/
    label, "start",
    cform, [ "top_menu", true,
        button, {name:"New Game", x:140, y:166, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "intro"], tip:"Start a new game"	},
        button, {name:"Continue", x:140, y:206, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "restore"], tip:"Continue previous game" },
        button, {name:"Options", x:140, y:247, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "demo_forms#config"], tip:"Set game options" }
    ],
    jump, "start",

    label, "restore",
    cform, "close",
    checkpoint, "load",

    label, "intro",
    cform, "close",
    set, {a:[1,2,3],b:"hello world",$c:1, d:true, e:"random 0 100"},
    set, {b:null},

    scene, {src:"black", effect:"dissolve nowait"},

    overlay, {show:false, effect:"dissolve"},
    set, {_skip_text:false},	/* reserved variable for skipping read text */
    cform, [ "hud", false,
        button, {name:"toggle_skip", x:420, y:192, base:"demo/skip_base.png", hover:"demo/skip_hover.png", click:"demo/skip_click.png", link:[set, {_skip_text:"!"}], showText:false, tip:"Toggle skip read text"},
        button, {name:"snap", x:420, y:234, base:"demo/snap_base.png", hover:"demo/snap_hover.png", click:"demo/snap_click.png", link:[jump, "demo_forms#screenshot"], showText:false, tip:"Take screenshot"},
        button, {name:"opt", x:420, y:276, base:"demo/opt_base.png", hover:"demo/opt_hover.png", click:"demo/opt_click.png", link:[jump, "demo_forms#config"], showText:false, tip:"Game options"},
        marquee, {name:"timer", x:380, y:8, w:80, h:20}
    ],
    box, {pos:"full", back:"image"},
    text, {align:"left", value:"\nTak terasa sekarang aku sudah di bangku SMA"},
    text, {append:true, value:"Ya... kini aku sudah remaja"},
    text, "Banyak hal yang ingin aku coba, tapi sepertinya ada yang harus ku lakukan terlebih dahulu. . .",

    box, {pos:"full", back:"image"},
    text, {align:"left", value:"\n\n\n\nHei! Noval!"},

    box, {pos:"bottom", back:"dim", show:false},
    audio, {bgm:"ini-musik/touhuo"},
    scene, {src:"ini-gbr/bg01.jpg", effect:"dissolve nowait"},
    actor, {id:"Ai", sprite:["Ai-lib", "ini-gbr/aisyahCoba.png"], avatar:["base","ini-gbr/ai_avatar.png"], effect:"dissolve"},
    //"Ai", {effect:"scale 0.6 nowait"},
    text, "...? oh Ai!",
    set, {Vina_level:"+2"},
    text, "(Dia teman dekatku, namanya Aisya Nuraini)",
    box, {pos:"bottom", back:"dim", show:false},
    text, "(Dia sangat manis, tidak heran banyak yang mengidolakannya)",
    box, {pos:"bottom", back:"dim", show:false},
    "Ai", {effect:"none", duration:1},
    checkpoint, "save",
    text, "Ada apa Ai?","Ai", "Ah tidak, mm...",
    "Ai", {say:"a..apakah kau mau menemaniku ke perpus?"},
    menu, ["hmm...",
        "A. Baiklah, mau balikin buku?", "label_yes",
        "B. Sory Ai, lain kali ya.", "label_no" ],

    label, "label_yes",
    "Ai", "*blush*\nm... ya, begitulah",
    "Ai", "tapi mungkin kita agak lama.",
    "Ai", "ada beberapa buku.. yang.. aku ingin pinjam lagi...",
    text, "Kau benar-benar sangat menyukai buku Ai",
    "Ai", "Ah tidak juga",
    "Ai", "*blush*\na..ayo kita kesana",
    text, "Fufufu",
    box, {show:false},
    scene, {src:"ini-gbr/bg02.jpg", effect:"dissolve"},
    "Ai", {say:"Terima kasih Noval telah mau menemaniku", append:false},
    "Ai", "maaf jika disini membosankan",
    box, {pos:"bottom", back:"dim", show:false},
    text, "tidak usah sungkan",
    text, "disini cukup tenang",
    text, "tidak terlalu buruk",
    "Ai", "hei Noval...",
    text, "ya?",
    "Ai", "lain waktu...",
    "Ai", "maukah kau menemaniku lagi?",
    text, "Tentu Ai",
    "Ai", "Benarkah? aku senang sekali Noval",
    text, "(inilah yang aku ingin lakukan)",
    box, {pos:"bottom", back:"dim", show:false},
    text, "(bersama selalu dengan Ai)",
    box, {pos:"bottom", back:"dim", show:false},
    text, "(kuharap dia juga tau apa yg kuinginkan)",
    box, {pos:"bottom", back:"dim", show:false},
    "Ai", {show:false, effect:"dissolve nowait"},
    overlay, {src:"black", effect:"dissolve"},

    box, {pos:"full", align:"center"},
    text, {value:"Story and Art\n\
				Gitarringsek\n\
				(backgroundnya comot dari gugel :v)\n\n\n \
				Sounds\n\
				[Touhou] Native Faith - Jazz Mix -\n\
				http://www.youtube.com/watch?v=m4Z7tDctcrU\n\n\n \
				Scripting\n\
				Gitarringsek\n\
				dibikin pakek VN-Canvas\n\n\n \
				Upcoming on VN-Canvas:\nMore features (e.g. themes)\nMore elements (e.g forms)\nMore effects and animations\n\n\n \
				(Editor's note: Finally, a scrolling credit! Now that's what i'm talkin' about!)\n\n\n \
				VN-Canvas Coba (c) 2013",
        effect:"scroll"},
    audio, {bgm:"ini-musik/touhuo", action:"stop"},
    box, {pos:"full", back:"image"},
    text, {align:"center", value:"\n\n\n\n.: GOOD ENDING :."},
    jump, "end",


    label, "label_no",
    "Ai", "Ah umm... maaf kalau begitu Noval",
    "Ai", "Sampai jumpa Noval...",
    "Ai", {show:false},
    audio, {bgm:"ini-musik/touhuo", action:"stop"},
    text, "(Hal yang aku inginkan terlebih dahulu adalah bersama selalu dengan Ai)",
    //box, {pos:"bottom", back:"dim", show:false},
    scene, {src:"black", effect:"dissolve nowait"},
    text, "(Tapi aku tidak punya keberanian untuk mengungkapkannya)",
    box, {pos:"full", back:"image"},
    text, {align:"center", value:"\n\n\n\n.: BAD ENDING :.", effect:"dissolve", duration:4},
    jump, "end",

    box, {show: false},
    overlay, {src:"black", effect:"fade"},

    label, "end",
    video, {src:"demo/theend"},
    cform, "close",
    set, {c:"+1", a:4},
    jump, "coba_cerita"
];

demo_forms = [
    label, "demo_forms",

    label, "config",
    form, [ "Options",
        fieldset, "left_controls",
        slider, {name:"Audio volume", min:0, max:1, step:0.05, bind:"volumeAudio", tip:"Adjust volume for music and sounds."},
        slider, {name:"Video volume", min:0, max:1, step:0.05, bind:"volumeVideo", tip:"Adjust volume for videos."},
        select, {name:"Theme", options:"themeList", bind:"activeTheme", tip:"Select theme"},
        fieldset, "right_controls",
        checkbox, {name:"Show avatar", bind:"actorShowAvatar", tip:"Show actor avatar on dialog box."},
        checkbox, {name:"Perspective", bind:"actorPerspective", tip:"Emulate depth effect on mouse move."},
        checkbox, {name:"Allow preload", bind:"gameAllowPreload", tip:"Allow background preloading of images."},
        checkbox, {name:"Allow macro", bind:"gameAllowMacro", tip:"Allow custom javascript to execute."},
        checkbox, {name:"Mature filter", bind:"gameMatureFilter", tip:"Filter mature content"},
        fieldset, "bottom_controls",
        submit, {name:"OK"}
    ],
    jump, "return",

    label, "screenshot",
    cform, "hide",
    screen, {snap:"png"},
    cform, "show",
    jump, "return"
];

// Sample actor stats 
Stats.level = {
    _value: [0, 10],
    _update: function (actor, stat) {
        /* message("level up"); */
    }
};
Stats.female = {
    _value: [true, false]
};
Stats.relationship = {
    _value: ["hate", "normal", "trust", "love"]
};