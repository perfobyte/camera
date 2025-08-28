

export var
    mimeType = "video/webm; codecs=vp8,opus",
    videoType = "video/webm; codecs=vp8",

    vdi = { exact:"" },
    mdi = { exact:"" },

    perm_cm = {name:"camera"},
    perm_mc = {name:"microphone"},

    ch = {a:null},
    
    current = {
        a: null,
        b: null,
    },

    start_o = { video: true, audio: true },
    start_v_o = { video: true, audio: false },

    vd_o = { type: mimeType },
    vdcf = { mimeType },
    
    audio = { deviceId: mdi },
    video = { deviceId: vdi },

    only_v_o = { video, audio:false },
    o = { video, audio }
;
