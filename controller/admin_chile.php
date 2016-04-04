<?php

/*
 * This file is part of FacturaSctipts
 * Copyright (C) 2015-2016  Carlos Garcia Gomez  neorazorx@gmail.com
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

require_model('impuesto.php');

/**
 * Description of admin_chile
 *
 *
 */
class admin_chile extends fs_controller
{
   public function __construct()
   {
      parent::__construct(__CLASS__, 'chile', 'admin');
   }
   
   protected function private_core()
   {
      $this->share_extensions();
      
      if( isset($_GET['opcion']) )
      {
         if($_GET['opcion'] == 'moneda')
         {
            $this->empresa->coddivisa = 'CLP';
            if( $this->empresa->save() )
            {
               $this->new_message('Datos guardados correctamente.');
            }
         }
         else if($_GET['opcion'] == 'pais')
         {
            $this->empresa->codpais = 'CHL';
            if( $this->empresa->save() )
            {
               $this->new_message('Datos guardados correctamente.');
            }
         }
         else if($_GET['opcion'] == 'iva')
         {
            /// eliminamos los impuestos que ya existen (los de Wspaña)
            $imp0 = new impuesto();
            foreach($imp0->all() as $impuesto)
            {
               $impuesto->delete();
            }
            
            /// añadimos los de Chile
            $codimp = array("IVACL");
            $desc = array("IVA 19%");
            $recargo = 0;
            $iva = array("19");
            $cant = count($codimp);
            for($i=0; $i<$cant; $i++)
            {
               $impuesto = new impuesto();
               $impuesto->codimpuesto = $codimp[$i];
               $impuesto->descripcion = $desc[$i];
               $impuesto->recargo = $recargo;
               $impuesto->iva = $iva[$i];
               $impuesto->save();
            }
            
            $this->new_message('Impuestos de Chile añadido.');
         }
      }
   }
   
   private function share_extensions()
   {
      
   }
}
