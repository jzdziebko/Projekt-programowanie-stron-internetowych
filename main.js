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
var globStatSil = 0;
var globStatZre = 0;
var globStatKon = 0;
var globStatInt = 0;
var globStatWie = 0;
var globStatCha = 0;
var globPozBon = 0;
document.getElementById('cstr').defaultValue=10;
document.getElementById('cdex').defaultValue=10;
document.getElementById('ccon').defaultValue=10;
document.getElementById('cint').defaultValue=10;
document.getElementById('cwis').defaultValue=10;
document.getElementById('ccha').defaultValue=10;
function updatePoz() 
{
    const pop = document.getElementById('poz');
    let x=(Math.ceil(pop.value/4))+1;
    globPozBon=x;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateSil() 
{
    const input = document.getElementById('cstr');
    const output1 = document.getElementById('modS');
    const output2 = document.getElementById('saveS');
    let y=Math.floor((input.value-10+globSil)/2);
    let z=y+globSilS
    output1.textContent =" "+ y;
    output2.textContent =" "+ z;
    globStatSil=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateZre() 
{
    const input = document.getElementById('cdex');
    const output1 = document.getElementById('modZ');
    const output2 = document.getElementById('saveZ');
    let y=Math.floor((input.value-10+globZre)/2);
    let z=y+globZreS;
    output1.textContent = y;
    output2.textContent = z;
    globStatZre=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateKon() 
{
    const input = document.getElementById('ccon');
    const output1 = document.getElementById('modK');
    const output2 = document.getElementById('saveK');
    let y=Math.floor((input.value-10+globKon)/2);
    let z=y+globKonS;
    output1.textContent = y;
    output2.textContent = z;
    globStatKon=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateInt() 
{
    const input = document.getElementById('cint');
    const output1 = document.getElementById('modI');
    const output2 = document.getElementById('saveI');
    let y=Math.floor((input.value-10+globInt)/2);
    let z=y+globIntS;
    output1.textContent = y;
    output2.textContent = z;
    globStatInt=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateWie() 
{
    const input = document.getElementById('cwis');
    const output1 = document.getElementById('modM');
    const output2 = document.getElementById('saveM');
    let y=Math.floor((input.value-10+globWie)/2);
    let z=y+globWieS;
    output1.textContent = y;
    output2.textContent = z;
    globStatWie=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
}
function updateCha() 
{
    const input = document.getElementById('ccha');
    const output1 = document.getElementById('modC');
    const output2 = document.getElementById('saveC');
    let y=Math.floor((input.value-10+globCha)/2);
    let z=y+globChaS;
    output1.textContent = y;
    output2.textContent = z;
    globStatCha=y;
    updateNrz();
    updateBrn();
    updateZbr();
    updateUmj();
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
function updateUmj()
{
    var x = document.getElementById('umjbonus');
    if(document.getElementById('umj1').checked)
    {
        x.textContent="Akrobatyka: "+(globStatZre+globPozBon);
    }else if(document.getElementById('umj2').checked)
    {
        x.textContent="Opieka Nad Zwierzętami: "+(globStatWie+globPozBon);
    }else if(document.getElementById('umj3').checked)
    {
        x.textContent="Wiedza Tajemna: "+(globStatInt+globPozBon);
    }else if(document.getElementById('umj4').checked)
    {
        x.textContent="Atletyka: "+(globStatSil+globPozBon);
    }else if(document.getElementById('umj5').checked)
    {
        x.textContent="Oszustwo: "+(globStatCha+globPozBon);
    }else if(document.getElementById('umj6').checked)
    {
        x.textContent="Historia: "+(globStatInt+globPozBon);
    }else if(document.getElementById('umj7').checked)
    {
        x.textContent="Intuicja: "+(globStatWie+globPozBon);
    }else if(document.getElementById('umj8').checked)
    {
        x.textContent="Zastraszanie: "+(globStatCha+globPozBon);
    }else if(document.getElementById('umj9').checked)
    {
        x.textContent="Śledztwo: "+(globStatInt+globPozBon);
    }else if(document.getElementById('umj10').checked)
    {
        x.textContent="Medycyna: "+(globStatWie+globPozBon);
    }else if(document.getElementById('umj11').checked)
    {
        x.textContent="Natura: "+(globStatWie+globPozBon);
    }else if(document.getElementById('umj12').checked)
    {
        x.textContent="Percepcja: "+(globStatWie+globPozBon);
    }else if(document.getElementById('umj13').checked)
    {
        x.textContent="Występy: "+(globStatCha+globPozBon);
    }else if(document.getElementById('umj14').checked)
    {
        x.textContent="Perswazja: "+(globStatCha+globPozBon);
    }else if(document.getElementById('umj15').checked)
    {
        x.textContent="Religia: "+(globStatInt+globPozBon);
    }else if(document.getElementById('umj16').checked)
    {
        x.textContent="Zwinne Dłonie: "+(globStatZre+globPozBon);
    }else if(document.getElementById('umj17').checked)
    {
        x.textContent="Skradanie Się: "+(globStatZre+globPozBon);
    }else if(document.getElementById('umj18').checked)
    {
        x.textContent="Sztuka Przetrwania: "+(globStatWie+globPozBon);
    }
}
function updateZbr()
{
    var x = document.getElementById('zbrbonus');
    if(document.getElementById('bie0').checked)
    {
        x.textContent=10+globStatZre;
    }else if(document.getElementById('bie1').checked)
    {
        x.textContent=11+globStatZre;
    }else if(document.getElementById('bie2').checked)
    {
        if(globStatZre<3)
        {
            x.textContent=13+globStatZre;
        }else
        {
            x.textContent=15;
        }
    }else if(document.getElementById('bie3').checked)
    {
        x.textContent=17;
    }
}
function updateBrn()
{
    var x = document.getElementById('brnbonus');
    if(document.getElementById('bie4').checked)
    {
        x.textContent=globStatZre+globPozBon;
    }else if(document.getElementById('bie5').checked)
    {
        x.textContent=globStatSil+globPozBon;
    }
}
function updateNrz()
{
    var x = document.getElementById('nrzbonus');
    if(document.getElementById('bie6').checked)
    {
        x.textContent=globStatCha+globPozBon;
    }else if(document.getElementById('bie7').checked)
    {
        x.textContent=globStatZre+globPozBon;
    }else if(document.getElementById('bie8').checked)
    {
        x.textContent=globStatInt+globPozBon;
    }
}
