//http://bonus630.tk
var valueH ;
var valueW;
//var pasta = new Folder ("C:\\Users\\Reginaldo\\Desktop\\testes");
//var arquivos = pasta.getFiles("*.jpg");
//for(i=0;i<arquivos.length;i++)
//    app.load(arquivos[i]);


//Construtor da classe Window, 
var modalWindow = new Window('dialog', 'Set Values');

//Criamos dois edittext e um botão
modalWindow.ed_width = modalWindow.add('edittext',undefined,'<Max Width>',{name:'ed_width'});
modalWindow.ed_height = modalWindow.add('edittext',undefined,'<Max Height>',{name:'ed_height'});
modalWindow.btn_ok = modalWindow.add('button',undefined,'Ok',{name:'btn_ok'});

//Adicionamos evento de click em nossos edit text para apagar o texto default 
modalWindow.ed_width.onClick = function(){this.text = '';}
modalWindow.ed_height.onClick = function(){this.text = '';}

//Adicionamos evento de click em nosso botão onde o processo começara
modalWindow.btn_ok.onClick = function(){
        //Fecha nossa janela ao clickar no botão
        modalWindow.close();
        start();
    };
//Mostra nossa janela ao carregar o script
modalWindow.show();

function start()
{
    //Passa o valor dos edit text  para  variavel 
    valueW = modalWindow.ed_width.text.valueOf();
    valueH = modalWindow.ed_height.text.valueOf();
   //Abre a caixa de seleção de arquivos para serem abertos e retorna um File[]
   files = app.openDialog();
    for(i=0;i<files.length;i++)
    {
        //Carrega um arquivo para o photoshop
        app.load(files[i]);
        processFile();
    }
}


function processFile()
{
         doc = app.activeDocument;
        //Recupera caminho do arquivo
        _path = doc.path;
        //Recupera nome do arquivo
        _name = doc.name;
        //Recupera extensão do arquivo
        _extension = _name.substr (_name.lastIndexOf ('.')+1);
        _extension = _extension.toLowerCase();
        h = doc.height.as("px");
        w = doc.width.as("px");
        //Seta os valores da altura e largura seguindo a proporção do arquivo original.
        if(h>valueH||w>valueW)
        {
            if(h>w)
            {
                    nW = (valueH*w)/h;
                    h = UnitValue(valueH,"px");
                    w = UnitValue(nW,"px");
            }
            else if(h<w)
            {
                   nH = (h * valueW) / w;
                   h = UnitValue(nH,"px");
                   w = UnitValue(valueW,"px");
                   
            }
            else
            {
                    h = UnitValue(valueW,"px");
                    w = UnitValue(valueH,"px");
            }
        }
        //Redimenciona o arquivo
        doc.resizeImage(w,h,doc.resolution);
       
       //Tenta criar um diretório para armazenar as imagens redimencionadas
       modFolder = new Folder(_path+"/mod");
        if(!modFolder.create()){
            alert("Erro ao criar Diretorio");
            }
        //Sera utilizado para salvar o arquivo
        modFile = new File(modFolder+"/"+_name)
        switch(_extension)
        {
            case "jpg" :
                saveJPEG(doc, modFile, 10 );
            break;
            case "jpeg" :
               saveJPEG(doc, modFile, 10 );
            break;
         }
          //Fecha o documento atual          
        doc.close();
}
    //Para cada formato de arquivo é necessário uma função específica
function saveJPEG(doc,saveFile,quality)
{
     saveOp = new JPEGSaveOptions();
     saveOp.embedColorProfile = false;
     saveOp.formatOptions = FormatOptions.STANDARDBASELINE; 
     saveOp.matte = MatteType.NONE; 
     saveOp.quality = quality;
     doc.saveAs(saveFile, saveOp, false, Extension.LOWERCASE);   
}



 

