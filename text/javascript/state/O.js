
export default (
    (t) => ({
        m: (
            (t = (localStorage.getItem("3")))
            ? parseInt(t)
            : (
                localStorage.setItem("3","0"),
                0
            )
        ),
        vd: (
            localStorage.getItem("2")
            ||
            ""
        ),
        md: (
            localStorage.getItem("4")
            ||
            ""
        ),
    })
)("");