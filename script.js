const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-02", "01-03","01-06"],
    water: ["01-02", "01-03"],
    food: ["01-01","01-04", "01-05"],
    music: ["01-01","01-04", "01-06"],
    rocketseat: ["01-03","01-04", "01-05"],
}

nlwSetup.setData(data)
nlwSetup.load()
