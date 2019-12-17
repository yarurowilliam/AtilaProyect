using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace AtilaV1.Models
{
    public class Docente
    {
        [Key]
        public string Identificacion { get; set; }
        [Required]
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        [Required]
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        [Required]
        public string Rol { get; set; }
        public string Telefono { get; set; }
        [Required, EmailAddress]
        public string Correo { get; set; }
        [Required]
        public string Password { get; set; }
    }
}