
var
    cm_sh_el = document.getElementById("cm_sh")
;

export var
    camera = document.getElementById("camera"),
    camera_cl = camera.classList,

    cm_sh = cm_sh_el.classList,
    cm_sh_bt = cm_sh_el.querySelector("button"),

    cm_aud = document.getElementById("cm_aud"),
    cm_aud_cl = cm_aud.classList,
    cm_aud_ul = cm_aud.querySelector("ul"),

    cm_au = document.getElementById("cm_au"),
    cm_au_cl = cm_au.classList,

    tmpl = document.querySelector("template").content,

    AUDV = tmpl.querySelector(".audv"),

    cm_ts = document.getElementById("cm_ts"),
    cm_ts_cl = cm_ts.classList,

    cm_pl_cl = document.getElementById("cm_pl").classList,

    cm_pa = document.getElementById("cm_pa"),

    V = camera.querySelector("video"),

    ce1 = document.querySelector("#cm_ce > :nth-child(1)"),
    ce2 = document.querySelector("#cm_ce > :nth-child(2)"),

    api = document.getElementById("ap").children,

    canvas = api[2]
;