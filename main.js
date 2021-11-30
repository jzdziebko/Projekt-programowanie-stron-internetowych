var globSil = 0;
var globZre = 0;
var globKon = 0;
var globInt = 0;
var globWie = 0;
var globCha = 0;
const prof = 2;
function updateSil(x) 
{
    const input = document.getElementById('cstr')
    const output1 = document.getElementById('modS');
    const output2 = document.getElementById('saveS');
    let y=Math.floor((input.value-10+globSil)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateZre(x) 
{
    const input = document.getElementById('cdex')
    const output1 = document.getElementById('modZ');
    const output2 = document.getElementById('saveZ');
    let y=Math.floor((input.value-10+globZre)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateKon(x) 
{
    const input = document.getElementById('ccon')
    const output1 = document.getElementById('modK');
    const output2 = document.getElementById('saveK');
    let y=Math.floor((input.value-10+globKon)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateInt(x) 
{
    const input = document.getElementById('cint')
    const output1 = document.getElementById('modI');
    const output2 = document.getElementById('saveI');
    let y=Math.floor((input.value-10+globInt)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateWie(x) 
{
    const input = document.getElementById('cwis')
    const output1 = document.getElementById('modM');
    const output2 = document.getElementById('saveM');
    let y=Math.floor((input.value-10+globWie)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateCha(x) 
{
    const input = document.getElementById('ccha')
    const output1 = document.getElementById('modC');
    const output2 = document.getElementById('saveC');
    let y=Math.floor((input.value-10+globCha)/2);
    output1.textContent = y;
    output2.textContent = y;
}
function updateD()
{
    globSil = 2;
    globZre = 0;
    globKon = 2;
    globInt = 0;
    globWie = 0;
    globCha = 0;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateE()
{
    globSil = 0;
    globZre = 2;
    globKon = 0;
    globInt = 1;
    globWie = 0;
    globCha = 0;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateN()
{
    globSil = 0;
    globZre = 2;
    globKon = 0;
    globInt = 0;
    globWie = 0;
    globCha = 1;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateC()
{
    globSil = 1;
    globZre = 1;
    globKon = 1;
    globInt = 1;
    globWie = 1;
    globCha = 1;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateCl()
{

}
