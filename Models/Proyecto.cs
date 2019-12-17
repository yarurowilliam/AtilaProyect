using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace AtilaV1.Models
{
    public class Proyecto
    {
        [Key]
        public string Codigo { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Introduccion { get; set; }
        [Required]
        public string Objetivos { get; set; }
        [Required]
        public string Metodologia { get; set; }
        [Required]
        public string Resultados { get; set; }
        [Required]
        public string Concluciones { get; set; }
        [Required]
        public string Referencias { get; set; }
        [Required]
        public string Estado { get; set; } 
        public string Observacion { get; set; }
        public byte[] Pendon { get; set; }
        public string Coddoc { get; set; }
        public string Namedoc { get; set; }
        public string Codasig { get; set; }
        public string Nameasig { get; set; }
        public string Codalum1 { get; set; }
        public string Namealum1 { get; set; }
        public string Codalum2 { get; set; }
        public string Namealum2 { get; set; }
        public string Codalum3 { get; set; }
        public string Namealum3 { get; set; }
        public string Coddocrev { get; set; }
        public string Namedocrev { get; set; }
        public string Idcalificador { get; set; }
        public string Namecalificador { get; set; }
        public string Rubricacodigo { get; set; }
        [Range(0,100)]
        public int Item_1 { get; set; }
        [Range(0,100)]
        public int Item_2 { get; set; }
        [Range(0,100)]
        public int Item_3 { get; set; }
        [Range(0,100)]
        public int Item_4 { get; set; }
        [Range(0,100)]
        public int Item_5 { get; set; }
        [Range(0,100)]
        public int Item_6 { get; set; }
        [Range(0,100)]
        public int Item_7 { get; set; }
        [Range(0,100)]
        public int Item_8 { get; set; }
        [Range(0,100)]
        public int Item_9 { get; set; }
        [Range(0,100)]
        public int Item_10 { get; set; }
        [Range(0,100)]
        public int Item_11 { get; set; }
        [Range(0,100)]
        public int Item_12 { get; set; }
        [Range(0,100)]
        public int Item_13 { get; set; }
        [Range(0,100)]
        public int Item_14 { get; set; }
        [Range(0,100)]
        public int Item_15 { get; set; }
        [Range(0,100)]
        public int Item_16 { get; set; }
        [Range(0,100)]
        public int Item_17 { get; set; }
        [Range(0,100)]
        public int Item_18 { get; set; }
        [Range(0,100)]
        public int Item_19 { get; set; }
        public double Promedio { get; set; }
        public string Final { get; set; }
    }
}