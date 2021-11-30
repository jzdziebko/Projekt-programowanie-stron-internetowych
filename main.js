var globSil = 0;
var globZre = 0;
var globKon = 0;
var globInt = 0;
var globWie = 0;
var globCha = 0;
var globSilS = 0;
var globZreS = 0;
var globKonS = 0;
var globIntS = 0;
var globWieS = 0;
var globChaS = 0;
function updateSil(x) 
{
    const input = document.getElementById('cstr')
    const output1 = document.getElementById('modS');
    const output2 = document.getElementById('saveS');
    let y=Math.floor((input.value-10+globSil)/2);
    let z=y+globSilS
    output1.textContent = y;
    output2.textContent = z;
}
function updateZre(x) 
{
    const input = document.getElementById('cdex')
    const output1 = document.getElementById('modZ');
    const output2 = document.getElementById('saveZ');
    let y=Math.floor((input.value-10+globZre)/2);
    let z=y+globZreS;
    output1.textContent = y;
    output2.textContent = z;
}
function updateKon(x) 
{
    const input = document.getElementById('ccon')
    const output1 = document.getElementById('modK');
    const output2 = document.getElementById('saveK');
    let y=Math.floor((input.value-10+globKon)/2);
    let z=y+globKonS;
    output1.textContent = y;
    output2.textContent = z;
}
function updateInt(x) 
{
    const input = document.getElementById('cint')
    const output1 = document.getElementById('modI');
    const output2 = document.getElementById('saveI');
    let y=Math.floor((input.value-10+globInt)/2);
    let z=y+globIntS;
    output1.textContent = y;
    output2.textContent = z;
}
function updateWie(x) 
{
    const input = document.getElementById('cwis')
    const output1 = document.getElementById('modM');
    const output2 = document.getElementById('saveM');
    let y=Math.floor((input.value-10+globWie)/2);
    let z=y+globWieS;
    output1.textContent = y;
    output2.textContent = z;
}
function updateCha(x) 
{
    const input = document.getElementById('ccha')
    const output1 = document.getElementById('modC');
    const output2 = document.getElementById('saveC');
    let y=Math.floor((input.value-10+globCha)/2);
    let z=y+globChaS;
    output1.textContent = y;
    output2.textContent = z;
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
    globSilS = 0;
    globZreS = 0;
    globKonS = 0;
    globIntS = 0;
    globWieS = 2;
    globChaS = 2;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateFi()
{
    globSilS = 2;
    globZreS = 0;
    globKonS = 2;
    globIntS = 0;
    globWieS = 0;
    globChaS = 0;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateRo()
{
    globSilS = 0;
    globZreS = 2;
    globKonS = 0;
    globIntS = 2;
    globWieS = 0;
    globChaS = 0;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
function updateWi()
{
    globSilS = 0;
    globZreS = 0;
    globKonS = 0;
    globIntS = 2;
    globWieS = 2;
    globChaS = 0;
    updateSil();
    updateZre();
    updateKon();
    updateInt();
    updateWie();
    updateCha();
}
