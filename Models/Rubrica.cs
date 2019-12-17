using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace AtilaV1.Models
{
    public class Rubrica
    {
        [Key]
        public string Codigo { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Item_1 { get; set; }
        [Required]
        public string Item_2 { get; set; }
        [Required]
        public string Item_3 { get; set; }
        [Required]
        public string Item_4 { get; set; }
        [Required]
        public string Item_5 { get; set; }
        [Required]
        public string Item_6 { get; set; }
        [Required]
        public string Item_7 { get; set; }
        [Required]
        public string Item_8 { get; set; }
        [Required]
        public string Item_9 { get; set; }
        [Required]
        public string Item_10 { get; set; }
        [Required]
        public string Item_11 { get; set; }
        [Required]
        public string Item_12 { get; set; }
        [Required]
        public string Item_13 { get; set; }
        [Required]
        public string Item_14 { get; set; }
        [Required]
        public string Item_15 { get; set; }
        [Required]
        public string Item_16 { get; set; }
        [Required]
        public string Item_17 { get; set; }
        [Required]
        public string Item_18 { get; set; }
        [Required]
        public string Item_19 { get; set; }
    }
}