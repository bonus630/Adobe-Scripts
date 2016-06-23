/**
* @@@BUILDINFO@@@escala.jsx !Version! Mon Jun 01 2015 18:54:03 GMT-0300
*/
/**
*   Gerador de Escala Cartográfica for Illustrator
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


var m = new Window('dialog','Escala Cartográfica');
m.panel_c = m.add('panel',undefined,"Escala Cartográfica",{name:'panel_c'});
m.panel_c.orientation= 'row';


m.lba_height = m.panel_c.add('staticText',undefined,'Projeção',{name:'lba_height'});
m.ed_height = m.panel_c.add('edittext',[0,20,30,40],'0',{name:'ed_height'});
m.lba_width = m.panel_c.add('staticText',undefined,'1:',{name:'lba_width'});
m.ed_width = m.panel_c.add('edittext',[0,20,30,40],'0',{name:'ed_width'});

m.btn_gerar = m.panel_c.add('button',undefined,'Gerar',{name:'btn_gerar'});
m.btn_gerar.onClick = function(){create();};
m.show();

function create(){
        alert("");
    }