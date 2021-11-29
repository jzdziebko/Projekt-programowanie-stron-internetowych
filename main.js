var globSil = 0;
var globZre = 0;
var globKon = 0;
var globInt = 0;
var globWie = 0;
var globCha = 0;
function updateSil(x) 
{
    const input = document.getElementById('cstr')
    const output = document.getElementById('modS');
    let y=Math.floor((input.value-10+globSil)/2);
    output.textContent = y;
}
function updateZre(x) 
{
    const input = document.getElementById('cdex')
    const output = document.getElementById('modZ');
    let y=Math.floor((input.value-10+globZre)/2);
    output.textContent = y;
}
function updateKon(x) 
{
    const input = document.getElementById('ccon')
    const output = document.getElementById('modK');
    let y=Math.floor((input.value-10+globKon)/2);
    output.textContent = y;
}
function updateInt(x) 
{
    const input = document.getElementById('cint')
    const output = document.getElementById('modI');
    let y=Math.floor((input.value-10+globInt)/2);
    output.textContent = y;
}
function updateWie(x) 
{
    const input = document.getElementById('cwis')
    const output = document.getElementById('modM');
    let y=Math.floor((input.value-10+globWie)/2);
    output.textContent = y;
}
function updateCha(x) 
{
    const input = document.getElementById('ccha')
    const output = document.getElementById('modC');
    let y=Math.floor((input.value-10+globCha)/2);
    output.textContent = y;
}
document.getElementById("rasa").addEventListener('click', updateRas());
function updateRas()
{
    //zdaję sobie sprawę, że to bardzo nieoptymalne rozwiązanie, ale z jakiegoś powodu switch case nie chciał działać
    var rasa = document.getElementById("rasa");
    if(rasa.value = "dwf")
    {
        window.prompt("dwf");
        globSil = 2;
        globZre = 0;
        globKon = 2;
        globInt = 0;
        globWie = 0;
        globCha = 0;
    }else if(rasa.value = "elf")
    {
        window.prompt("Elf");
        globSil = 0;
        globZre = 2;
        globKon = 0;
        globInt = 1;
        globWie = 0;
        globCha = 0;
    }else if(rasa.value = "hlg")
    {
        window.prompt("halfling");
        globSil = 0;
        globZre = 2;
        globKon = 0;
        globInt = 0;
        globWie = 0;
        globCha = 1;
    }else if(rasa.value = "hmn")
    {
        globSil = 1;
        globZre = 1;
        globKon = 1;
        globInt = 1;
        globWie = 1;
        globCha = 1;
    }else
    {
        globSil = 0;
        globZre = 0;
        globKon = 0;
        globInt = 0;
        globWie = 0;
        globCha = 0;
    }
}