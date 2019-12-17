using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace AtilaV1.Models
{
    public class Calificacion
    {
        [Key]
        public string Codigo { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Docid { get; set; }
        [Required]
        public string Docname { get; set; }
        [Required]
        public string Rubricacodigo { get; set; }
        [Required]
        public string Rubricanombre { get; set; }
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
        public string Observacion { get; set; }
    }
}