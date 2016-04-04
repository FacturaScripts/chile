/*
 * This file is part of FacturaSctipts
 * Copyright (C) 2016  Carlos Garcia Gomez  neorazorx@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var provincia_list = [
   {value: 'Arica'},
   {value: 'Parinacota'},
   {value: 'Iquique'},
   {value: 'Tamarugal'},
   {value: 'Antofagasta'},
   {value: 'El Loa'},
   {value: 'Tocopilla'},
   {value: 'Copiapó'},
   {value: 'Chañaral'},
   {value: 'Huasco'},
   {value: 'Elqui'},
   {value: 'Choapa'},
   {value: 'Limarí'},
   {value: 'Valparaíso'},
   {value: 'Isla de Pascua'},
   {value: 'Los Andes'},
   {value: 'Petorca'},
   {value: 'Quillota'},
   {value: 'San Antonio'},
   {value: 'San Felipe de Aconcagua'},
   {value: 'Marga Marga'},
   {value: 'Cachapoal'},
   {value: 'Cardenal Caro'},
   {value: 'Colchagua'},
   {value: 'Talca'},
   {value: 'Cauquenes'},
   {value: 'Curicó'},
   {value: 'Linares'},
   {value: 'Concepción'},
   {value: 'Arauco'},
   {value: 'Biobío'},
   {value: 'Ñuble'},
   {value: 'Cautín'},
   {value: 'Malleco'},
   {value: 'Valdivia'},
   {value: 'Ranco'},
   {value: 'Llanquihue'},
   {value: 'Chiloé'},
   {value: 'Osorno'},
   {value: 'Palena'},
   {value: 'Coihaique'},
   {value: 'Aisén'},
   {value: 'Capitán Prat'},
   {value: 'General Carrera'},
   {value: 'Magallanes'},
   {value: 'Antártica Chilena'},
   {value: 'Tierra del Fuego'},
   {value: 'Ultima Esperanza'},
   {value: 'Santiago'},
   {value: 'Cordillera'},
   {value: 'Chacabuco'},
   {value: 'Maipo'},
   {value: 'Melipilla'},
   {value: 'Talagante'},
];

$(document).ready(function() {
   $("#ac_provincia, #ac_provincia2").autocomplete({
      lookup: provincia_list,
   });
});
