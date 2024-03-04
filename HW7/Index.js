fetch("./user.json")
    .then((v) => v?.json())
    .then((v) => {
        console.log("RESULT => ", v)
        const div1 = document.createElement("div")
        div1.append(v.data.name)
    })