const getColorSchemeBtn = document.getElementById('get-color-scheme-btn')
const panel1 = document.getElementById('color1')
const panel2 = document.getElementById('color2')
const panel3 = document.getElementById('color3')
const panel4 = document.getElementById('color4')
const panel5 = document.getElementById('color5')
const colorName1 = document.getElementById('name1')
const colorName2 = document.getElementById('name2')
const colorName3 = document.getElementById('name3')
const colorName4 = document.getElementById('name4')
const colorName5 = document.getElementById('name5')


getColorSchemeBtn.addEventListener("click", function(event) {
    event.preventDefault()
    let colorSelector = document.getElementById('select-color').value.substring(1)
    let SchemeSelector = document.getElementById("get-scheme").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector}&mode=${SchemeSelector}&count=5`)
        .then(response=>response.json())
        .then(data=> {
            panel1.style.background = data.colors[0].hex.value
            panel2.style.background = data.colors[1].hex.value
            panel3.style.background = data.colors[2].hex.value
            panel4.style.background = data.colors[3].hex.value
            panel5.style.background = data.colors[4].hex.value
            
            colorName1.textContent = data.colors[0].hex.value
            colorName2.textContent = data.colors[1].hex.value
            colorName3.textContent = data.colors[2].hex.value
            colorName4.textContent = data.colors[3].hex.value
            colorName5.textContent = data.colors[4].hex.value
        }
    )
})
