/**
* @@@BUILDINFO@@@ fundo-auto.jsx !Version! Mon Jun 01 2015 18:54:03 GMT-0300
*/
/**
*   Gerador de Corte e Vinco Bonus630 for Illustrator
*    Copyright (C) 2015  Bonus630
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Bonus630 = {};

Bonus630.FacaBase = function()
{
    this.doc = app.activeDocument;
    var self = this;
    var mm = 2.834645;
    var initialX = 0;
    var initialY = 0;
    
     this.convertPointsToMillimeters = function   convertPointsToMillimeters(points)
     {
         return points * mm;
     }
    this.drawStroke =function drawStroke( points)
    {
        for(i=0;i<points.length;i++)
        {
           points[i][0] = (points[i][0] + initialX) * mm;
           points[i][1] = (points[i][1] + initialY) * mm;
       }
        var stroke = this.doc.pathItems.add();
        stroke.stroked = true;
        
        stroke.setEntirePath(points);
        return stroke;
    }
    this.drawDashedStroke = function drawDashedStroke( points)
    {
             for(i=0;i<points.length;i++)
        {
           points[i][0] = (points[i][0] + initialX) * mm;
           points[i][1] = (points[i][1] + initialY) * mm;
       }
        var stroke = this.doc.pathItems.add();
        stroke.stroked = true;
        stroke.setEntirePath(points);
        stroke.strokeDashes =[4];
        return stroke;
    }
    this.drawRedDashedStroke = function drawRedDashedStroke( points)
    {
         for(i=0;i<points.length;i++)
        {
           points[i][0] = (points[i][0] + initialX) * mm;
           points[i][1] = (points[i][1] + initialY) * mm;
       }
        var stroke = this.doc.pathItems.add();
        stroke.stroked = true;
        stroke.setEntirePath(points);
        var red = new CMYKColor();
        red.magenta = 100;
        stroke.strokeColor = red;
        stroke.strokeDashes =[4];
        return stroke;
    }
    this.setInitialPoint= function setInitialPoint( x, y)
    {
       initialX = x;
       initialY = y;
      
    }
   
   
    this.drawBody = function drawBody( width, height, length)
    {
        //Desenha retângulo do corpo
            var linesVert1 = self.drawDashedStroke([[0,0],[0,height]]);
            var linesVert2 = self.drawDashedStroke([[length, 0],[length, height]]);
            var linesVert3 = self.drawDashedStroke([[width + length, 0],[width + length,height]]);
            var linesVert4 =  self.drawDashedStroke([[width + 2 * length, 0],[ width + 2 * length, height]]);
            var linesVert5 =  self.drawStroke([[2 * width + 2 * length, 0],[2 * width + 2 * length, height]]);
            var lineBottom =  self.drawDashedStroke([[0,0],[2 * width + 2 * length, 0]]);
            var lineTop1 = self.drawDashedStroke([[0,height],[length,height]]);
            var lineTop2 =  self.drawDashedStroke([[length, height],[ length + width,height]]);
            var lineTop3 =  self.drawStroke([[length + width, height],[2 * length + width, height]]);
            var lineTop4 =  self.drawDashedStroke([[2 * length + width, height],[2 * length + 2 * width, height]]);
     //Desenha Aba Colagem
        var abaColagem =   self.drawStroke([[0,0],[-12,4],[-12,height-(4)],[0,height]]);
    //Desenha Aba Segurança
        var securyTab = self.drawStroke([ [0,height], [0,height + width],[4, height + width +  12],[length - 4, height + width + 12],[length,height + width],[length,height]]);
        var sTab = self.drawDashedStroke([[0,height + width],[length,height + width]]);
    //Desenha Aba lateral esquerda tampa
         var tabCoverSideLeft = self.drawStroke([ [length,height],[length + 2,height + 2 * (Math.tan(45 * Math.PI / 180))],        
           [length + 2,height + (width * 2 / 3)],[(length + 2) + width - width / 3 * Math.tan(45 * Math.PI / 180), height + (width * 2 / 3)],
           [length + width - 2, height + width / 3],[length + width, height + width / 3],[length + width,height]]);
          //Desenha Aba lateral direita tampa
            var tabCoverSideRight  = self.drawStroke([[length + width + length,height],[length + width + length,height + width / 3],[length + width + length+ 2,height + width / 3],
            [(length + width + length) - 2 + width / 3 * Math.tan(45 * Math.PI / 180),height + width * 2 / 3],[(length + width + length)  + width - 2,height + width * 2 / 3],
            [(length + width + length)  + width - 2, height + 2 * Math.tan(45 * Math.PI / 180)],[(length + width + length)  + width,height]]);  
    }
}
Bonus630.FacaAuto = function(){
    var self = this;
    
    function FacaAuto(){};
   
    self.draw = function(width,height,length){
    self.setInitialPoint(20,-(height + width +  20));
    var body = self.drawBody(width,height,length);
  
  //Desenha Aba esquerda do fundo
  var abaEsquerda = self.drawStroke ([[length,0],[(Math.tan (15*Math.PI / 180)*width/2)+length,-width/2],
  [(length + width) - (Math.tan(45 * Math.PI / 180) * width / 2),-width / 2],[length + width,0]]);
  
        //Desenha Aba direita do fundo
        var abaDireita = self.drawStroke([[length+(width+length),0],[((Math.tan (15*Math.PI / 180)*width/2)+length)+(width+length),-width/2],
  [((length + width) - (Math.tan(45 * Math.PI / 180) * width / 2))+(width+length),-width / 2],[length + width+(width+length),0]]);
     
     //Desenha Abas do fundo Auto
      TanAngle = 0;
            if (width < length)
                TanAngle = Math.tan(45 * Math.PI / 180);
            if (width > length)
                TanAngle = Math.tan(30 * Math.PI / 180);
            if (width == length)
                TanAngle = Math.tan(30 * Math.PI / 180);
            var tabLockBottomLeft = self.drawStroke([[ 0, 0],[ Math.tan(5 * Math.PI / 180) * 2 * width / 3, -(width / 3) * 2],[ (length / 2) - (TanAngle * (width * 3) / 10), -(width / 3) * 2],
            [ length / 2, -(width / 15) * 8],[ length / 2,  -(width / 2)],[ length / 2,  -(width / 2)],[ (length / 2) + width / 6 * TanAngle, -(width / 3 * 2)],[ length - 2, -(width / 3 * 2)],
            [ length - 2,2 * (-4 / Math.tan(45 * Math.PI / 180))],[ length - 4, -4 / Math.tan(45 * Math.PI / 180)],[ length, 0]]);
           self.drawRedDashedStroke( [[ length / 2,  -(width / 2)], [ length - 4, -4 / Math.tan(45 * Math.PI / 180)]]);
      

        
        var tabLockBottomRight = self.drawStroke([[ 0 +(length+width), 0],[ (Math.tan(5 * Math.PI / 180) * 2 * width / 3)+(length+width), -(width / 3) * 2],
           [((length / 2) - (TanAngle * (width * 3) / 10))+(length+width), -(width / 3) * 2],[ length / 2+(length+width), -(width / 15) * 8],
           [length / 2+(length+width),  -(width / 2)],[ length / 2+(length+width),  -(width / 2)],[((length / 2) + width / 6 * TanAngle)+(length+width), -(width / 3 * 2)],
           [length - 2+(length+width), -(width / 3 * 2)],[length - 2+(length+width),2 * (-4 / Math.tan(45 * Math.PI / 180))],[length - 4+(length+width), -4 / Math.tan(45 * Math.PI / 180)],
            [length+(length+width), 0]]);
       self.drawRedDashedStroke([[ length / 2+(length+width),  -(width / 2)], [ length - 4+(length+width), -4 / Math.tan(45 * Math.PI / 180)]]);
        }
};

Bonus630.FacaSemiAuto = function(){
    var self = this;
    function FacaSemiAuto(){};
   
    self.draw = function(width,height,length){    
    self.setInitialPoint(20,-(height + width +  20));
    var body = self.drawBody(width,height,length);
    
    var c = 2 * length + width;
   
    self.drawStroke([[c,0],[c,-width * 2 / 3],[ c + width * 2 / 3 * Math.tan(45 * Math.PI / 180), -width * 2 / 3],[c + width / 2 * Math.tan(45 * Math.PI / 180),  -width / 2],[ c + width, 0]]);
            
    self.drawStroke([[ length,  0],[length + width / 2 * Math.tan(45 * Math.PI / 180),-width / 2],[length + width - width * 2 / 3 * Math.tan(45 * Math.PI / 180), -width * 2 / 3],
    [length + width, -width * 2 / 3],[length + width, 0]]);
        
       var TanAngle =0;
            if(width<length)
                 TanAngle = Math.tan(45 * Math.PI / 180);
            if(width>length)
                TanAngle = Math.tan(20 * Math.PI / 180);
            if(width==length)
                TanAngle = Math.tan(30 * Math.PI / 180);
        self.drawStroke([[(length + width), 0],[ width / 2 * TanAngle+(length + width), -width / 2],[width / 2 * TanAngle+(length + width),- width * 2 / 3],
        [(length - width / 2 * TanAngle)+(length + width),- width * 2 / 3],[ (length - width / 2 * TanAngle)+(length + width), -width / 2],[length+(length + width), 0]]);
             
           self.drawStroke([[0,0],[0,-width * 2 / 3],            [width / 2 * TanAngle,-width * 2 / 3],[width / 2 * TanAngle, - width / 2],[length - width / 2 * TanAngle, -width / 2],
           [length - width / 2 * TanAngle, -width * 2 / 3],[length,-width * 2 / 3],[length, 0]]);
    
    }
}


var m = new Window('dialog','Gerador de Corte e Vinco Beta Somente Testes');
m.panel_c = m.add('panel',undefined,"Gerador de corte Fundo Automático e Semi-automático, by Bonus630",{name:'panel_c'});
m.panel_c.orientation= 'row';

m.DropDownList_type = m.panel_c.add('DropDownList',undefined,['Automático','Semi-automático'],{name:'DropDownList_type'}); 
m.DropDownList_type.selection = 1;
m.lba_height = m.panel_c.add('staticText',undefined,'H',{name:'lba_height'});
m.ed_height = m.panel_c.add('edittext',[0,20,30,40],'0',{name:'ed_height'});
m.lba_width = m.panel_c.add('staticText',undefined,'C',{name:'lba_width'});
m.ed_width = m.panel_c.add('edittext',[0,20,30,40],'0',{name:'ed_width'});
m.lba_length= m.panel_c.add('staticText',undefined,'L',{name:'lba_length'});
m.ed_length = m.panel_c.add('edittext',[0,20,30,40],'0',{name:'ed_length'});
m.btn_gerar = m.panel_c.add('button',undefined,'Gerar',{name:'btn_gerar'});

m.btn_gerar.onClick = function(){
    var height = m.ed_height.text.valueOf();
    var width = m.ed_width.text.valueOf();
    var length = m.ed_length.text.valueOf();
    var faca;
    if(m.DropDownList_type.selection.text=='Automático'){
        Bonus630.FacaAuto.prototype = new Bonus630.FacaBase ();
        faca = new Bonus630.FacaAuto();
        faca.draw(eval(width),eval(height),eval(length));
    }
     if(m.DropDownList_type.selection.text=='Semi-automático'){
        Bonus630.FacaSemiAuto.prototype = new Bonus630.FacaBase ();
        faca = new Bonus630.FacaSemiAuto();
        faca.draw(eval(width),eval(height),eval(length));
    }
    m.close();
   
   }
m.show();


